---
sidebar_position: "1"
---
# Open API Quick Start

Based on the overall [Open Platform introduction](/docs/develop/get-started/quick-start)，this tutorial will mainly introduce the integration and use of Open API.
This tutorial mainly involves the following matters:

- Open API operating mechanism
- Create a vault
- Create and Configure API Key
- Configure API Callbacks (Optional but recommended)
- Development integration

### Open API operating mechanism

The Open API can be used to integrate wallet capabilities from self-custody and WaaS services into your application. Each API Key can manage multiple vaults for both self-custody and WaaS, depending on the vault permissions assigned to that API Key.

You can refer to the table below to select the wallet type that best suits your business needs.

|                | Waas Open API                 | Self-Custody Open API                  |
|:---------------|:------------------------------|:-----------------------------|
| Deployment Integration           | MPC node deployment is required             | No need for additional MPC node deployment, just install the mobile app           |
| Workflow          | Only supported on the web console                         | Only supported on the app                        |
| Private Key Management           | Private key shards are stored in the node's database; developers must back up the database file.  | Private key shards are stored in the user’s phone’s secure area; backups are done via Owner & Admin.             |
| Interface           | Supports full interfaces, refer to each API's supported features. | Supports limited interfaces, refer to each API's supported features. |
| Auto Sweeping & Gas Station       | Supported            | Not supported                          |

### Create a vault

A vault needs to be manually created on the Web console.  
In the "Self-custody Wallet" and "WaaS Wallet" interfaces, the vault can be created using the "Create Vault" feature.

### Create and Configure API Key

First of all, you need to create a pair of ECDSA key pairs for Open API request authentication. You can create your key pair through the official Sinohope SDK or the following Java example:
```java
import org.nhex.sinohope.sign.api.ECDSA;

ECDSA ecdsa = new ECDSA(SECP256R1);
KeyPair keyPair = ecdsa.generateKeyPair();
String publicKey = Hex.toHexString(keyPair.getPublic().getEncoded());
String privateKey = Hex.toHexString(keyPair.getPrivate().getEncoded());
System.out.println("publicKey = " + publicKey);
System.out.println("privateKey = " + privateKey);
```

Among them, the private `privateKey` is properly kept and configured by you to your business system, representing your identity, used to sign API requests; the public `publicKey` is the API Key, which needs to be configured to your vault through the Sinohope web console management interface, so as to bind its API access permission.

>  For interface request signature and verification, please refer to the [API Authentication](/docs/develop/get-started/general) section for details.

After you submit the creation of a new API Key, it needs to be approved by the Global Policy Approvers of your current organization before it can take effect. The setting of the global approver can be viewed in Web - Settings - Rules Engine - Global Policies.

### (Optional but recommended) Configure API Callbacks

In the security system of MPC business integration, there are two callback services that require user provision:

1. Centralized transaction callback.
    - Callback content:
   
   |        | Self-Custody | WaaS  |
   |:-------|:----|:------|
   | Transaction on-chain notification | Supported  | Supported    |
   | Withdrawal  confirmation | Not supported | Supported.<br/>When a user initiates a withdrawal request to the WaaS vault via API, after the request passes workflow approval, a confirmation request will be sent to the "withdrawal secondary confirmation" callback address set by the user. Only after confirmation can the transaction proceed to the signing process. |

   - Configuration entry: Configured through the "web-settings-OpenAPI-API callback" feature.
   - Callback requests will use the same API authentication mechanism as the Open API interface. On the "API callback" interface, the public key for Sinohope's callback request will be displayed; when initiating a callback request, Sinohope will sign with a private key, and the callback service should use the public key provided by Sinohope for verification to ensure the request comes from Sinohope and the parameters have not been tampered with. It is also recommended that the callback service sets Sinohope's IP address as a whitelist for request origin and only allows access to your callback service from IPs within the whitelist, thereby enhancing security.
   - Retry mechanism: In case of unsuccessful response acquisition, there will be retries, with a maximum of 20 retries. The retry rules are as follows:
     - 1st retry: 1 min after the last callback
     - 2nd retry: 2 min interval
     - 3rd retry: 4 min interval
     - 4th retry: 8 min interval
     - 5th retry: 20 min interval
     - 6th retry: 30 min interval
     - 7th retry: 60 min interval
     - 8th and subsequent retries: 2 h interval
     - In case of callback failure, users can manually re-initiate a round of callbacks for specific transactions on the web console management interface.

2. Decentralized MPC Node callback (only supports WaaS API)
   - Callback content:
       - Signature confirmation for regular transfers and transactions
       - When a user initiates a request for "signing messages according to known specifications(EIP-191, EIP-712)" or for "signing raw data", after the signature is completed, the signature result will be reported to the callback service through the callback interface. For details, see the MPC Node User Guide for explanations related to the MPC Node callback mechanism.
   - Configuration entry: Configured in the Config file of the MPC Node
   - After configuring the MPC Node callback, the MPC Node will call the callback interface before initiating the MPC protocol operation, allowing users to integrate risk control logic within the callback service.
3. An example of a callback service can be found in thegolangdirectory in the sinohope-waas-code-demo

### Development integration

Sinohope will provide SDKs in multiple languages to facilitate developers' integration of Open API functions. The SDK mainly provides the following functions:

- Unified encapsulation of interface requests signature processing.
- Encapsulate API interfaces to facilitate developers to complete requests to WaaS APIs through method calls.

Currently provided SDKs：[java sdk](https://github.com/sinohope/sinohope-java-api)，[golang sdk](https://github.com/sinohope/golang-sdk)，[JS sdk](https://github.com/sinohope/js-sdk)。

For development languages that have not yet provided SDKs, developers need to carefully understand Sinohope's API certification requirements and implement interface request processing by themselves, see[API Certification](/docs/develop/get-started/general#api-authentication)。
