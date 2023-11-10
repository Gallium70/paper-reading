# Achieving Microsecond-Scale Tail Latency Efficiently with Approximate Optimal Scheduling

原文地址：[doi/10.1145/3600006.3613136](https://dl.acm.org/doi/10.1145/3600006.3613136)

代码仓库：[dslab-epfl/concord](https://github.com/dslab-epfl/concord)

## 背景动机

1. 尾延迟约束
2. 针对尾延迟优化的系统往往牺牲吞吐、可部署性和通用性

## 方法/贡献

Concord 通过近似模拟单队列调度和（基于中断的）精确抢占的行为，能够大幅提升吞吐率，同时又几乎不影响尾延迟，不牺牲可部署性和通用性，以此在吞吐和尾延迟上取得更好的平衡。

## 设计和实现

1. 编译器插入调度点，工作线程和调度器之间通过缓存异步通信，近似精确抢占
2. JBSQ 调度器，近似单队列，减少缓存一致性带来的阻塞
3. 任务调度器也参与处理请求

## 评估

---

## 评论

看了下代码，比想象中还要简单，似乎并没有特殊的针对缓存优化的操作，直接放了个全局变量去查的。另外既然是在 LLVM 上加了一个 pass ，那应该对应用的语言要求不高， Rust 这种编译到 LLVM IR 的也能用。

核心的部分包括 [在循环中插代码](https://github.com/dslab-epfl/concord/blob/main/src/cache-line-pass/src/Concord.cpp#L182) ， [在函数中插代码](https://github.com/dslab-epfl/concord/blob/main/src/cache-line-pass/src/Concord.cpp#L228) （不过这一部分好像没有调用）。在 IR 层面主要加了这些操作：

1. 查找或创建全局变量 `concord_preempt_now`
2. 加载该全局变量的值，判断是否为 1
3. 若为 1 ，跳转到切换函数 `concord_func`

在[调度器代码](https://github.com/dslab-epfl/concord/blob/main/src/lib/concord.c) 中，基本上的做法就是轮询 `rdtsc` ，如果时间到了，就把 `concord_preempt_now` 全局变量置为 1 。除了这个变量放在 TLS 外，目前没有看到其他针对缓存的优化，推测是轮询频率较高所以这个变量能常驻在缓存中。
