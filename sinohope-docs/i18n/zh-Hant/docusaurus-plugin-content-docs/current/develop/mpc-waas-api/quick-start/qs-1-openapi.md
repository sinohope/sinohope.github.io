---
sidebar_position: "1"
---
# Open API 快速入门

基于整体的[开放平台介绍](/docs/develop/get-started/quick-start)，本教程将主要介绍Open API的集成和使用。

- OpenAPI运行原理
- 创建金库
- 创建并配置API Key
- （可选但推荐）配置API回调
- 开发集成

### Open API运行原理

Open API可用于将自托管和WaaS业务中的钱包能力继承到您的应用中。每个API Key可以管理自托管和WaaS的多个金库，具体取决于您为该API  Key分配的金库权限。

您可以参考下表选择适合您业务需求的钱包类型。

|                | Waas Open API                 | 自托管Open API                  |
|:---------------|:------------------------------|:-----------------------------|
| 部署对接           | 需要额外部署MPC node                | 无需部署Node，需要安装手机APP           |
| 工作流审批          | 仅web端                         | 仅app端                        |
| 私钥管理           | 私钥分片存储于Node的db中，需开发者自行备份db文件  | 私钥分片存储于用户的手机安全区；<br/>通过Owner&Admin互相备份；             |
| 接口能力           | 支持完整的接口能力，具体参考每个API接口中标注的支持范围 | 支持部分接口能力，具体参考每个API接口中标注的支持范围 |
| 自动归集和加油站       | 支持            | 不支持                          |

### 创建金库

金库需要在Web console管理界面人工创建。  
在 “自托管钱包”和“waas钱包”界面，通过“创建金库” 功能即可完成金库创建。

### 创建并配置API Key

首先，您需要创建一对 ECDSA 密钥对用于对API接口请求鉴权。您可通过 Sinohope 官方SDK，或者如下java 示例来创建您的密钥对：
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

当您提交创建新的API Key后，需要经过当前组织的全局策略审批人进行审批确认后方可生效。全局审批人的设置可以在Web-设置-规则引擎-全局策略中查看。
### 配置API回调（可选但推荐）

在MPC业务集成的安全体系中，涉及到需要用户提供的回调服务有两个：

1. 中心化的交易回调。
   - 回调内容
   
   |        | 自托管 | WaaS  |
   |:-------|:----|:------|
   | 交易上链通知 | 支持  | 支持    |
   | 提现二次确认 | 不支持 | 支持，当用户通过API对WaaS金库发起提币时，该笔请求通过了工作流审批之后，将对用户设置的“提现二次确认”回调地址发送确认请求，通过后方可进入交易签名流程。 |

   - 配置入口：通过“web-设置-OpenAPI-API回调” 功能进行配置。
   - 回调请求将采用与Open API接口相同的 API认证机制。在“API回调”界面，会展示 Sinohope 的回调请求公钥；发起回调请求时，Sinohope会使用私钥签名，回调服务中应使用Sinohope提供的公钥进行验签，以确保请求来自Sinohope并且参数未被篡改。同时，也建议回调服务将Sinohope 的IP地址设置为请求来源白名单，并且只允许白名单中的IP访问您的回调服务，从而增强安全性。
   - 重试机制：在没有成功获得 response 的情况下将会有重试，最大重试次数为20次。重试规则如下：
      - 第1次重试：距上次回调间隔 1 min
      - 第2次重试：间隔 2 min
      - 第3次重试：间隔 4 min
      - 第4次重试：间隔 8 min
      - 第5次重试：间隔 20 min
      - 第6次重试：间隔 30 min
      - 第7次重试：间隔 60 min
      - 第8次及以上次重试：间隔 2 h
      - 在回调失败的情况下，用户可在 web console管理界面针对特定的交易手动重新发起一轮回调。

2. 去中心化的MPC Node 回调（仅支持WaaS API）
   - 回调内容：
      - 普通转账和任意交易的签名确认
      - 用户发起“按已知的规范进行消息签名”、或对“原始数据签名”的请求，在签名完成后，会通过回调接口将签名结果上报给回调服务。这部分详见 MPC Node 使用指南 中有关MPC Node回调机制的说明。
   - 配置入口：在MPC Node中的Config文件里配置
   - 配置MPC Node回调后，MPC Node在发起MPC协议运行之前会调回调接口，用户可在回调服务中集成风控逻辑。
3. 回调服务示例，可参考sinohope-waas-code-demo中golang目录下的示例。

### 开发集成

Sinohope将提供多种语言的SDK，方便开发者集成WaaS功能。SDK 主要提供以下功能：

- 统一封装接口请求签名处理；
- 封装API接口，方便开发者以方法调用的方式完成对WaaS API的请求。

当前提供的SDK：[java sdk](https://github.com/sinohope/sinohope-java-api)，[golang sdk](https://github.com/sinohope/golang-sdk)，[JS sdk](https://github.com/sinohope/js-sdk)。

对于暂未提供SDK的开发语言，开发者需要仔细了解Sinohope的API认证要求，并自行实现接口请求处理，详见[API 认证](/docs/develop/get-started/general#api-authentication)。
