# Full Custody WaaS 快速入门

基于整体的[开放平台介绍](/docs/develop/get-started/quick-start)，本教程将主要介绍Full Custody WaaS API的集成和使用。

本教程主要涉及以下事项：
- 创建金库
- 创建并配置API Key
- 基于SDK开发集成


### 创建金库

在 WaaS 服务中，金库需要在Web console管理界面人工创建，之后，钱包、链上地址 均需通过API完成创建。

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

### 基于SDK开发集成

Sinohope将提供多种语言的SDK，方便开发者集成WaaS功能。SDK 主要提供以下功能：

- 统一封装接口请求签名处理；
- 封装API接口，方便开发者以方法调用的方式完成对WaaS API的请求。

当前提供的SDK：[java sdk](https://github.com/sinohope/sinohope-java-api)。

JS、Golang 等开发语言的SDK 正在进行中，敬请期待。


