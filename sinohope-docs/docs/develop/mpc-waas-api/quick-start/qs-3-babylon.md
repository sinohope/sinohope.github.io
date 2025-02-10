---
sidebar_position: "3"
---
# babylon staking

## what is babylon

For a detailed introduction to Babylon, please refer to its official website [babylon](https://btcstaking.staging.babylonchain.io/).

## illustrate 

At present, Babylon Staking is still in the test stage. We connect with the Babylon's Staging environment. This environment has more loose requirements for Stakingtime (minimal Stakingtime is 150 blocks, 5 blocks with minimum extraction time after unbundling), which is convenient for testing. The corresponding BTC test network is Signet.

## How to launch staking

Initiating Staking is essentially initiating a BTC transaction to the BTC network using API [create](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-create), locking the specified number of BTCs in a UTXO, there are two ways to spend this UTXO:

1. When the specified time (stakingtime) reached, then we can do an extraction using API [withdraw](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx).
2. End staking early through [unbond](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-unbond) transaction. After unbinding, the BTC of Staking will not return to the original address immediately, but will lock it to a new UTXO. It can be extracted after a period of time (unbondingtime) using API [withdraw](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx).

## How to ensure that staking is effective

BABYLON only identifies those trading that meets certain constraints as a valid STAKING. Some of these constraints have been processed by Sinohope. The remaining part needs to be guaranteed by the user. Of course, if the user uses the wrong parameters, Sinohope will also give a prompt to ask the user to re-enter a reasonable value.. These parameters include:

- stakingTime
- stakingAmount
- finalityPubKey

BABYLON provides an interface to query the effective value range of these parameters

- [global params](https://staking-api.staging.babylonchain.io/v1/global-params) : to query the effective range of Stakingtime, Stakingamings
- [finality-providers](https://staking-api.staging.babylonchain.io/v1/finality-providers) : to query all final-partiders

## How to query the state of staking

Using the API [staking status](https://staking-api.staging.babylonchain.io/v1/delegation?staking_tx_hash_hex=1f05b1f084295779ebad8de92d8e011d42b2928239beba04172515e7ec874ce8)
Note that you should replace the staking_tx_hash_hex to the hash of your Staking TX.