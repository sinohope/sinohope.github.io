# MPC WaaS Quick Start

Based on the overall[Open Platform introduction](/docs/develop/get-started/quick-start)，this tutorial will mainly introduce the integration and use of MPC WaaS API.

This tutorial mainly involves the following matters:
- Deploy and Configure MPC Node
- Create a vault
- Create and Configure API Key
- (Optional but recommended) Configure API Callbacks
- Development integration
- Advanced Feature Introduction

### Deploy and Configure MPC Node

Sinohope uses MPC-TSS technology to provide WaaS services and adopts a threshold signature setting of 3-3. The platform holds 2 pieces of private key sharding and the user holds 1 piece of private key sharding.

Sinohope provides MPC Node software, which is deployed and run by customers to manage the sharding of private keys belonging to users. To configure MPC Node, there are mainly the following items:

1. Prepare: Open an MPC WaaS account; prepare the deployment environment, obtain and verify the MPC Node installation package；
2. Initialize the node, generate the node ID and the node public key required for deploying the callback service；
3. (On demand) Deploy and configure your callback service；
4. Bind MPC Node, log in to the web console to configure MPC Node, and bind your Node ID with your organization account；
5. Start MPC Node, the node will continue to run and automatically drive the operation of MPC protocol as needed. DKG will be completed in a moment, and then the "key share status" will be "generated" in the Web Console MPC Node management interface；
6. ❗️❗️ important: back up MPC Node local database files safely and properly！

> See the [MPC Node User Guide ](qs-2-node) section.

### Create a vault

In the WaaS service, the vault needs to be manually created in the Web console management interface, and then the wallet and on-chain address need to be created through the API.

In the "waas wallet" interface, you can complete the creation of a vault by using the "create vault" function.

In terms of the application mode of wallet and address, there are two modes for your reference. The specific mode should be determined according to your business.

1. Assign a multi-chain wallet to each of your business/end users; in this mode, the management of on-chain addresses will be more centralized, and there can be a clearer division between business/end users.
2. Only one multi-chain wallet is used to create and allocate on-chain addresses for business/end users as needed. In this mode, the final on-chain address is directly managed, which is closer to the traditional address management method.


### Create and Configure API Key

Currently, each vault needs to be independently configured, including API Key settings, callback settings, advanced function switch settings, etc.

You need to create a pair of ECDSA key pairs for WaaS API request authentication. You can create your key pair through the official Sinohope SDK or the following Java example:

```java
import org.nhex.sinohope.sign.api.ECDSA;

ECDSA ecdsa = new ECDSA(SECP256R1);
KeyPair keyPair = ecdsa.generateKeyPair();
String publicKey = Hex.toHexString(keyPair.getPublic().getEncoded());
String privateKey = Hex.toHexString(keyPair.getPrivate().getEncoded());
System.out.println("publicKey = " + publicKey);
System.out.println("privateKey = " + privateKey);
```

Among them, the private 'privateKey' is properly kept and configured by you to your business system, representing your identity, used to sign API requests; the public 'publicKey' is the API Key, which needs to be configured to your vault through the Sinohope web console management interface, so as to bind its API access permission.

> For interface request signature and verification, please refer to the “[API Authentication ](/docs/develop/get-started/general)” section for details.

### (Optional but recommended) Configure API Callbacks

In the business integration security system of MPC WaaS, there are two callback services that need to be provided by users:

1. Centralized transaction callback. After user configuration, Sinohope platform will callback the interface configured by the user when the transaction is on the chain and the user initiates a transaction, to notify the transaction on the chain and confirm the withdrawal again.
2. Decentralized MPC Node callback. Configured in the user's own MPC Node, after configuring the MPC Node callback, the MPC Node will call the callback interface before initiating the operation of the MPC protocol. Users can integrate risk control logic in the callback service. In addition, for the functions of message signing and original data source signing, the signature result will be reported to the callback service through the callback interface after the signature is completed. Please refer to the description of the MPC Node callback mechanism in the[MPC Node User Guide ](./qs-2-node.md) for details.

