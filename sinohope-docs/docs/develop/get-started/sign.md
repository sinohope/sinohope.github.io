---
sidebar_position: 2
---
# API Signature

##  API 认证

为了加强 API 安全，Sinohope 要求开发者对所调用的 API 请求进行椭圆曲线签名，Sinohope API 服务器将会根据收到的请求和签名进行有效性校验。


**若您未使用Sinohope提供的 SDK，或者暂无您要使用的开发语言的SDK，则您需要自行完成接口请求构造，此时，您将需要了解Sinohope API认证的实现细节。若您使用了SDK做集成开发，则本章节可跳过！**

注意事项：
1. Sinohope POST接口仅支持JSON数据格式。


### 请求头

- `BIZ-API-KEY`: 您的公钥字符串
- `BIZ-API-SIGNATURE`: 数据签名字符串，为 ECDSA签名结果按 `ASN.1 DER`格式化后的字节数组的 HEX编码字符串
- `BIZ-API-NONCE`: 参与构成签名数据的 timestamp

Sinohope将按照上述请求头及您的请求数据进行签名验证，从而验证您的请求合法性。


### 签名构造


待签名数据：

| key | value |
| --- | --- |
| data | 请求参数所组成的字符串值，详见下文 `DATA` 部分的具体说明|
| path | 请求URL的 `PATH` 部分，详见下文 `PATH` 部分的具体说明 |
| timestamp | 访问 API时间戳，详见 `TIMESTAMP` 部分的具体说明 |
| version | 固定值`1.0.0` 详见 `VERSION` 部分的具体说明|
| ""（长度为 0 的字符串） | 公钥字符串 详见 `PUBLICKEY` 部分的具体说明 |

字符串拼接规则：

对于上述的键值对，按 key 的字母序升序排序后，将所有 `key` `value` 直接拼接起来（中间没有连接符，其中最后的 公钥字符串没有 key字段）形成最终的待签名数据字符串，**将待签名数据字符串按UTF8编码为字节数组**之后，使用您本地生成的私钥（privateKey），对数据使用私钥进行 
ECDSA 签名（具体算法为 `SHA256withECDSA`），签名结果按 `ASN.1 DER` 格式化并编码为 Hex 字符串, 即生成了用于向 API 服务器进行验证的最终签名 （可参考 Sinohope 例程：<https://github.com/sinohope/sinohope-java-api>）。

各部分数据具体解释，见接下来的章节。

### 各部分数据解释
#### DATA

* 如果是`GET`请求：
```html
https://api.develop.sinohope.com/v1/test?key=key&value=value
```
则先将参数 key 按照字母排序，然后进行 url 参数化，即：
```
key=key
value=value
```
因为 k 在字母表中的排序在 v 之前，所以 key 要放在 value 之前，然后使用 & 进行连接，即： `key=key&value=value`

* 如果是`POST`请求：
```java
{
  "key": "key",
  "value": "value"
}
```
则将body整体参数当做String字符串来处理。

#### PATH
请求URL的PATH部分， 例如https://api.develop.sinohope.com/v1/test/ 为 `/v1/test/`

#### TIMESTAMP
访问 API 时的 UNIX EPOCH 时间戳 (精确到毫秒)

#### VERSION
固定值`1.0.0`

#### PUBLICKEY
您本地获取的公钥，按 `X.509` 格式序列化后的字节数组再按 HEX 编码后的字符串。

Java中获取公私钥代码示例 <https://github.com/sinohope/sinohope-java-api#generate-key-pair>


### 请求示例

本示例使用如下密钥对：

- publicKey: `3056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d`
- privateKey: `30818d020100301006072a8648ce3d020106052b8104000a04763074020101042049888755bcb8bead7efd451426692cebd00c2aba9fad62a6f753343085a7c060a00706052b8104000aa14403420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d`

#### GET请求：
| Method | URL |
| :--- | :--- |
| GET | https://api.develop.sinohope.com/v1/test?key=key&value=value |

参数：
| Parameter | Value |
| :--- | :--- |
| key | key |
| value | value |

假设时间戳为 `1692614885094`，则待签名数据为：
```html
datakey=key&value=valuepath/v1/testtimestamp1692614885094version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d
```

使用示例的私钥，对上述数据签名，一个可能的结果为：
```text
304402205db4c34ade2295f81bc2aa1be535a75cf4557dd9ad079d6804f2bc06c06c94ff0220380b75060f7a1abac6625a99cb684aaecc3135f99fc97333d1f99bccad6724d4
```

使用示例的公钥、待签数据，应该能验证上述签名结果为“有效”。

#### POST请求：
| Method | URL |
| :--- | :--- |
| POST | https://api.develop.sinohope.com/v1/test |

参数：
```html
{
  "key": "key",
  "value": "value"
}
```
假设时间戳为 `1692614885153`，则待签名数据为：
```html
data{"key":"key","value":"value"}path/v1/testtimestamp1692614885153version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d
```

使用示例的私钥，对上述数据签名，一个可能的结果为：
```text
30440220439fb1cb1860d7621ab37db48a7c29ee488c182c7bddd25276b2bc97a35560190220764a04dee91b1d9fcf784c5ae24ab0c19443b2823adfa4ef06e0b63ed4563cf9
```

使用示例的公钥、待签数据，应该能验证上述签名结果为“有效”。
### 附加信息
#### DEMO 库
<https://github.com/sinohope/sinohope-java-api>
#### 签名算法
Sinohope 使用基于P-256曲线（又名prime256v1或secp256r1）和算法为SHA256withECDSA的 ECDSA 签名方案进行验证，见上述 demo，如您在操作过程中遇到任何问题，请通过bd@newhuotech.com联系Sinohope工作人员协助您一起排查和解决。
