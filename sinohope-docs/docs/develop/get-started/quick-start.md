---
sidebar_position: 1
---

# Quick Start

This chapter is a quick start tutorial that will help you quickly understand and start using the developer services provided by Sinohope.

When customers registered an account on Sinohope, they will be allowed to own a "test organization" and a "formal organization" respectively, representing the test environment and the formal use environment. The test environment only supports a small number of test chains for trial use, integration testing and other purposes. This tutorial is mainly used in the test environment.

This tutorial mainly involves the following:

- Register and log in to an account
- Organizations and hierarchies 
- Development integration based on API&SDK


### Register and Log In to an Account

To start using Sinohope developer services, you need to contact [Sinohope](https://www.sinohope.com/) to register an organizational account, and then register your personal account based on your email on the [web console](https://console.sinohope.com/user/login) and log in to the organization registered by Sinohope for you.

### Organizations and Hierarchies

Sinohope's wallet services include self-custody wallets, WaaS wallets, and fully-custody wallets. The self-custody wallets and WaaS wallets are based on MPC-TSS technology, and developers can integrate relevant functions through Open API. The fully-custodial wallet provides centralized custodial services based on traditional single private key wallets.  

The self-custody and WaaS wallets use a hierarchical structure to manage the corresponding chain addresses, consisting of four levels as shown in the diagram below:

![](./img/organize.png)

### Development Integration Based on API&SDK

Sinohope provides APIs based on HTTP protocol, and will also provide SDKs in multiple languages, making it easy for developers to integrate WaaS functions. The SDK mainly provides the following functions:

- Unified encapsulation of interface request signature processing;
- The SDK encapsulates the API interfaces, enabling developers to make API requests by calling methods.

Currently provided SDKs: [java sdk](https://github.com/sinohope/sinohope-java-api), [golang sdk](https://github.com/sinohope/golang-sdk), [JS sdk](https://github.com/sinohope/js-sdk). 

# Docs Index
[General](./general)

[Supported Blockchains and Coins](./supported-coins)

[Open API](/docs/category/mpc-waas-api)

# Developer Group
![tg](./img/telegram-developer.png)