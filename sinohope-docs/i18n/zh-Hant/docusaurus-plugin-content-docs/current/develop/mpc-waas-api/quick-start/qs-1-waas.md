# MPC WaaS 快速入门

基于整体的[开放平台介绍](/docs/develop/get-started/quick-start)，本教程将主要介绍MPC WaaS API的集成和使用。

本教程主要涉及以下事项：
- 部署并配置MPC Node
- 创建金库
- 创建并配置API Key
- （可选但推荐）配置API回调
- 开发集成
- 高级功能介绍

### 部署并配置MPC Node

Sinohope使用 MPC-TSS 技术提供 WaaS 服务，并采用 3-3 的阈值签名设置，平台持有2片私钥分片，用户持有1片私钥分片。

Sinohope提供 MPC Node软件，由客户部署运行，用于管理属于用户的私钥分片。要配置 MPC Node，主要有以下事项：

1. 准备：开通MPC WaaS 账号；准备好部署环境，获取并验证 MPC Node 安装包；
2. 初始化节点，生成节点的 Node ID 和 部署回调服务所需的节点公钥；
3. （按需）部署及配置您的回调服务；
4. 绑定MPC Node，登录 web console 配置 MPC Node，将您的 Node ID 与您的组织账号绑定；
5. 启动MPC Node，节点将持续运行，并自动按需驱动MPC协议的运行，其中，稍等片刻将可完成DKG，之后在 Web Console MPC Node管理界面将看到 “key share 状态”为“已生成”。
6. ❗️❗️重要：安全妥善备份 MPC Node 本地数据库文件！

> 详见 [MPC Node使用指南](qs-2-node) 章节。

### 创建金库

在 WaaS服务中，金库需要在Web console管理界面人工创建，之后，钱包、链上地址 均需通过API完成创建。

在 “waas钱包”界面，通过“创建金库” 功能即可完成金库创建。

在钱包、地址的应用模式方面，有两种模式可供您参考，具体应该结合您的业务而定：

1. 为您的每个业务/终端用户 分配一个多链钱包；在这种模式下，对链上地址的管理将会更加集中，业务/终端用户 之间可以有较清晰的划分。
2. 只使用一个多链钱包，在该钱包下按需创建并为业务/终端用户 分配链上地址。此种模式下，直接管理最终的链上地址，更接近于传统的地址管理方式。


### 创建并配置API Key

当前，需要对每个金库进行独立配置，包括 API Key设置、回调设置、高级功能开关设置 等。

您需要创建一对 ECDSA 密钥对用于WaaS API请求鉴权。您可通过 Sinohope 官方SDK，或者如下java 示例来创建您的密钥对：

```java
import org.nhex.sinohope.sign.api.ECDSA;

ECDSA ecdsa = new ECDSA(SECP256R1);
KeyPair keyPair = ecdsa.generateKeyPair();
String publicKey = Hex.toHexString(keyPair.getPublic().getEncoded());
String privateKey = Hex.toHexString(keyPair.getPrivate().getEncoded());
System.out.println("publicKey = " + publicKey);
System.out.println("privateKey = " + privateKey);
```

其中，私钥 `privateKey`由您自己妥善保管并配置到您的业务系统中，代表您的身份，用于做API请求签名；公钥`publicKey` 即 API Key，需要您通过Sinohope web console管理界面，配置到您的金库中，从而绑定其API访问权限。

> 关于接口请求签名及验签，详情请参考“[API 认证](/docs/develop/get-started/general)” 章节。

### （可选但推荐）配置API回调

在MPC WaaS 的业务集成安全体系中，涉及到需要用户提供的回调服务有两个：

1. 中心化的交易回调。用户配置后，在交易上链、用户发起交易时，Sinohope 平台会回调用户配置的接口，做交易上链通知、提现二次确认。
2. 去中心化的MPC Node 回调。在用户自己的MPC Node中配置，配置MPC Node回调后，MPC Node在发起MPC协议运行之前会调回调接口，用户可在回调服务中集成风控逻辑。另外，对于消息签名、原始数据签名 的功能，在签名完成后会通过回调接口将签名结果上报给回调服务。这部分详见 [MPC Node 使用指南](./qs-2-node.md) 中有关MPC Node回调机制的说明。

对于中心化的交易回调，需要通过web console中金库下的“API回调” 功能进行配置。回调请求，将采用与waas 接口相同的 API认证机制。

在“API回调”界面，会展示 Sinohope 的回调请求公钥；发起回调请求时，Sinohope会使用私钥签名，回调服务中应使用Sinohope提供的公钥进行验签，以确保请求来自Sinohope并且参数未被篡改。同时，也建议回调服务将Sinohope 的IP地址设置为请求来源白名单，并且只允许白名单中的IP访问您的回调服务，从而增强安全性。

API回调，在没有成功获得 response 的情况下，将会有重试。重试规则如下：

- 第1次重试：距上次回调间隔 1 min
- 第2次重试：间隔 2 min
- 第3次重试：间隔 4 min
- 第4次重试：间隔 8 min
- 第5次重试：间隔 2 0min
- 第6次重试：间隔 3 0min
- 第7次重试：间隔 6 0min
- 第8次及以上次重试：间隔 2 h
- 最大重试次数 20次
- 若达到最大重试次数仍然无法成功，则用户后续可在 web console管理界面，针对特定的交易手动重新发起一轮回调。


回调服务示例，可参考[sinohope-waas-code-demo](https://github.com/sinohope/sinohope-waas-code-demo)中`golang`目录下的示例。

### 开发集成

Sinohope将提供多种语言的SDK，方便开发者集成WaaS功能。SDK 主要提供以下功能：

- 统一封装接口请求签名处理；
- 封装API接口，方便开发者以方法调用的方式完成对WaaS API的请求。

当前提供的SDK：[java sdk](https://github.com/sinohope/sinohope-java-api)，[golang sdk](https://github.com/sinohope/golang-sdk)，[JS sdk](https://github.com/sinohope/js-sdk)。

对于暂未提供SDK的开发语言，开发者需要仔细了解Sinohope的API认证要求，并自行实现接口请求处理，详见[API 认证](/docs/develop/get-started/general#api-authentication)。

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
1. 确保您的MPC Node已配置好回调服务，参考 [MPC Node使用指南](qs-2-node)；
2. 使用“使用指定路径创建地址”接口，按自定义的路径派生公钥，并自行从公钥推导出地址。接口：[根据指定路径创建地址](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path)；
3. 自行构造待签名哈希，使用“[原始数据签名](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data)”接口发起签名请求，签名完成后，签名值将会通过MPC Node的回调接口上报。

按照上述流程即可实现高级功能集成。