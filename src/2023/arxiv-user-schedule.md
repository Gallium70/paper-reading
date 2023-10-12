# Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling

原文地址： [arXiv:2308.02896](https://arxiv.org/abs/2308.02896)

## 背景动机

1. 云应用的微服务需要满足尾延迟约束，而双模、重尾分布的任务在协作式调度下尾延迟表现不佳，需要抢占式调度；
2. 内核只能提供毫秒级的线程抢占调度，开销大，无法满足微秒级的尾延迟要求；
3. Shinjuku 利用虚拟化的 IPI 通知实现了微秒级时间片调度，但在共享云场景下可能无法访问 APIC。

## 方法/贡献

基于 x86 用户态中断扩展 (UINTR) ，提供可微秒级抢占调度的用户态线程库，快速精准的用户态计时器，允许应用提供灵活的调度策略，为用户态中断提供新的软件抽象层。

## 设计和实现

1. LibPreemptible: 函数线程，请求上下文，DDL
2. LibUtimer: 轮询 TSC, 用 `UMWAIT` 降低功耗或让出超线程
3. 调度器: 全局就绪队列，动态调整调度周期

## 评估

### 性能对比

负载类型：重尾（双模态）、轻尾（指数）、动态（前半段重尾，后半段轻尾）

相同尾延迟约束下，吞吐量比 Shinjuku 高 10% ~ 50%

### LibPreemptible

微测试：uintrFd 即使在阻塞 (blocked) 状态下性能也比其他 IPC 好很多，大约是非阻塞的 uintr 的 1/2 ~ 1/3

LibUtimer 的精确性和扩展性都优于内核定时器；内核定时器做不到 20us 级别，基本上下限是 60us 。

### 真实负载

MICA KVS 作为延迟敏感应用， zlib 压缩作为尽力调度 (best-effort) 应用

调度策略： FCFS+抢占，固定抢占周期；FCFS+抢占，动态周期

固定比例混合请求，稳定请求量和突发请求量

## 相关工作

- 数据平面 OS: IX, ZygOS, Shinjuku
- 用户态线程: Go, uThreads, C++ 协程; Libturquoise 首次通过定时器实现抢占调度用户态线程
- 调度策略: FCFS, RSS, 工作窃取，抢占和完全无抢占，定制硬件

---

## 评论

基本上是用户态中断版的 Shinjuku ，再加上一些动态调度策略，背景和测试负载与 Shinjuku 一脉相承。测试设计和相关工作的整理比较丰富。

微测试条件和 Intel 的内核邮件里的基本相同， signal 和 pipe 表现也接近，但 eventfd 的延迟几乎相差两倍，比较奇怪。

RISC-V (至少 Rocket) 缺少 `UMWAIT` 这种类似于用户态 `wfi` 或者 `wfe` 的指令，也没有超线程，轮询用户态中断可能就比较浪费 CPU 了。

主要作者来自康奈尔， MIT 和 Intel ，另外 Shinjuku 的作者也在其中。虽然本文目前在预印本网站上，但从作者之一的主页推测可能在投 SOSP '23 。
