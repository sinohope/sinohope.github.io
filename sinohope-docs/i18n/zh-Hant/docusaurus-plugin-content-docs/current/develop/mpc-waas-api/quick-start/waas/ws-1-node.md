---
sidebar_position: "1"
---
# MPC Node 使用指南

## 1. Sinohope WaaS MPC技术简介

门限签名（Threshold Signature Scheme，TSS）是数字签名的一个重要分支，它是一种基于安全多方计算（Secure Multi-Party Computation，MPC）的密码学技术，也是 MPC 密钥管理的重要研究方向。

Sinohope 推出的 WaaS（Wallet as a Service）是以MPC-TSS技术为基础的钱包即服务方案。Sinohope WaaS服务需要客户与平台以分布式协作的方式，各自持有私钥分片，基于[MPC-CMP协议](https://eprint.iacr.org/2021/060)（ECDSA）及[SS01协议](https://link.springer.com/chapter/10.1007/3-540-47719-5_33#chapter-info)（EdDSA）实现由客户主导的链下多方签名。MPC Node 是 Sinohope WaaS 为客户提供的专属程序包，用于管理客户自己的私钥分片。

Sinohope 采用3-3多签模式，客户持有一个私钥分片、Sinohope持有两个私钥分片。

- MPC Node 1：Sinohope负责管理，该 Node 会一直在线。
- MPC Node 2：Sinohope负责管理，该 Node 会一直在线。
- MPC Node 3：客户负责管理，也应保持永远在线已实现自动化流程。

## 2. MPC Node部署实施

### 2.1 环境准备

#### 2.1.1 通用服务器环境

通用服务器指的是云服务器商 EC，或者是客户自主运维的服务器物理机。

##### 最低配置

- CPU：AMD64或ARM64 架构，2 核，主频 2.0 GHz
- 内存：4 G
- 硬盘：64 G SSD
- 操作系统：Ubuntu 20.04或最新。 (注：理论上支持所有可运行Docker的系统)

##### 推荐配置

- CPU：AMD64或ARM64 架构，4 核，主频 3.0 GHz
- 内存：8 G
- 硬盘：128 G SSD
- 操作系统：Ubuntu 20.04或最新。 (注：理论上支持所有可运行Docker的系统)

#### 2.1.2 TEE服务器环境

可参考Azure的SGX云服务快速完成机器的配置，[快速入门：在 Azure 市场中创建 Intel SGX VM](https://learn.microsoft.com/zh-cn/azure/confidential-computing/quick-create-marketplace)。购买微软云SGX服务器，请选择Ubuntu 20.04和DCsv3系列支持标准。配置说明请参考：[适用于 Intel SGX 的 Azure 上的解决方案](https://learn.microsoft.com/zh-cn/azure/confidential-computing/virtual-machine-solutions-sgx)。

##### 最低配置

- CPU：Intel-SGX 架构，2核
- 内存：4 G
- 硬盘：64 G SSD
- 操作系统：Ubuntu 20.04

##### 推荐配置

- CPU：Intel-SGX 架构，2核
- 内存：16 G
- 硬盘：128 G SSD
- 操作系统：Ubuntu 20.04或最新。 (注：理论上支持所有可运行Docker的系统)

 ![img](images/sgx.png)

- 查看机器对SGX的支持情况，如果使用的Azure云服务默认都已经配置完成。
```
apt install cpuid
cpuid | grep SGX
```
- 查看SGX驱动安装情况，如果使用的Azure云服务默认都已经配置完成。

如果您的系统支持 FLC，请确保您的 Linux 内核版本为 5.11 或更高版本。您可以使用 进行检查uname -r。如果您无法升级内核，您可以安装DCAP 驱动程序。
```
ls /dev/*sgx*
```

#### 2.1.3 网络要求

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

#### 2.1.4 安装 Docker

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

- 软件包（主要是管理脚本及配置文件）通过开源项目进行发布，下载地址：[sinohope-mpc-node/releases](https://github.com/sinohope/sinohope-mpc-node/releases)。位于`env/general`下的程序在普通cpu环境使用，位于`env/intel-sgx`下的程序在intel sgx cpu环境使用。
- Releases 页面将包含主要内容的 sha256 值，请将内容下载到目标位置后，校验哈希值的一致性。

所需的初始文件如下：
```Bash
sinohope-mpc-node
├── config.toml （配置文件）
└── node.sh （管理脚本）
```
1. node.sh脚本用于控制mpc-node服务的行为，如生成分片私钥，启动服务等。执行`./node.sh help`会得到所有命令的说明。
2. config.toml示例与说明如下：
```
[app]
# 软件的名称，日志中有体现。
name = "mpc-node" 
# 3个分片，a,b,c。 不可以修改。    
party-id = "a"     
# 用户类型，不可以修改。   
account-type = "2"    

# 日志
[log] 
# 日志等级 : 0: Panic 1: Fatal 2: Error 3: Warn 4: Info 5: Debug 6: Trace
[log.stdout]
# 是否启用终端日志输出
enable = true  
 # 日志等级 
level = 6      

[log.file]
# 是否启用文件日志输出
enable = true 
# 日志等级 
level = 6 	   
# 日志文件路径，是docker内部路径，执行node.sh start时，会把当前目录映射到docker内的/tmp/mpc-node
path = "/tmp/mpc-node/logs/mpc-node.log"  

# 分片存储
[storage] 
# 存储引擎类型，分为bolt和sgx两种，默认为bolt。bolt为文件数据库存储，sgx为文本文件存储。 如果使用intel-sgx-tee环境，必须指定为sgx存储。
engine = "bolt"  
# t/n 组合密码，可以是1/1的密码，也可以是2/3密码，任意输入2段密码即可。如果t>1，则密码必须由专门的工具生成密码，不可自由生成。  
t = 1			  
n = 1
# 分片数据存储路径，是docker内部路径。
db-file-path = "/tmp/mpc-node/asset.db"  
# 服务地址与端口，是docker内部地址与端口。
unseal-server-address = "0.0.0.0:8080"   

# mpc server负责把3个mpc node连接起来。
[mpc-service] 
# node需要使用websocket与mpc server建立连接
protocol = "wss"    。
 # mpc server的url地址
address = "api.sinohope.com"  
# mpc server的url路劲
path = "/proxy"     

# “签名结果”的加密， mpc对raw_data签名的结果做一次加密保护，这样别人拿到了签名结果也不可以使用。
[encrypt-signature] 
# 是否开启
enable = true  
# 加密使用的Secp256r1公钥路径，是docker内部路径。
public-key-path = "/tmp/mpc-node/encrypt_sig_public.pem"  

# 签名回调服务，mpc-node在签名之前，把待签名数据发给callback服务，由callback审核是否允许签名。
[callback] 
retry-times = 60
sleep-seconds = 60
# callback列表，如果列表为空，则回调不生效。
[[callback.server]] 
# callback地址
address = "http://10.151.100.41:9090" 
# mpc-node调用callback返回的结果，是使用Secp256r1私钥签名的，mpc-node通过公钥验证签名的正确性。公钥的路径，是docker内部路径。
public-key-path = "/tmp/mpc-node/callback_server_public.pem" 
```

- MPC Node初始化成功后，会自动创建asset.db文件和logs目录：

```JSON
sinohope-mpc-node
├── config.toml
├── node.sh
├── asset.db (本地产生的重要数据都存储在这里，备份与恢复就是恢复数据)
└── logs (日志文件目录)
```

#### 2.2.2 初始化节点

首先执行以下命令启动mpc-node服务，执行其他命令之前需要先启动服务。

```
sudo ./node.sh start
```
示例：
```
./node.sh start
mpc-node instance name: mpc-node, unseal server address: 127.0.0.1:10080
a0c4e4380926d588016570a5d99a7b875a997c841d70472a4bcf1972b200ec49
mpc-node server address: 127.0.0.1:10080
```
说明：首先脚本会自动做一些环境的检查工作，如判断是否安装了Docker，判断用户的权限等。如果需要在当前系统同时运行多个mpc-node，需要以目录的形式进行区分。如果在同一个目录中尝试运行多个mpc-node，则只有第一次初始化的节点可以正常运行。如果希望运行两个mpc-node，它们的名字假设分别是mpc-node-a和mpc-node-b，那么需要创建两个目录，它们的名称可以是：mpc-node-a和mpc-node-b。然后把node.sh和config.toml这两个文件分别复制到以上两个目录中。

首次部署MPC Node时请在命令行执行以下命令，然后根据提示完成初始化：

```Bash
sudo ./node.sh init
```

示例：

```Shell
./node.sh init
New password:
Retype new password:
{"data":{"node_id":"sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0MDdlMDgyNzA5OTU1NTUxMzljODExMzQ3YTBkZjVmZjVhYmY1ZmM1MTFiOWFiM2U0MWE5N2MwMDlkODA3OGY3ZTc1MzlhYjA2M2ZkNzczZTliOTJjZWU5MjI1ZTVhMTFhYmJjNzExOWRlNDkwYjNiMzZkNTM3MWFmZDRkYjBiYzI=","public_key":"-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEB+CCcJlVVROcgRNHoN9f9av1/FEb\nmrPkGpfACdgHj351OasGP9dz6bks7pIl5aEau8cRneSQs7NtU3Gv1NsLwg==\n-----END PUBLIC KEY-----\n"},"status":"ok"}
```

init命令的主要任务是初始化节点信息，包括：

- 给 MPC 节点设置一个密码，这个密码用于保护您的私钥分片 及其他私密数据，**请您妥善保管，切勿泄漏，并且做好安全冗余备份**。节点启动时会要求输入该密码。
- 创建node id， 每一个MPC Node都有一个唯一标识id，您将需要使用该 node id 将您的MPC 节点与您的 WaaS 组织账号做唯一关联。
- 创建与callback-server通信时的ECDSA密钥对。

密码说明：
- 密码须包含大写字母、小写字母、数字、特殊字符，长度12位以上。
- sinohope-mpc-node密码采用t-n组合方式，t必须小于等于n(如2/3，执行init和unseal时只需要输入2段密码)。
- 如果配置中的`storage.t`设置为1，操作命令只需要执行1次，密码可由人工创建。
- 如果配置中的`storage.t`大于1，操作命令需要执行t次，t-n密码需要使用专门工具生成，不可以任意创建。[点击获取密码生成工具](https://github.com/sinohope/shamir-pasasword)
- t-n密码需要手动修改config.toml中的`storage.t`和`storage.n`。

#### 2.2.3 (Optional) 部署及配置回调服务

MPC Node 提供回调机制用于供您执行风险控制，这个回调服务是可选的（在生产环境下，强烈建议您开发并部署回调服务）。

为MPC Node配置了回调服务之后，MPC Node 在发起任何 MPC业务（如签名）之前均会回调指定的接口，请求回调服务对当前MPC 业务的授权，只有在您的回调服务明确返回 ACCEPT 状态时，MPC业务才会开始执行。

另外，当您使用消息签名 或 对原始数据直接签名 的功能时，MPC Node 将通过回调接口将签名结果提供给您，供您的业务使用。

关于回调服务的开发、部署、配置等内容，详见“MPC Node 回调机制”章节。

#### 2.2.4 绑定 MPC Node

前述步骤完成后，可使用具有管理员权限的账号登录 Sinohope Web Console， 在【设置】-【MPC Node】页面完成 MPC Node 的关联绑定。此处需要输入MPC Node 初始化时生成的 Node ID。


#### 2.2.5 启封 MPC Node 服务

绑定 MPC Node 完成后，通过如下命令启动 MPC Node 服务。

```Bash
sudo ./node.sh unseal 
```

示例：

```JSON
./node.sh unseal
? Enter current password: 
{"data":"in-bkey success","status":"ok"}
```

服务启动运行后，回到web console MPC Node 配置界面，正常情况下稍等片刻即可看到 “key share 状态” 为“已生成”，同时界面上将展示您的组织的MPC 根公钥 信息。

![img](images/mpc-node.png)


#### 2.2.6 ❗️❗️重要：数据库备份

MPC Node 本地数据库文件 `asset.db` 存储了您的私钥分片 等重要数据，所有数据均使用强密钥加密存储，该强密钥由您为 MPC Node 设置的密码经 KDF 函数派生而来。

私钥分片事关资金安全及可用，Sinohope所掌管的私钥分片由平台基于多层级多区域的一系列高可用及灾备方案加以保管及备份，同时您也可申请对您的组织的所有分片私钥进行备份，从而完全掌控您的所有3片分片私钥。


而**对于您本地的数据库文件中存在的私钥分片，则必须由您自己完成安全冗余备份。请采取足够的安全措施、异地多副本 备份您的数据库文件，以及您为MPC Node设置的 密码**。

**建议数据库文件与密码分开保管，降低数据泄漏风险**。

**后续若您的 MPC Node 服务器或服务发生故障、数据受损、不可用等情况时，只能通过您备份的 数据库 文件及密码 重新部署MPC Node服务来进行恢复。Sinohope 将无法帮您恢复您的MPC Node 服务！！**

## 3. MPC Node 完整交互命令介绍

### 启动
请在命令行执行以下命令：


```Bash
sudo ./node.sh start
```

示例：

```Shell
./node.sh start
mpc-node instance name: mpc-node, unseal server address: 127.0.0.1:10080
a0c4e4380926d588016570a5d99a7b875a997c841d70472a4bcf1972b200ec49
mpc-node server address: 127.0.0.1:10080
```

### 初始化

请在命令行执行以下命令：


```Bash
sudo ./node.sh init
```

示例：

```Shell
./node.sh init
New password:
Retype new password:
{"data":{"node_id":"sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0MDdlMDgyNzA5OTU1NTUxMzljODExMzQ3YTBkZjVmZjVhYmY1ZmM1MTFiOWFiM2U0MWE5N2MwMDlkODA3OGY3ZTc1MzlhYjA2M2ZkNzczZTliOTJjZWU5MjI1ZTVhMTFhYmJjNzExOWRlNDkwYjNiMzZkNTM3MWFmZDRkYjBiYzI=","public_key":"-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEB+CCcJlVVROcgRNHoN9f9av1/FEb\nmrPkGpfACdgHj351OasGP9dz6bks7pIl5aEau8cRneSQs7NtU3Gv1NsLwg==\n-----END PUBLIC KEY-----\n"},"status":"ok"}
```

### 启封服务

请在命令行执行以下命令：

```Bash
./node.sh unseal 
```

示例：

```JSON
./node.sh unseal
? Enter current password: 
{"data":"in-bkey success","status":"ok"}
```

说明：脚本会读取密码并启动docker内的服务

### MPC Node其他命令

注：启动服务主要是init和start命令，其他命令是非必须命令，可按需查阅。

#### 查看node-id和callback公钥

该命令可查看MPC Node ID和回调服务通信公钥，只有MPC Node处于运行状态中时才可以使用此命令。

```JSON
./node.sh info
```

示例：

```Shell
./node.sh info   
{
  "data": {
    "node_id": "sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0MmFmNGY0Y2I5ZmM1MGFjMWUzNzIxMzM2Y2IyMmJmYzMzMDg4YjJmNGM4OTEyZjZhNDE4ZmNlY2JmZWFhMzIwMjNlMzg0MGE1YjBkODI3YWE5ODE1N2Y1MTE5Y2M2YTdiYzQ2NWNmN2EzNzc0MTkwNjdmYzc5ZGNjMjQ0YjgxZTU=",
    "public_key": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEKvT0y5/FCsHjchM2yyK/wzCIsvTI\nkS9qQY/Oy/6qMgI+OEClsNgnqpgVf1EZzGp7xGXPejd0GQZ/x53MJEuB5Q==\n-----END PUBLIC KEY-----\n",
    "state": "unsealed"
  },
  "status": "ok"
}
```

#### 修改密码

该命令用于修改MPC Node密码，输入旧密码。请确保MPC Node已经处于正常运行状态（完成MPC Node绑定，并且节点在线状态正常）：

```JSON
./node.sh reset
```

示例：

```JSON
./node.sh reset
? Enter current password: 
{"data":"re-bkey-init success","status":"ok"}
```


该命令用于修改MPC Node密码，输入新密码。请确保MPC Node已经处于正常运行状态（完成MPC Node绑定，并且节点在线状态正常）：

```JSON
./node.sh cmreset
```

示例：

```JSON
./node.sh cmreset
New password:
Retype new password:
{"status": "ok", "data": "re-bkey success"}
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

如果配置为启用回调机制，客户需要自己开发一个回调验证服务，用于验证Sinohope下发的任务是否合理，最终决定是否配合Sinohope完成签名。

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
  address = "http://<callback url>"
  public-key-path = "./callback_server_public.pem"
```

- 将 MPC Node 的 ECDSA 公钥复制到回调服务器相关配置文件中

如何获取 MPC Node 的 ECDSA 公钥： 

- 在 MPC Node 完成初始化后，可以通过如下命令查询 MPC Node 的 ECDSA 公钥：

```TOML
./node.sh info
```

- 示例输出：

```Shell
./node.sh info   
checking update...
{
  "data": {
    "node_id": "sinoMzA1OTMwMTMwNjA3MmE4NjQ4Y2UzZDAyMDEwNjA4MmE4NjQ4Y2UzZDAzMDEwNzAzNDIwMDA0MmFmNGY0Y2I5ZmM1MGFjMWUzNzIxMzM2Y2IyMmJmYzMzMDg4YjJmNGM4OTEyZjZhNDE4ZmNlY2JmZWFhMzIwMjNlMzg0MGE1YjBkODI3YWE5ODE1N2Y1MTE5Y2M2YTdiYzQ2NWNmN2EzNzc0MTkwNjdmYzc5ZGNjMjQ0YjgxZTU=",
    "public_key": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEKvT0y5/FCsHjchM2yyK/wzCIsvTI\nkS9qQY/Oy/6qMgI+OEClsNgnqpgVf1EZzGp7xGXPejd0GQZ/x53MJEuB5Q==\n-----END PUBLIC KEY-----\n",
    "state": "unsealed"
  },
  "status": "ok"
}
```

其中的 public key 即为 MPC Node 供回调服务使用的 ECDSA 公钥。

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

> path: /check

> method: post

> body: JSON编码的数据

##### 2、Request

| 参数           | 类型   | 描述                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| callback_id    | string | 回调请求唯一ID                                               |
| request_type   | string | 回调请求是字符串类型，有以下六种取值：keygen、sign、bip340-schnorr-sign、taproot-sign、pre-sign、pre-sign-online         |
| request_detail | struct | 回调请求详细信息，包括请求的一系列关键信息。不同的回调请求类型对应不同的 request_detail 结构；格式为 JSON 序列化后的字符串 |
| extra_info     | struct | 回调请求辅助信息，包括请求的一些额外相关信息；格式为 JSON 序列化后的字符串 |

- 当`request_type == keygen`时，`request_detail` 的结构定义如下：

| 参数         | 类型     | 描述                                          |
| ------------ | -------- | --------------------------------------------- |
| threshold    | int      | 签名阈值                                      |
| party_ids    | []string | 参与生成私钥的节点ID集合                      |
| cryptography | string   | 使用的签名算法。ecdsa-secp256k1/eddsa-ed25519 |

- 当 `request_type 为 sign 或 bip340-schnorr-sign 或 taproot-sign 或 pre-sign 或 pre-sign-online` 时，`request_detail` 的结构定义如下：

| 参数       | 类型   | 描述                                                   |
| ---------- | ------ | ------------------------------------------------------ |
| sign_type  | string | 待签名的交易类型：1、普通交易；2、EIP191/EIP712签名；3、RawData签名； |
| public_key | string | 根公钥对应的public key                                 |
| path       | string | bip32派生路径                                          |
| message    | string | 待签名的消息                                           |
| tx_info    | json   | 交易的详细信息                                         |

其中，tx_info 的结构定义如下：

| 参数        | 类型   | 描述                                                         |
| ----------- | ------ | ------------------------------------------------------------ |
| vaultId     | string | 金库id                                                       |
| walletId    | string | 钱包id                                                       |
| requestId   | string | 请求方交易的requestId                                        |
| chainSymbol | string | 链标识                                                       |
| assetId     | string | 资产id                                                       |
| from        | string | from 地址                                                    |
| to          | string | to地址                                                       |
| toTag       | string | 交易的memo                                                   |
| amount      | string | 金额                                                         |
| fee         | string | 手续费 对于 UTXO 类的非EVM兼容链的交易,自设置fee, 如参数为 UTXO 资产转账提供，表示每字节的手续费 |
| gasPrice    | string | gasprice                                                     |
| gasLimit    | string | gaslimit                                                     |
| inputdata   | string | 以太坊交易data                                               |
| note        | string | 备注：用于用户自己需要的一些备注信息                         |
| curInputId  | string |  当前签名inputId                       |
| tapScriptRoot  | string |  taproot script 树根                       |
| publickKey  | string |  from地址的公钥                       |
| extraData   | json   |  utxo交易的详细数据，包括vin,vout         |
| brc20Details   | json   |  brc20详细信息    |
| runeDetails   | json   |  rune详细信息    |
| pre_sign_signature_id | string |预签名id，pre-sign-online使用的预签名数据的id|

- brc20Details 的结构示例：

```
[
    {
        "method": "transfer",
        "ticker": "helloworld",
        "quantity": "920769938",
        "inscriptionId": "63045affabbd947fb4bc425***********",
        "step": 3,
        "from": "1Bt84h23CKi****************",
        "to": "bc1q53ss0p87****************"
    }
]
```

- runeDetails 的结构示例：

```
[
    {
        "fromAddress": "1Bt84h23CKi****************",
        "toAddress": "bc1q53ss0p87****************",
        "runeName": "HELLOWORLD",
        "runeId": "2818544:3897",
        "runeSpacedName": "HELLO•WORLD",
        "runeAmount": "100",
        "runeSymbol": "¤",
        "runeDivisibility": 0
    }
]
```


- extraData 的结构示例：

```
{
    "toTag": "TOTAG1637",
    "vinList": [
        {
            "address": "mwTnMZzAvUzVCQKGkdcAHYW1sMnJCumbJL",
            "amount": 1425593,
            "blockHash": "0000000000000005f9c6962d86854e412bf0cc1d61b5849c0ac2f83d701007a8",
            "blockHeight": 2583605,
            "blockState": 1,
            "blockTimeStamp": 1711441887,
            "currency": "btc",
            "id": 6909,
            "state": 0,
            "tag": "",
            "transactionHash": "17b0378f551ddfda5d512a7304fdc0f33493f0429a479e243f3653d7dca0700e",
            "voutIndex": 1
        }
    ],
    "voutList": [
        {
            "address": "mwTnMZzAvUzVCQKGkdcAHYW1sMnJCumbJL",
            "amount": 22000
        }
    ]
}
```

- extra_info 的结构定义如下：

| 参数       | 类型   | 描述                                                         |
| ---------- | ------ | ------------------------------------------------------------ |
| sino_id    | string | Sinohope 内部对当前签名对应业务的唯一标识，该标识会在开发者调用诸如`create_transfer` 之类的waas API时在 response中提供。      |
| request_id | string | 用户通过 WaaS 接口传入的请求 ID，如果请求非 WaaS 接口，Sinohope 内部会自动生成 |

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

#### rawdata_signature

该接口用于上报用户自定义的消息的签名结果，只有当sign业务的sign_type为`2`或`3`时且MPC Node签名成功后才会向回调服务上报原始的消息和签名结果。

##### 1、HTTP接口

> path: /rawdata_signature
> 
> method: post
> 
> body: JSON编码的数据

##### 2、 Request

| 参数           | 类型   | 描述                                                         |
| -------------- | ------ | ------------------------------------------------------------ |
| callback_id    | string | 回调请求唯一ID                                               |
| request_detail | struct | 回调请求详细信息，包括请求的一系列关键信息。不同的回调请求类型对应不同的 request_detail 结构；格式为 JSON 序列化后的字符串 |
| extra_info     | struct | 回调请求辅助信息，包括请求的一些额外相关信息；不同的回调请求类型对应不同的 extra_info 结构；格式为 JSON 序列化后的字符串 |

request_defailt内容如下：

| 参数      | 类型   | 描述             |
| --------- | ------ | ---------------- |
| message   | string | 原始待签名的消息 |
| signature | string | 签名结果         |

- extra_info 的结构定义如下：

| 参数       | 类型   | 描述                                                         |
| ---------- | ------ | ------------------------------------------------------------ |
| sino_id    | string | Sinohope 内部对当前签名对应业务的唯一标识，该标识会在开发者调用诸如`create_transfer` 之类的waas API时在 response中提供。    |
| request_id | string | 用户通过 WaaS 接口传入的请求 ID，如果请求非 WaaS 接口，Sinohope 内部会自动生成 |

##### 3、Response

| 参数   | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| status | string | 状态码，当状态码为 0 时，表明回调服务器正常执行；当状态码为其他值时，表明回调服务器执行过程中出现了一些异常情况 |
| error  | string | 错误信息；当 status 返回值不是 0 时，代表回调服务器内部出现的错误信息；当 status 为 0，且风控结果为 REJECT 时，代表具体的风控拒绝信息。 |

### 4.3 激活回调验证服务

回调验证服务配置和启动后，需要调用./node.sh start重新启动MPC Node。


## 5. MPC Node签名结果加密

对于独立部署mpc-node的用户，在调用接口`/v1/waas/mpc/web3/sign_message`和`/v1/waas/mpc/wallet/advance/sign_raw_data`进行签名时， mpc-node可对签名结果进行加密保护。

- 加密保护使用Secp256r1算法，公钥加密，私钥解密。
- 用户调用接口`/v1/waas/mpc/web3/sign_result`查询签名结果时，需要解密后使用。
- 如果mpc-node配置了Callback 回调服务，回调服务接收到的签名结果也需要解密后再使用。


### 5.1 生成加密公私钥

```
openssl ecparam -genkey -name prime256v1 -out decrypt_sig_pirvate.pem
openssl ec -in decrypt_sig_pirvate.pem -pubout -out encrypt_sig_public.pem
```

### 5.2 设置配置文件

在配置文件config.toml中开启动签名结果加密功能，并指定加密的公钥。
```
[encrypt-signature]
enable = true
public-key-path = "/tmp/mpc-node/encrypt_sig_public.pem"
```

- 如果`encrypt-signature.enable = true` ，则mpc-node会对签名结果进行加密，否则返回原始签名结果。
- `encrypt-signature.public-key-path` 加密签名结果的公钥，使用pem格式文件。
- `callback.server.public-key-path` mpc-node与Callback服务通信数据验签公用，Callback服务使用私钥对通信数据给出一个签名，mpc-node通过这个公钥进行数据校验，使用pem格式文件。
- `encrypt-signature.public-key-path` 和`callback.server.public-key-path` 都使用的Secp256r1算法。为了简单化，建议使用同一把公私钥。


### 5.3 解密签名结果


回调服务demo中，对回调结果(加密的签名数据)做了解密处理，可参考Sinohope 提供的回调服务示例：[GitHub - sinohope/mpc-node-callback-demo](https://github.com/sinohope/mpc-node-callback-demo)

### 5.4 预签名
mpc签名比较消耗CPU，也比较耗时，一般单次签名可能需要3-5秒才能完成，时间的长短取决于mpc-node的配置和网络状况。如果希望获得毫秒级的体验，可以开启预签名。开启之后，系统
会在mpc-node空闲的时候做预签名（pre-sign），在真正需要对交易进行签名时使用之前准备好的预签名数据做pre-sign-online，pre-sign-online的效率远高于普通的sign。

- 开启预签名前的准备：签名callback服务要支持request_type为pre-sign、pre-sign-online的两种的业务类型。
- 如何开启：目前需要联系管理员，由管理员协助开启



