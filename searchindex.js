Object.assign(window.search, {"doc_urls":["2023/arxiv-user-schedule.html#towards-fast-adaptive-and-hardware-assisted-user-space-scheduling","2023/arxiv-user-schedule.html#背景动机","2023/arxiv-user-schedule.html#方法贡献","2023/arxiv-user-schedule.html#设计和实现","2023/arxiv-user-schedule.html#评估","2023/arxiv-user-schedule.html#性能对比","2023/arxiv-user-schedule.html#libpreemptible","2023/arxiv-user-schedule.html#真实负载","2023/arxiv-user-schedule.html#相关工作","2023/arxiv-user-schedule.html#评论"],"index":{"documentStore":{"docInfo":{"0":{"body":1,"breadcrumbs":17,"title":8},"1":{"body":3,"breadcrumbs":9,"title":0},"2":{"body":2,"breadcrumbs":9,"title":0},"3":{"body":5,"breadcrumbs":9,"title":0},"4":{"body":0,"breadcrumbs":9,"title":0},"5":{"body":3,"breadcrumbs":9,"title":0},"6":{"body":9,"breadcrumbs":10,"title":1},"7":{"body":6,"breadcrumbs":9,"title":0},"8":{"body":10,"breadcrumbs":9,"title":0},"9":{"body":18,"breadcrumbs":9,"title":0}},"docs":{"0":{"body":"原文地址： arXiv:2308.02896","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling","id":"0","title":"Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling"},"1":{"body":"云应用的微服务需要满足尾延迟约束，而双模、重尾分布的任务在协作式调度下尾延迟表现不佳，需要抢占式调度； 内核只能提供毫秒级的线程抢占调度，开销大，无法满足微秒级的尾延迟要求； Shinjuku 利用虚拟化的 IPI 通知实现了微秒级时间片调度，但在共享云场景下可能无法访问 APIC。","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 背景动机","id":"1","title":"背景动机"},"2":{"body":"基于 x86 用户态中断扩展 (UINTR) ，提供可微秒级抢占调度的用户态线程库，快速精准的用户态计时器，允许应用提供灵活的调度策略，为用户态中断提供新的软件抽象层。","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 方法/贡献","id":"2","title":"方法/贡献"},"3":{"body":"LibPreemptible: 函数线程，请求上下文，DDL LibUtimer: 轮询 TSC, 用 UMWAIT 降低功耗或让出超线程 调度器: 全局就绪队列，动态调整调度周期","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 设计和实现","id":"3","title":"设计和实现"},"4":{"body":"","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 评估","id":"4","title":"评估"},"5":{"body":"负载类型：重尾（双模态）、轻尾（指数）、动态（前半段重尾，后半段轻尾） 相同尾延迟约束下，吞吐量比 Shinjuku 高 10% ~ 50%","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 性能对比","id":"5","title":"性能对比"},"6":{"body":"微测试：uintrFd 即使在阻塞 (blocked) 状态下性能也比其他 IPC 好很多，大约是非阻塞的 uintr 的 1/2 ~ 1/3 LibUtimer 的精确性和扩展性都优于内核定时器；内核定时器做不到 20us 级别，基本上下限是 60us 。","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » LibPreemptible","id":"6","title":"LibPreemptible"},"7":{"body":"MICA KVS 作为延迟敏感应用， zlib 压缩作为尽力调度 (best-effort) 应用 调度策略： FCFS+抢占，固定抢占周期；FCFS+抢占，动态周期 固定比例混合请求，稳定请求量和突发请求量","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 真实负载","id":"7","title":"真实负载"},"8":{"body":"数据平面 OS: IX, ZygOS, Shinjuku 用户态线程: Go, uThreads, C++ 协程; Libturquoise 首次通过定时器实现抢占调度用户态线程 调度策略: FCFS, RSS, 工作窃取，抢占和完全无抢占，定制硬件","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 相关工作","id":"8","title":"相关工作"},"9":{"body":"基本上是用户态中断版的 Shinjuku ，再加上一些动态调度策略，背景和测试负载与 Shinjuku 一脉相承。测试设计和相关工作的整理比较丰富。 微测试条件和 Intel 的内核邮件里的基本相同， signal 和 pipe 表现也接近，但 eventfd 的延迟几乎相差两倍，比较奇怪。 RISC-V (至少 Rocket) 缺少 UMWAIT 这种类似于用户态 wfi 或者 wfe 的指令，也没有超线程，轮询用户态中断可能就比较浪费 CPU 了。 主要作者来自康奈尔， MIT 和 Intel ，另外 Shinjuku 的作者也在其中。虽然本文目前在预印本网站上，但从作者之一的主页推测可能在投 SOSP '23 。","breadcrumbs":"arxiv » Towards Fast, Adaptive, and Hardware-Assisted User-Space Scheduling » 评论","id":"9","title":"评论"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"/":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"2":{"0":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}},"3":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"5":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"6":{"0":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"a":{"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{":":{"2":{"3":{"0":{"8":{".":{"0":{"2":{"8":{"9":{"6":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":1,"docs":{"8":{"tf":1.0}},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"9":{"tf":1.0}}}}},"d":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"f":{"df":1,"docs":{"8":{"tf":1.0}},"s":{"+":{"df":0,"docs":{},"抢":{"df":0,"docs":{},"占":{"df":0,"docs":{},"，":{"df":0,"docs":{},"固":{"df":0,"docs":{},"定":{"df":0,"docs":{},"抢":{"df":0,"docs":{},"占":{"df":0,"docs":{},"周":{"df":0,"docs":{},"期":{"df":0,"docs":{},"；":{"df":0,"docs":{},"f":{"c":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}},"p":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"x":{"df":1,"docs":{"8":{"tf":1.0}}}},"k":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"df":4,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.7320508075688772}}}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}}},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"s":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}},"f":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"v":{"df":1,"docs":{"9":{"tf":1.0}}},"w":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.0}}},"i":{"df":1,"docs":{"9":{"tf":1.0}}}}},"x":{"8":{"6":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"z":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"breadcrumbs":{"root":{"1":{"/":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"3":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"2":{"0":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}},"3":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}},"5":{"0":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"6":{"0":{"df":0,"docs":{},"u":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"a":{"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"x":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{":":{"2":{"3":{"0":{"8":{".":{"0":{"2":{"8":{"9":{"6":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":10,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":1,"docs":{"8":{"tf":1.0}},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"9":{"tf":1.0}}}}},"d":{"d":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"d":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"f":{"df":1,"docs":{"8":{"tf":1.0}},"s":{"+":{"df":0,"docs":{},"抢":{"df":0,"docs":{},"占":{"df":0,"docs":{},"，":{"df":0,"docs":{},"固":{"df":0,"docs":{},"定":{"df":0,"docs":{},"抢":{"df":0,"docs":{},"占":{"df":0,"docs":{},"周":{"df":0,"docs":{},"期":{"df":0,"docs":{},"；":{"df":0,"docs":{},"f":{"c":{"df":0,"docs":{},"f":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}},"p":{"c":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"x":{"df":1,"docs":{"8":{"tf":1.0}}}},"k":{"df":0,"docs":{},"v":{"df":1,"docs":{"7":{"tf":1.0}}}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.4142135623730951}}}}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"i":{"c":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"c":{"df":1,"docs":{"9":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"8":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"k":{"df":0,"docs":{},"u":{"df":4,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.7320508075688772}}}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}}},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"s":{"c":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}},"f":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"3":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":10,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0},"9":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"v":{"df":1,"docs":{"9":{"tf":1.0}}},"w":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":1,"docs":{"9":{"tf":1.0}}},"i":{"df":1,"docs":{"9":{"tf":1.0}}}}},"x":{"8":{"6":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"z":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"y":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"title":{"root":{"a":{"d":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"h":{"a":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});