For centralized transaction callbacks, they need to be configured through the "API callback" function under the vault in the web console. The callback request will use the same API authentication mechanism as the waas interface.

In the "API callback" interface, Sinohope's callback request public key will be displayed. When initiating a callback request, Sinohope will sign with the private key. The callback service should use the public key provided by Sinohope for signature verification to ensure that the request comes from Sinohope and the parameters have not been tampered with. At the same time, it is recommended that the callback service set Sinohope's IP address to the allowlist of the request source, and only allow IPs in the allowlist to access your callback service to enhance security.

API callback, if the response is not successfully obtained, there will be a retry. The retry rules are as follows:

- First retry: 1 minute after the last callback
- Second retry: 2 min interval
- Third retry: 4 min interval
- 4th Retry: 8 min interval
- 5th retry: 20 minutes interval
- The 6th retry: interval of 30 minutes
- The 7th retry: interval of 60 minutes
- The 8th and last retry: interval of 2 hours
- Maximum number of retries 20 times
- If the maximum number of retries is still unsuccessful, the user can manually re-initiate a callback for a specific transaction in the web console management interface.

An example of a callback service can be found in the`golang`directory in the[sinohope-waas-code-demo](https://github.com/sinohope/sinohope-waas-code-demo)

### Development integration

Sinohope will provide SDKs in multiple languages to facilitate developers' integration of WaaS functions. The SDK mainly provides the following functions:

- Unified encapsulation of interface requests signature processing.
- Encapsulate API interfaces to facilitate developers to complete requests to WaaS APIs through method calls.

Currently provided SDKs:[java sdk](https://github.com/sinohope/sinohope-java-api)，[golang sdk](https://github.com/sinohope/golang-sdk)，[JS sdk](https://github.com/sinohope/js-sdk)。

For development languages that have not yet provided SDKs, developers need to carefully understand Sinohope's API certification requirements and implement interface request processing by themselves, see[API Certification ](/docs/develop/get-started/general#api-authentication)。

### Advanced Feature Introduction

Sinohope provides wallet services. For currently supported public chains, Sinohope will maintain the balance and transaction information of all addresses, especially for UTXO model public chains, which need to maintain their unspent output. Sinohope provides corresponding interfaces for users to initiate transactions, and the final transaction construction, initiation of MPC signature process, transaction broadcasting and tracking are all handled by Sinohope.

Developers integrating MPC WaaS services may also have the following requirements:

- Developers are considering supporting public chains that Sinohope does not currently support.
- For the public chains supported by Sinohope, they also want to fully manage transactions, balance, and other information themselves.

MPC WaaS provides advanced features for the above two requirements, allowing developers to only use the core functions of wallet services, such as MPC protocol implementation, sharding key management mechanism, address derivation, MPC signature, etc. On this basis, developers can manage information such as addresses, balances, transactions, and related businesses on their own.

To enable and use advanced features, follow the steps below:

- Enable advanced functions for the vault through the web console, refer to[enabling advanced functions ](/docs/use/user-guide/waas/advanced)；
- Under the vault with advanced features enabled, enable advanced features when creating a wallet, or change wallet properties to enable advanced features. Related interfaces:[Create wallet ](/docs/develop/mpc-waas-api/v-1-waas-mpc-create-wallets)，[wallet advanced function switch ](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet);
**Note: Only when both the vault and wallet have advanced features enabled, can this wallet use advanced features.**
- Make sure your MPC Node is configured with callback service, refer to the [MPC Node User Guide](qs-2-node)；
- Use the "Create address using specified path" interface to derive the public key according to the custom path and derive the address from the public key by yourself. Interface：[Create address according to specified path ](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path)；
- Construct the hash to be signed by yourself, and use the “[original data source signature](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data)”interface to initiate the signature request. After the signature is completed, the signature value will be reported through the callback interface of MPC Node.

Advanced feature integration can be achieved by following the above process.