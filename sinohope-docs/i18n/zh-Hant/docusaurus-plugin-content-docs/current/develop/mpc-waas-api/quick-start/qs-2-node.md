
# MPC Node 使用指南

## 1. Sinohope WaaS MPC技术简介

门限签名（Threshold Signature Scheme，TSS）是数字签名的一个重要分支，它是一种基于安全多方计算（Secure Multi-Party Computation，MPC）的密码学技术，也是 MPC 密钥管理的重要研究方向。

Sinohope 推出的 WaaS（Wallet as a Service）是以MPC-TSS技术为基础的钱包即服务方案。Sinohope WaaS服务需要客户与平台以分布式协作的方式，各自持有私钥分片，基于[MPC-CMP协议](https://eprint.iacr.org/2021/060)（ECDSA）及[SS01协议](https://link.springer.com/chapter/10.1007/3-540-47719-5_33#chapter-info)（EdDSA）实现由客户主导的链下多方签名。MPC Node 是 Sinohope WaaS 为客户提供的专属程序包，用于管理客户自己的私钥分片。

Sinohope 采用3-3多签模式，客户持有一个私钥分片、Sinohope持有两个私钥分片。

- MPC Node 1：Sinohope负责管理，该 Node 会一直在线。
- MPC Node 2：Sinohope负责管理，该 Node 会一直在线。
- MPC Node 3：客户负责管理，该 Node 仅在处理业务需要时在线。

## 2. MPC Node部署实施

### 2.1 环境准备

#### 2.1.1 通用服务器环境

通用服务器指的是云服务器商 EC，或者是客户自主运维的服务器物理机。

##### 最低配置

- CPU：AMD64 或ARM64 架构，2 核，主频 2.0 GHz
- 内存：4 G
- 硬盘：64 G SSD
- 操作系统：Ubuntu 20.04或最新。 (注：理论上支持所有可运行Docker的系统)

##### 推荐配置

- CPU：AMD64 或者 ARM64 架构，4 核心，主频 3.0 GHz
- 内存：8 G
- 硬盘：128 G SSD
- 操作系统：Ubuntu 20.04或最新。 (注：理论上支持所有可运行Docker的系统)

#### 2.1.2 网络要求

##### 防火墙入站规则

- 开放443 端口，MPC Node服务向使用者提供https服务。
- 在不影响运维和安全的情况下，其他端口全部关掉。

##### 防火墙出站规则

- 安装阶段：
  - 可访问 apt 源，以安装基础依赖包
  - 可访问 docker 安装源，以安装 docker
  - 可访问 docker.io registry 镜像仓库
- 服务阶段：
  - 可访问客户配置的 Callback 回调服务器
  - 可访问mpc-proxy，签名时需要与其他MPC Node通信。
  - 在不影响运维和安全的情况下，其他出站ip全部关掉。

#### 2.1.3 安装 Docker

请参考[官方文档](https://docs.docker.com/engine/install/)安装Docker。Sinohope MPC Node安装包中的启动脚本执行时，会自动检查Docker的安装情况，如果未安装无法运行。

### 2.2 部署与配置

部署及配置 MPC Node 是使用Sinohope WaaS 服务的基础要求。请参考如下步骤完成 MPC Node 的部署运行：

1. 准备：开通Sinohope WaaS 账号；准备好部署环境，获取并验证 MPC Node 安装包；
2. 初始化节点，生成节点的 Node ID 和 部署回调服务所需的节点公钥；
3. （按需）部署及配置您的回调服务；
4. 绑定MPC Node，登录 web console 配置 MPC Node，将您的 Node ID 与您的组织账号绑定；
5. 启动MPC Node，节点将持续运行，并自动按需驱动MPC协议的运行，其中，稍等片刻将可完成DKG，之后在 Web Console MPC Node管理界面将看到 “key share 状态”为“已生成”。
6. ❗️❗️重要：安全妥善备份 MPC Node 本地数据库文件！

#### 2.2.1 获取并验证安装包

- 请联系SINOHOPE的工作人员，获取软件包“sinohope-mpc-node.tar.gz” 及其 sha256 哈希值。
- 将软件包上传至您的部署环境的目标目录，在终端执行以下命令，对比软件包的hash值，确认软件包的正确性。

```Bash
shasum -a 256 sinohope-mpc-node.tar.gz
```

- 解压后确认内部数据

```Bash
tar -zxzf sinohope-mpc-node.tar.gz
```

- 软件包解压后文件结构如下：

```Bash
sinohope-mpc-node
├── config.toml （销售人员给到的配置文件中包含了与mpc-proxy通信的安全信息，勿泄漏）
└── node.sh （控脚本，用于初始化和启动MPC Node服务）
```

- MPC Node初始化成功后，会自动创建asset.db文件和logs目录：

```JSON
sinohope-mpc-node
├── config.toml （SINOHOPE工作人员给到的配置文件中包含了与mpc-proxy通信的安全信息，勿泄漏）
├── node.sh （控脚本，用于初始化和启动MPC Node服务）
├── asset.db (本地产生的重要数据都存储在这里，备份与恢复就是恢复数据)
└── logs (日志文件)
```

#### 2.2.2 初始化节点

执行以下命令完成节点初始化：

```Bash
sudo ./node.sh init
```

示例：

```Shell
sudo ./node.sh init
[sudo] password for ubuntu:   (ubuntu账户密码)
? Type password (at least 8 characters): ********
? Retype password: ********
2023/08/18 10:18:46 node id: 
sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0NzhlMjg0ZWNmNjE1YTUxMDE0Y2JlNGUyMjVhNWMyM2Y0OGQ2NjJhNWQ1MzNkNjVlNjkyMGYyYWZjNzEwMzdkM2RmNDExYWM0NGJmOGUyMmQ0ZGE1NjdmOWNlMTFmMjJhZWVkY2M4ZGNjZTkxNzY2ODhmNDMyMTVmYTYzYTFiMjA=
2023/08/18 10:18:46 callback public key: 
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeOKE7PYVpRAUy+TiJaXCP0jWYqXV
M9ZeaSDyr8cQN9PfQRrES/jiLU2lZ/nOEfIq7tzI3M6RdmiPQyFfpjobIA==
-----END PUBLIC KEY-----
```

说明：首先脚本会自动做一些环境的检查工作，如判断是否安装了Docker，判断用户的权限等。init命令的主要任务是初始化节点信息，包括：

- 给 MPC 节点设置一个密码，这个密码用于保护您的私钥分片 及其他私密数据，**请您妥善保管，切勿泄漏，并且做好安全冗余备份**。节点启动时会要求输入该密码。
  - 您可采用如下措施实现密码自动输入：打开config.toml配置文件，[storage]配置项中增加password字段：
  - ```Shell
    [storage]
    db-file-path = "/tmp/mpc-node/asset.db"
    unseal-server-address = "0.0.0.0:8080"
    password = "FILL YOUR PASSWORD HERE"
    ```
- 创建node id， 每一个MPC Node都有一个唯一标识id，您将需要使用该 node id 将您的MPC 节点与您的 WaaS 组织账号做唯一关联。
- 创建与callback-server通信时的ECDSA密钥对。

#### 2.2.3 (Optional) 部署及配置回调服务

MPC Node 提供回调机制用于供您执行风险控制，这个回调服务是可选的（在生产环境下，强烈建议您开发并部署回调服务）。

为MPC Node配置了回调服务之后，MPC Node 在发起任何 MPC业务（如签名）之前均会回调指定的接口，请求回调服务对当前MPC 业务的授权，只有在您的回调服务明确返回 ACCEPT 状态时，MPC业务才会开始执行。

另外，当您使用消息签名 或 对原始数据直接签名 的功能时，MPC Node 将通过回调接口将签名结果提供给您，供您的业务使用。

关于回调服务的开发、部署、配置等内容，详见“MPC Node 回调机制”章节。

#### 2.2.4 绑定 MPC Node

前述步骤完成后，可使用具有管理员权限的账号登录 Sinohope Web Console， 在【设置】-【MPC Node】页面完成 MPC Node 的关联绑定。此处需要输入MPC Node 初始化时生成的 Node ID。


#### 2.2.5 启动 MPC Node 服务

绑定 MPC Node 完成后，通过如下命令启动 MPC Node 服务。

```Bash
./node.sh start 
```

服务启动运行后，回到web console MPC Node 配置界面，正常情况下稍等片刻即可看到 “key share 状态” 为“已生成”，同时界面上将展示您的组织的MPC 根公钥 信息。

![img](./images/mpc-node.jpeg)


#### 2.2.6 ❗️❗️重要：数据库备份

MPC Node 本地数据库文件 `asset.db` 存储了您的私钥分片 等重要数据，所有数据均使用强密钥加密存储，该强密钥由您为 MPC Node 设置的密码经 KDF 函数派生而来。

私钥分片事关资金安全及可用，Sinohope所掌管的私钥分片由平台基于多层级多区域的一系列高可用及灾备方案加以保管及备份，同时您也可申请对您的组织的所有分片私钥进行备份，从而完全掌控您的所有3片分片私钥。


而**对于您本地的数据库文件中存在的私钥分片，则必须由您自己完成安全冗余备份。请采取足够的安全措施、异地多副本 备份您的数据库文件，以及您为MPC Node设置的 密码**。

**建议数据库文件与密码分开保管，降低数据泄漏风险**。

**后续若您的 MPC Node 服务器或服务发生故障、数据受损、不可用等情况时，只能通过您备份的 数据库 文件及密码 重新部署MPC Node服务来进行恢复。Sinohope 将无法帮您恢复您的MPC Node 服务！！**

## 3. MPC Node 完整交互命令介绍

### 初始化

请在命令行执行以下命令：

```Bash
sudo ./node.sh init
```

示例：

```Shell
sudo ./node.sh init
[sudo] password for ubuntu:   (ubuntu账户密码)
? Type password (at least 8 characters): ********
? Retype password: ********
2023/08/18 10:18:46 node id: 
sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0NzhlMjg0ZWNmNjE1YTUxMDE0Y2JlNGUyMjVhNWMyM2Y0OGQ2NjJhNWQ1MzNkNjVlNjkyMGYyYWZjNzEwMzdkM2RmNDExYWM0NGJmOGUyMmQ0ZGE1NjdmOWNlMTFmMjJhZWVkY2M4ZGNjZTkxNzY2ODhmNDMyMTVmYTYzYTFiMjA=
2023/08/18 10:18:46 callback public key: 
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeOKE7PYVpRAUy+TiJaXCP0jWYqXV
M9ZeaSDyr8cQN9PfQRrES/jiLU2lZ/nOEfIq7tzI3M6RdmiPQyFfpjobIA==
-----END PUBLIC KEY-----
```

说明：首先脚本会自动做一些环境的检查工作，如判断是否安装了Docker，判断用户的控住权限等。init命令的主要任务是初始化账户信息，包括：

- 给 MPC 节点设置一个密码，这个密码用于保护您的私钥分片 及其他私密数据，**请您妥善保管，切勿泄漏，并且做好安全冗余备份**。节点启动时会要求输入该密码。
  - 您可采用如下措施实现密码自动输入：打开config.toml配置文件，[storage]配置项中增加password字段：
  ```Shell
    [storage]
    db-file-path = "/tmp/mpc-node/asset.db"
    unseal-server-address = "0.0.0.0:8080"
    password = "FILL YOUR PASSWORD HERE"
  ```
- 创建node id， 每一个MPC Node都有一个唯一标识id，您将需要使用该 node id 将您的MPC 节点与您的 WaaS 组织账号做唯一关联。
- 创建与callback-server通信时的ECDSA密钥对。

### 启动服务

请在命令行执行以下命令：

```Bash
./node.sh start 
```

示例：

```JSON
sudo ./node.sh start
[sudo] password for ubuntu:   (ubuntu账户密码)
? Enter password: ********
```

说明：脚本会读取密码并启动docker内的服务

### MPC Node其他命令

注：启动服务主要是init和start命令，其他命令是非必须命令，可按需查阅。

#### 查看node-id和callback公钥

```JSON
./node.sh info
```

示例：

```Shell
./node.sh info
? Enter password: ********
2023/08/18 10:23:59 node id: 
sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0NzhlMjg0ZWNmNjE1YTUxMDE0Y2JlNGUyMjVhNWMyM2Y0OGQ2NjJhNWQ1MzNkNjVlNjkyMGYyYWZjNzEwMzdkM2RmNDExYWM0NGJmOGUyMmQ0ZGE1NjdmOWNlMTFmMjJhZWVkY2M4ZGNjZTkxNzY2ODhmNDMyMTVmYTYzYTFiMjA=
2023/08/18 10:23:59 callback public key: 
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeOKE7PYVpRAUy+TiJaXCP0jWYqXV
M9ZeaSDyr8cQN9PfQRrES/jiLU2lZ/nOEfIq7tzI3M6RdmiPQyFfpjobIA==
-----END PUBLIC KEY-----
```

#### 修改密码

```JSON
./node.sh reset
./node.sh reset
? Enter password: ********
? Choose an action:  [Use arrows to move, type to filter]
> Reset password
```

说明：执行此命令后请根据提示信息选择修改密码。

#### 查看日志

```Bash
./node.sh log
```

#### 停止服务

```Bash
./node.sh stop
```

#### 手动检查环境

```Bash
./node.sh check
```

#### 命令帮助

```Bash
./node.sh help
```

## 4. MPC Node回调机制

MPC Node 启动后，会自动和 Sinohope 后台建立长链接，用于接收 Sinohope 后台下发的任务，默认情况下，MPC Node没有启用回调机制，MPC Node 会自动完成所有任务的执行；

如果配置为启用回调机制，客服需要自己开发一个回调验证服务，用于验证Sinohope下发的任务是否合理，最终决定是否配合Sinohope完成签名。

回调服务的开发，可参考Sinohope 提供的回调服务示例：[GitHub - sinohope/mpc-node-callback-demo](https://github.com/sinohope/mpc-node-callback-demo)

### 4.1 配置回调验证服务

在部署回调服务器的主机上需要进行一些初始化的配置工作，具体步骤如下：

- 生成回调服务器的 ECDSA 私钥

```Go
openssl ecparam -genkey -name prime256v1 -out private_key.pem
```

- 导出回调服务器的 ECDSA 公钥

```Go
openssl ec -in private_key.pem -pubout -out callback_server_public.pem
```

- 将导出的 ECDSA 公钥（即  callback_server_public.pem 文件）复制到 MPC Node 所在机器，并在 MPC Node 配置文件中指定callback_server_public.pem文件位置：

```TOML
[callback]
retry-times = 60
sleep-seconds = 60
[[callback.server]]
  address = "http://127.0.0.1:9090/v1/check"
  public-key-path = "./callback_server_public.pem"
```

- 将 MPC Node 的 ECDSA 公钥复制到回调服务器相关配置文件中

如何获取 MPC Node 的 ECDSA 公钥： 

- 在 MPC Node 完成初始化后，可以通过如下命令查询 MPC Node 的 ECDSA 公钥：

```TOML
./node.sh info
```

- 示例输出：

```TOML
./node.sh info
? Enter password: ********
2023/08/18 10:23:59 node id: 
sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0NzhlMjg0ZWNmNjE1YTUxMDE0Y2JlNGUyMjVhNWMyM2Y0OGQ2NjJhNWQ1MzNkNjVlNjkyMGYyYWZjNzEwMzdkM2RmNDExYWM0NGJmOGUyMmQ0ZGE1NjdmOWNlMTFmMjJhZWVkY2M4ZGNjZTkxNzY2ODhmNDMyMTVmYTYzYTFiMjA=
2023/08/18 10:23:59 callback public key: 
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEeOKE7PYVpRAUy+TiJaXCP0jWYqXV
M9ZeaSDyr8cQN9PfQRrES/jiLU2lZ/nOEfIq7tzI3M6RdmiPQyFfpjobIA==
-----END PUBLIC KEY-----
```

其中的 callback public key 即为 MPC Node 的 ECDSA 公钥。

### 4.2 开发回调验证服务

#### 4.2.1 签名与验签

MPC Node与回调服务之间的数据通过各自的ECDSA私钥生成签名，然后对方使用提前配置好的公钥根据指定的规则进行验签，只有签验通过才可以认为是合法的请求。

以下是当前MPC Node与回调服务之间通信的数据结构，请注意不要随意更改字段先后顺序。

Request:

```Go
type Check struct {
    CallbackId    string `json:"callback_id,omitempty"`
    RequestType   string `json:"request_type,omitempty"`
    RequestDetail `json:"request_detail,omitempty"`
    ExtraInfo     `json:"extra_info,omitempty"`
}

type RequestDetail struct {
    T            int      `json:"t,omitempty"`
    N            int      `json:"n,omitempty"`
    Cryptography string   `json:"cryptography,omitempty"`
    PartyIds     []string `json:"party_ids,omitempty"`

    PublicKey   string `json:"public_key,omitempty"`
    Path        string `json:"path,omitempty"`
    Message     string `json:"message,omitempty"`
    Coin        string `json:"coin,omitempty"`
    FromAddress string `json:"from_address,omitempty"`
    ToAddress   string `json:"to_address,omitempty"`
    Amount      string `json:"amount,omitempty"`
    Fee         string `json:"fee,omitempty"`
    GasPrice    string `json:"gas_price,omitempty"`
    GasLimit    string `json:"gas_limit,omitempty"`
    Signature   string `json:"signature,omitempty"`
}

type ExtraInfo struct {
    SinoId    string `json:"sino_id,omitempty"`
    RequestId string `json:"request_id,omitempty"`
}
```

Response:

```Go
type Response struct {
    Status    string        `json:"status,omitempty"`
    Error     string        `json:"error,omitempty"`
    Data      *ResponseData `json:"data,omitempty"`
    Signature string        `json:"signature,omitempty"`
}

type ResponseData struct {
    CallbackId string `json:"callback_id,omitempty"`
    SinoId     string `json:"sino_id,omitempty"`
    RequestId  string `json:"request_id,omitempty"`
    Action     string `json:"action,omitempty"`
    WaitTime   string `json:"wait_time,omitempty"`
}
```

##### 1、 生成Request签名

- MPC Node根据请求的类型构造Check结构体；
- 将构造好的Check结构体进行json序列化，得到Message；
- MPC Node使用自己的ECDSA私钥对Message签名，得到Signature；
- MPC Node将Signature设置到本次HTTP请求头中，Key为Sigature；

##### 2、Request签名验签

- 回调服务使用Check结构体解析MPC Node的HTTP请求，得到本次请求的Check数据；
- 回调服务将得到的Check数据进行json序列化，得到待验签的Message；
- 回调服务从HTTP请求中得到Signature，然后结合Mesage和提前配置好的MPC Node公钥对Signature进行验签；

##### 3、生成Response签名

- 回调服务根据自身的决策生成上述Response，并在Response.Data中填充相应的字段；
- 回调服务对Response.Data进行json序列化，得到Message；
- 回调服务使用自身的ECDSA私钥对Message签名，得到Signature，并将Signature赋值给Response.Signature字段；

##### 4、Response签名验签

- MPC Node得到回调服务的Response，并对Response.Data字段进行json序列化得到Message；
- MPC Node结合Message和提前配置好的回调服务公钥对Response.Signature进行验签；

#### 4.2.2 check

每次keygen和sign业务mpc-node都会通过check接口请求用户进行风控，只有回调服务明确回复Approve时相关业务才允许开始。

##### 1、HTTP 接口

> path: /v1/check

> method: post

> body: JSON编码的数据

##### 2、Request

| 参数           | 类型   | 描述                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| callback_id    | string | 回调请求唯一ID                                               |
| request_type   | string | 回调请求是字符串类型，有以下两种取值：keygen、sign           |
| request_detail | struct | 回调请求详细信息，包括请求的一系列关键信息。不同的回调请求类型对应不同的 request_detail 结构；格式为 JSON 序列化后的字符串 |
| extra_info     | struct | 回调请求辅助信息，包括请求的一些额外相关信息；不同的回调请求类型对应不同的 extra_info 结构；格式为 JSON 序列化后的字符串 |

- 当`request_type == keygen`时，`request_detail` 的结构定义如下：

| 参数         | 类型     | 描述                                          |
| ------------ | -------- | --------------------------------------------- |
| threshold    | int      | 签名阈值                                      |
| party_ids    | []string | 参与生成私钥的节点ID集合                      |
| cryptography | string   | 使用的签名算法。ecdsa-secp256k1/eddsa-ed25519 |

`extra_info` 的结构定义如下：

| 参数        | 类型   | 描述                                                         |
| ----------- | ------ | ------------------------------------------------------------ |
| callback_id | string | MPC Node每次请求时生成的唯一ID                               |
| sino_id     | string | Sinohope 内部 keygen 请求唯一 ID                             |
| request_id  | string | 用户通过 WaaS 接口传入的请求 ID，如果请求非 WaaS 接口，Cobo 内部会自动生成 |

- 当 `request_type == sign` 时，`request_detail` 的结构定义如下：

| 参数       | 类型     | 描述                 |
| ---------- | -------- | -------------------- |
| public_key | string   | 根公钥               |
| party_id   | []string | 参与签名时的节点列表 |
| path       | string   | 使用的bip32path列表  |
| message    | string   | 待签名的消息         |

`extra_info` 的结构定义如下：

| 参数         | 类型   | 描述                                                         |
| ------------ | ------ | ------------------------------------------------------------ |
| sign_type    | string | 待签名的交易类型：1、普通交易；2、EIP191/EIP712消息签名；3、RawData签名；       |
| public_key   | string | 根公钥对应的public key                                       |
| path         | string | bip32派生路径                                                |
| message      | string | 待签名的消息                                                 |
| coin         | string | 资产名称                                                     |
| decimal      | string | 币种精度                                                     |
| from_address | string | 资产出账地址                                                 |
| to_address   | string | 提币到账地址                                                 |
| amount       | string | （非必需）交易数额，请注意，这里的数值包含小数位，例如 BTC decimal 为8位，则这里的 100000000 实际为 1 个 BTC |
| fee          | string | （非必需）对于 BTC 交易，该字段表示每字节对应的手续费，单位为 satoshi |
| gas_price    | string | （非必需）燃料价格，ETH 类型账号模型适用，单位为 GWei        |
| gas_limit    | string | （非必需）燃料上限，ETH 类型账号模型适用                     |

##### 3、Response

| 参数   | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| status | string | 状态码，当状态码为 0 时，表明回调服务器正常执行；当状态码为其他值时，表明回调服务器执行过程中出现了一些异常情况 |
| error  | string | 错误信息；当 status 返回值不是 0 时，代表回调服务器内部出现的错误信息；当 status 为 0，且风控结果为 REJECT 时，代表具体的风控拒绝信息。 |
| data   | json   | 请求的结果数据                                               |

data结构

| 参数        | 类型   | 描述                                                         |
| ----------- | ------ | ------------------------------------------------------------ |
| callback_id | string | 本次请求的callback_id                                        |
| sino_id     | string | 本次请求的sino_id                                            |
| request_id  | string | 本次请求的request_id                                         |
| action      | string | 本次请求的处理结果： Approve: 允许 Reject: 拒绝 Wait: 等待后重试 |
| wait_time   | string | 当action为Wait时，此字段用于指示MPC Node需要等待的时间，单位为秒 |

#### 4.2.3 rawdata_signature

该接口用于上报用户自定义的消息的签名结果，只有当sign业务的sign_type为`2`或`3`时且MPC Node签名成功后才会向回调服务上报原始的消息和签名结果。

##### 1、HTTP接口

> path: /v1/rawdata_signature

> method: post

> body: JSON编码的数据

##### 2、 Request

| 参数           | 类型   | 描述                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| callback_id    | string | 回调请求唯一ID                                               |
| request_detail | struct | 回调请求详细信息，包括请求的一系列关键信息。不同的回调请求类型对应不同的 request_detail 结构；格式为 JSON 序列化后的字符串 |

request_defailt内容如下：

| 参数      | 类型   | 描述             |
| --------- | ------ | ---------------- |
| message   | string | 原始待签名的消息 |
| signature | string | 签名结果         |

##### 3、Response

| 参数   | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| status | string | 状态码，当状态码为 0 时，表明回调服务器正常执行；当状态码为其他值时，表明回调服务器执行过程中出现了一些异常情况 |
| error  | string | 错误信息；当 status 返回值不是 0 时，代表回调服务器内部出现的错误信息。 |
