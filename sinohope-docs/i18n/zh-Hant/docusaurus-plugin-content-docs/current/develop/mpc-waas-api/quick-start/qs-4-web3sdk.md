---
sidebar_position: "4"
---
# web3 SDK

## 概览

目前基于 EVM(Ethereum Virtual Machine) 的链应用很广泛，因此我们创建了 Sinohope Web3 Provider，可以方便的基于 web3.js 和 ethers.js 来连接调用 Sinohope APIs，共享当前的技术栈。

下面是目前支持的一些 EVM 链:

- Ethereum
- BNB Chain (BSC)
- Polygon
- Avalanche
- Arbitrum
- Optimism
- Scroll

## ether.js 调用
使用 Sinohope Web3 Provider 可以轻松的使用 ether.js 技术栈来连接 Sinohope。

可以发布合约，签名消息，发送交易等。

### 安装
```
npm install @sinohope/sinohope-web3-provider ethers@5
```

### 环境配置
```js
import { SinohopeWeb3Provider, ChainSymbol, ApiBaseUrl } from "@sinohope/sinohope-web3-provider";

const sinohopeProvider = new SinohopeWeb3Provider({
    // apiBaseUrl: ApiBaseUrl.Sandbox // If using a sandbox workspace
    privateKey: process.env.SINOHOPE_API_PRIVATE_KEY,
    publicKey: process.env.SINOHOPE_API_PUBLIC_KEY,
    vaultWalletIds: process.env.SINOHOPE_VAULT_WALLET_IDS,
    chainSymbol: ChainSymbol.SEPOLIA,

    logTransactionStatusChanges: true, // Verbose logging
})
```

### 使用方法
```js
import * as ethers from "ethers"

const provider = new ethers.providers.Web3Provider(sinohopeProvider);
// const provider = new ethers.BrowserProvider(sinohopeProvider); // For ethers v6
```
设置好参数后就可以按常规调用provider对象的方法了

### 示例
这个例子中我们通过 ethers.js 和 Sinohope web3 provider 来调用执行 Greeting 合约的 setGreeting 方法。
```js
import { SinohopeWeb3Provider, ChainSymbol, ApiBaseUrl } from "@sinohope/sinohope-web3-provider";
import * as ethers from "ethers"
import { abiGREETING } from './greeting.mjs'

const CONTRACT_ADDRESS = "0x10EFb91d6953279A8f26E1BBF4065a19D0B2a52D"
const sinohopeProvider = new SinohopeWeb3Provider({
    privateKey: process.env.SINOHOPE_API_PRIVATE_KEY,
    publicKey: process.env.SINOHOPE_API_PUBLIC_KEY,
    chainSymbol: ChainSymbol.SEPOLIA,
    vaultWalletIds: process.env.SINOHOPE_VAULT_WALLET_IDS,
    apiBaseUrl: ApiBaseUrl.Sandbox,
});

(async() => {

    const provider = new ethers.providers.Web3Provider(sinohopeProvider);
    const myContract = new ethers.Contract(CONTRACT_ADDRESS, abiGREETING, provider.getSigner());
    
    const tx = await myContract.setGreeting('hello greeting')
   
    console.log(JSON.stringify(tx, null, 2))

})().catch(error => {
    console.log(error)
});
```


## web3.js 调用

使用 Sinohope Web3 Provider 可以轻松的使用 web3.js 技术栈来连接 Sinohope。

可以发布合约，签名消息，发送交易等。

### 安装
```
npm install @sinohope/sinohope-web3-provider web3
```

### 环境配置
```js
import { SinohopeWeb3Provider, ChainSymbol, ApiBaseUrl } from "@sinohope/sinohope-web3-provider";

const sinohopeProvider = new SinohopeWeb3Provider({
    // apiBaseUrl: ApiBaseUrl.Sandbox // If using a sandbox workspace
    privateKey: process.env.SINOHOPE_API_PRIVATE_KEY,
    publicKey: process.env.SINOHOPE_API_PUBLIC_KEY,
    vaultWalletIds: process.env.SINOHOPE_VAULT_WALLET_IDS,
    chainSymbol: ChainSymbol.SEPOLIA,

    logTransactionStatusChanges: true, // Verbose logging
})
```

### 使用方法
```js
import Web3 from "web3"

const provider = new Web3(sinohopeProvider);
```
设置好相应参数后就可以按常规方式调用 provider 对象的相关方法了。

### 示例
这个例子中我们通过 web3.js 和 Sinohope web3 provider 来调用执行 Greeting 合约的 setGreeting 方法。
```
import Web3 from "web3";
import { SinohopeWeb3Provider, ChainSymbol, ApiBaseUrl } from "@sinohope/sinohope-web3-provider";
import { abiGREETING } from './greeting.mjs'

const CONTRACT_ADDRESS = "0x10EFb91d6953279A8f26E1BBF4065a19D0B2a52D"
const sinohopeProvider = new SinohopeWeb3Provider({
    privateKey: process.env.SINOHOPE_API_PRIVATE_KEY,
    publicKey: process.env.SINOHOPE_API_PUBLIC_KEY,
    chainSymbol: ChainSymbol.SEPOLIA,
    vaultWalletIds: process.env.SINOHOPE_VAULT_WALLET_IDS,
    apiBaseUrl: ApiBaseUrl.Pre,
});

(async() => {

    const provider = new ethers.providers.Web3Provider(sinohopeProvider);
    const myContract = new ethers.Contract(CONTRACT_ADDRESS, abiGREETING, provider.getSigner());
    
    const tx = await myContract.setGreeting('hello greeting')
   
    console.log(JSON.stringify(tx, null, 2))

})().catch(error => {
    console.log(error)
});
```


## Sinohope Hardhat 插件

这个插件整合 [Sinohope](https://www.sinohope.com/) 到 [Hardhat](https://hardhat.org/)。

插件帮助你轻松配置 Sinohope 到你的 Hardhat 开发技术栈。

可以在 Hardhat 中发布合约，签名消息，发送交易等。

### 安装

```bash
npm install @sinohope/hardhat-sinohope
```

导入 `hardhat.config.js`:

```js
require("@sinohope/hardhat-sinohope");
const { ApiBaseUrl, ChainSymbol } = require("@sinohope/sinohope-web3-provider");
```

如果使用 TypeScript， 导入到 `hardhat.config.ts`:

```ts
import "@sinohope/hardhat-sinohope";
import { ApiBaseUrl, ChainSymbol } from "@sinohope/sinohope-web3-provider";
```

### 配置

插件继承 `HttpNetworkUserConfig` 对象，配置字段 `sinohope` 为可选配。

配置示例：

```js
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org",
      sinohope: {
        // apiBaseUrl: ApiBaseUrl.Sandbox, // If using a sandbox workspace
        chainSymbol: ChainSymbol.SEPOLIA,
        privateKey: process.env.SINOHOPE_API_PRIVATE_KEY!,
        publicKey: process.env.SINOHOPE_API_PUBLIC_KEY!,
        vaultWalletIds: process.env.SINOHOPE_VAULT_WALLET_IDS,
      }
    },
  },
};
```

### 使用
正确配置参数后，就可以按常规使用配置了 sinohope 参数的网络了。

```
import { ethers } from "hardhat";
const [account] = await ethers.getSigners();
console.log("Current Account Address:", account.address);
```
