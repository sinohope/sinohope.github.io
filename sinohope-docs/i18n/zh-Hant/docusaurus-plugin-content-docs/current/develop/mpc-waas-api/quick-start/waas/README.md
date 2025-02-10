---
sidebar_position: "2"
---
# MPC WaaS 快速入门

### 本教程主要涉及以下事项：
- 部署并配置MPC Node
- 高级功能介绍

### 部署并配置MPC Node

Sinohope WaaS使用 MPC-TSS 技术提供服务，并采用 3-3 的阈值签名设置，平台持有2片私钥分片，用户持有1片私钥分片。

Sinohope提供 MPC Node软件，由客户部署运行，用于管理属于用户的私钥分片。要配置 MPC Node，主要有以下事项：

1. 准备：开通MPC WaaS 账号；准备好部署环境，获取并验证 MPC Node 安装包；
2. 初始化节点，生成节点的 Node ID 和 部署回调服务所需的节点公钥；
3. （按需）部署及配置您的回调服务；
4. 绑定MPC Node，登录 web console 配置 MPC Node，将您的 Node ID 与您的组织账号绑定；
5. 启动MPC Node，节点将持续运行，并自动按需驱动MPC协议的运行，其中，稍等片刻将可完成DKG，之后在 Web Console MPC Node管理界面将看到 “key share 状态”为“已生成”。
6. ❗️❗️重要：安全妥善备份 MPC Node 本地数据库文件！

> 详见 [MPC Node使用指南](ws-1-node) 章节。

### 高级功能介绍

Sinohope提供的钱包服务，对于当前已支持的公链，Sinohope将会维护所有地址的余额、交易等信息，尤其是对于UTXO模型的公链，要维护其未花费输出。Sinohope提供了相应接口供用户发起交易，而最终交易的构建、发起MPC签名流程、交易广播及跟踪均由Sinohope负责处理。

开发者集成MPC WaaS服务，可能还会有如下需求：

- 对于Sinohope当前不支持的公链，开发者考虑自行支持。
- 对于Sinohope已支持的公链，也想完全自行管理交易、余额等信息。

针对上述两个需求，MPC WaaS 提供了高级功能，允许开发者只使用钱包服务的最核心功能，即MPC协议实现以及分片密钥管理机制、地址派生、MPC签名 等功能，在此基础之上，开发者自行管理地址、余额、交易等信息及相关业务。

要开启并使用高级功能，可按如下流程执行：

1. 通过 web console 为金库开启高级功能，参考[开启高级功能](/docs/use/user-guide/waas/advanced)；
2. 在开启高级功能的金库下，创建钱包时对钱包开启高级功能，或更改钱包属性开启高级功能。相关接口：[创建钱包](/docs/develop/mpc-waas-api/v-1-waas-mpc-create-wallets)，[钱包高级功能开关](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet)；
   **注意：只有在金库和钱包均开启高级功能的情况下，该钱包才能使用高级功能。**
3. 确保您的MPC Node已配置好回调服务，参考 [MPC Node使用指南](ws-1-node)；
4. 使用“使用指定路径创建地址”接口，按自定义的路径派生公钥，并自行从公钥推导出地址。接口：[根据指定路径创建地址](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path)；
5. 自行构造待签名哈希，使用“[原始数据签名](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data)”接口发起签名请求，签名完成后，签名值将会通过MPC Node的回调接口上报。

按照上述流程即可实现高级功能集成。