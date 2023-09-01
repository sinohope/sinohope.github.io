# 参数及返回值通用说明
## 统一的返回值结构
| 代码 | 说明 |
| :-- |:---------------|
| code | 状态返回代码（成功返回200） |
| msg | 状态返回描述 |
| data | 响应的数据 |
| success | 请求是否成功（成功返回true，失败返回false） |

## 常见错误码定义

当Sinohope WaaS 服务发生错误的时候，会返回给客户端统一格式的数据

- `200`: Successful response. Refer to each API for the detailed response data.
- `400`: Return Bad Request.
- `401`: Unauthorized. Either API details are missing or invalid
- `403`: Forbidden - You do not have access to the requested resource.
- `415`: Unsupported media type. You need to use application/json.
- `500`: Exchange/Sinohope internal error.

### 系统层面错误
| 错误码 | 描述 |
| :-- |:---------------|
| 1001 | 未知异常，请联系 Sinohope 客服 |
| 1002 | 重复的请求 |
| 1004 | APIKey 错误 |
| 1005 | 验签失败 |
| 1006 | IP 调用频率受限 |
| 1007 | 无接口权限 |
| 1008 | 无效的ip地址 |
| 1009 | 签名请求头不能为空 |
| 1010 | 时间戳请求头不能为空 |
| 1011 | 请求服务接口异常 |
| 1012 | 无效的业务请求，请检查是否有对应业务请求头 |
| 1013 | 签名失败 |
| 1014 | 不支持的请求类型(仅支持GET、POST) |
| 1015 | 缺少签名参数 |

### 参数层面错误
| 错误码 | 描述 |
| :-- |:---------------|
| 2001 | 币种暂不支持 |
| 2002 | 链暂不支持 |
| 2003 | 输入地址无效 |
| 2004 | 交易记录不存在 |
| 2005 | 无权限 |
| 2006 | 转账信息异常 （kyt校验不通过） |
| 2007 | 矿工费过低 |
| 2008 | To地址非内部地址 （转账保护） |
| 2009 | 余额不足以支付转账数量和Gas费 |
| 2010 | gas不足 （token转账） |
| 2011 | 可用余额不足 （token转账） |
| 2012 | 名称中不能包含反斜杠\ |
| 2013 | 未找到path对应地址 |
| 2097 | 页页数错误 pageIndex >=1 |
| 2098 | 分页数量错误 pageSize <=50 |
| 2099 | 必须参数缺失 |
| 2100 | pageSize必须大于0 |
| 2101 | 指定的钱包不存在 |
| 2102 | 指定的资产不存在 |
| 2103 | 指定的链标识不存在 |
| 2104 | 指定的金库不存在 |
| 2105 | page size exceeds maximum limit(50) |
| 2106 | 生成链地址单子最大个数超限（50） |
| 2107 | pageIndex最小为1 |
| 2108 | 参数类型错误 |
| 2109 | advancedEnabled must be 0 or 1 |
| 2110 | algorithmType must be 0 or 1 |
| 2111 | requestId total cannot be greater than 50 |
| 2112 | sinoId total cannot be greater than 50 |
| 2113 | signAlgorithm must in 'personal_sign、signTypedData、 eth_signTypedData_v3、eth_signTypedData_v4' |
| 2114 | The length of requestId is too long, the maximum is 120 |
| 2115 | message 格式错误，或者signAlgorithm参数错误 |
| 2116 | 钱包与组织信息不匹配 |
| 2117 | 钱包与金库信息不匹配 |
| 2118 | 金库与组织信息不匹配 |

### 业务层面错误
| 错误码 | 描述 |
| :-- |:---------------|
| 4001 | 组交易失败 |
| 4002 | 广播失败 |
| 4003 | 不支持加速的币种 |
| 4004 | 加速交易已上链或nonce已被占用 |
| 4005 | 取消交易已上链或nonce已被占用 |
| 4006 | MPC Node 未绑定 |
| 4007 | MPC Node 未DKG |
| 4008 | 同一金库不能够同时发起创建钱包操作 |
| 4009 | 同一金库下钱包名称不能相同 |
| 4010 | 创建钱包数量和自定义钱包list不一致 |
| 4011 | 钱包数量限额 |

## 数据字典
### 交易手续费费率等级
| 字典码 | 描述 |
| :-- |:---------------|
| LOW | 低 |
| MIDDLE | 中 |
| HIGH | 高 |

### 交易状态
| 字典码 | 描述 |
| :-- |:---------------|
| 0 | 交易待二次确认 |
| 1 | 交易待签名 |
| 2 | 交易上链中 |
| 4 | 广播失败 |
| 5 | 交易上链失败 |
| 6 | 广播网络超时 |
| 10 | 交易上链成功 |
| 11 | 交易链上回滚 |
| 13 | 交易拒绝 |


## 文档变更记录

| Version | Log           | Date       | Modifier |
| ---- | ------------- | ---------- | ------ |
| v0.9.0 | first version | 2023-08-04 | Owen  |
| v0.9.1 | add new sections,and fix some apis | 2023-08-22 | Owen  |