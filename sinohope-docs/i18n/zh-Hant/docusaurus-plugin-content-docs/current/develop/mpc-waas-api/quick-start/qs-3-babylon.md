---
sidebar_position: "3"
---
# babylon staking

## 什么是babylon

关于babylon的详细介绍可以移步到[babylon官网](https://btcstaking.staging.babylonchain.io/)

## 说明 

目前babylon质押还处于测试阶段，我们对接了babylon的staging环境，这个环境对质押时长的要求较宽松（最小质押周期150区块，解绑后最小提取时间5个区块），方便测试。其对应的BTC网络是signet。

## 如何发起一个质押

发起质押本质上是发起一笔BTC交易[create](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-create)到BTC网络，将指定数量的BTC锁定在一个UTXO中，这个UTXO的花费有两种方式：

1. 到达指定的时间(stakingTime)进行提取[withdraw](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx)
2. 解除绑定[unbond](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-unbond)，解绑之后质押的BTC不会立即返回给原地址，而是会锁定到一个新的UTXO，再经过一段时间（unbondingTime）后才可提取[withdraw](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx)

## 如何确保质押是有效的

babylon只识别那些满足一定约束的交易为有效的质押，这些约束条件一部分sinohope已经做了处理，还剩余一部分是需要由用户来保证的，当然如果用户使用了错误的参数，sinohope也会给出提示让用户重新输入合理的值。这些参数包括

- stakingTime：质押周期（区块数）
- stakingAmount：质押金额
- finalityPubKey：finality-providers 的 pubKey

babylon提供了接口，可以查看这些参数的有效值范围

- [全局参数](https://staking-api.staging.babylonchain.io/v1/global-params) 查看 stakingTime、stakingAmount的有效区间
- [finality-providers](https://staking-api.staging.babylonchain.io/v1/finality-providers) 查看所有finality-providers

## 如何查看质押的状态

[查看质押状态](https://staking-api.staging.babylonchain.io/v1/delegation?staking_tx_hash_hex=1f05b1f084295779ebad8de92d8e011d42b2928239beba04172515e7ec874ce8)
将staking_tx_hash_hex 替换成您质押交易的hash