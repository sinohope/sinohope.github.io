# babylon staking

## what is babylon

The detailed introduction about babylon can move[babylon](https://btcstaking.staging.babylonchain.io/)

## illustrate 

At present, Babylon Staking is still in the test stage. We connect with the Babylon's Staging environment. This environment has more loose requirements for Stakingtime (minimal Stakingtime 150 blocks, 5 blocks with minimum extraction time after unbundling), which is convenient for testing. The corresponding BTC network is Signet.

## How to launch staking

Initiating Staking is essentially initiating a BTC transaction to the BTC network[create](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-create)，Lock the specified number of BTCs in a UTXO, there are two ways to spend this UTXO:

1. Arrive at the specified time (stakingtime) for extraction[withdraw](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx)
2. unbond[unbond](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-unbond)，After unbinding, the BTC of Staking will not return to the original address immediately, but will lock it to a new UTXO. It can be extracted after a period of time (unbondingtime)[withdraw](/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx)

## How to ensure that staking is effective

BABYLON only identifies those trading that meets certain constraints as a valid STAKING. Some of these constraints have been processed by sinohope. The remaining part needs to be guaranteed by the user. Of course Let the user re -enter a reasonable value. These parameters include:

- stakingTime
- stakingAmount
- finalityPubKey

BABYLON provides an interface to view the effective value range of these parameters

- [global params](https://staking-api.staging.babylonchain.io/v1/global-params) view the effective range of Stakingtime, Stakingamings
- [finality-providers](https://staking-api.staging.babylonchain.io/v1/finality-providers) view all final-partiders

## How to view the state of staking

[staking status](https://staking-api.staging.babylonchain.io/v1/delegation?staking_tx_hash_hex=1f05b1f084295779ebad8de92d8e011d42b2928239beba04172515e7ec874ce8)
Replace the staking_tx_hash_hex to the hash of your Staking TX