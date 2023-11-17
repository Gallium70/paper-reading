# TreeSLS: A Whole-system Persistent Microkernel with Tree-structured State Checkpoint on NVM

原文地址：[10.1145/3600006.3613160](https://dl.acm.org/doi/pdf/10.1145/3600006.3613160)

## 背景动机

1. 基于 NVM 的单层存储 SLS
2. 现有的 SLS 大部分还是基于 DRAM + 闪存的两层结构，靠软件检查点提供单层的抽象，性能开销大，检查点频率低
3. 全系统持久化一方面希望对应用透明，另一方面还要对外部同步
4. 微内核的 Capability Tree 结构简单，其他系统服务状态可以直接按照用户程序内存数据来持久化

## 方法和贡献

1. 基于 NVM 和微内核 Capability Tree 结构和检查点的全系统持久化 SLS
2. 透明外部同步性

## 设计

1. 定期停机，让所有处理器核进入内核态等待，其中一个核负责将系统的 Capability Tree 做检查点持久化
2. 检查点管理器使用日志系统维护自身的持久化，避免自举问题
3. 内存页分冷热处理，热页在停机的时候持久化，冷页先标记成只读，等应用尝试修改的时候触发页错误，再持久化
