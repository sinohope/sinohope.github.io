# web3 SDK

## Overview

Based on the widespread application of EVM(Ethereum Virtual Machine) based blockchains, we created the Sinohope Web3 Provider, which allows you to easily connect web3.js and ethers.js to your Sinohope APIs, sharing the development tech stack.

Below are some of the supported EVM chains:

- Ethereum
- BNB Chain (BSC)
- Polygon
- Avalanche
- Arbitrum
- Optimism
- Scroll

## Sinohope-web3-provider ether.js integration
The Sinohope Web3 Provider helps seamlessly integrate Sinohope into your ethers.js development stack.

You can use it to deploy contracts, sign messages, and send transactions.

### Installation
```
npm install @sinohope/sinohope-web3-provider ethers@5
```

### Setup
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

### Usage
```js
import * as ethers from "ethers"

const provider = new ethers.providers.Web3Provider(sinohopeProvider);
// const provider = new ethers.BrowserProvider(sinohopeProvider); // For ethers v6
```
Now you can use the provider object exactly as you normally would!

### Example
In this example we are executing the 'setGreeting' method of Greeting contract on Sepolia by using ethers.js and Sinohope web3 provider.
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


## Sinohope-web3-provider web3.js integration

The Sinohope Web3 Provider helps seamlessly integrate Sinohope into your web3.js development stack.

You can use it to deploy contracts, sign messages, and send transactions.

### Installation
```
npm install @sinohope/sinohope-web3-provider web3
```

### Setup
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

### Usage
```js
import Web3 from "web3"

const provider = new Web3(sinohopeProvider);
```
Now you can use the provider object exactly as you normally would!

### Example
In this example we are executing the 'setGreeting' method of Greeting contract on Sepolia by using ethers.js and Sinohope web3 provider.
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


## Hardhat plugin for Sinohope

This is a [Hardhat](https://hardhat.org/) plugin for integrating with [Sinohope](https://www.sinohope.com/).

This plugin will help you to seamlessly integrate Sinohope into your Hardhat development stack.

You can use it to deploy contracts and sign transactions and messages.

### Installation

```bash
npm install @sinohope/hardhat-sinohope
```

Import the plugin in your `hardhat.config.js`:

```js
require("@sinohope/hardhat-sinohope");
const { ApiBaseUrl, ChainSymbol } = require("@sinohope/sinohope-web3-provider");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "@sinohope/hardhat-sinohope";
import { ApiBaseUrl, ChainSymbol } from "@sinohope/sinohope-web3-provider";
```

### Configuration

This plugin extends the `HttpNetworkUserConfig` object with an optional
`sinohope` field.

This is an example of how to set it:

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

### Usage
Now, you can use the network configured with the sinohope parameters normally.

```
import { ethers } from "hardhat";
const [account] = await ethers.getSigners();
console.log("Current Account Address:", account.address);
```
