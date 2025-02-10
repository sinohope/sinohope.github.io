---
sidebar_position: "2"
---
# MPC WaaS Quick Start

### This tutorial primarily covers the following topics:
- Deploy and Configure MPC Node
- Advanced Feature Introduction

### Deploy and Configure MPC Node

Sinohope uses MPC-TSS technology to provide WaaS services and adopts a threshold signature setting of 3-3. The platform holds 2 pieces of private key sharding and the user holds 1 piece of private key sharding.

Sinohope provides MPC Node software, which is deployed and run by customers to manage the sharding of private keys belonging to users. To configure MPC Node, there are mainly the following items:

1. Prepare: Open an MPC WaaS account; prepare the deployment environment, obtain and verify the MPC Node installation package；
2. Initialize the node, generate the node ID and the node public key required for deploying the callback service；
3. (On demand) Deploy and configure your callback service；
4. Bind MPC Node, log in to the web console to configure MPC Node, and bind your Node ID with your organization account；
5. Start MPC Node, the node will continue to run and automatically drive the operation of MPC protocol as needed. DKG will be completed in a moment, and then the "key share status" will be "generated" in the Web Console MPC Node management interface；
6. ❗️❗️important: back up MPC Node local database files safely and properly！

> See the [MPC Node User Guide](ws-1-node) section.

### Advanced Feature Introduction

Sinohope provides wallet services. For currently supported public chains, Sinohope will maintain the balance and transaction information of all addresses, especially for UTXO model public chains, which need to maintain their unspent output. Sinohope provides corresponding interfaces for users to initiate transactions, and the final transaction construction, initiation of MPC signature process, transaction broadcasting and tracking are all handled by Sinohope.

Developers integrating MPC WaaS services may also have the following requirements:

- Developers are considering supporting public chains that Sinohope does not currently support.
- For the public chains supported by Sinohope, they also want to fully manage transactions, balance, and other information themselves.

MPC WaaS provides advanced features for the above two requirements, allowing developers to only use the core functions of wallet services, such as MPC protocol implementation, sharding key management mechanism, address derivation, MPC signature, etc. On this basis, developers can manage information such as addresses, balances, transactions, and related businesses on their own.

To enable and use advanced features, follow the steps below:

1. Enable advanced functions for the vault through the web console, refer to [enabling advanced functions](/docs/use/user-guide/waas/advanced)；
2. Under the vault with advanced features enabled, enable advanced features when creating a wallet, or change wallet properties to enable advanced features. Related interfaces：[Create wallet](/docs/develop/mpc-waas-api/v-1-waas-mpc-create-wallets)，[wallet advanced function switch](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet)；
   **Note: Only when both the vault and wallet have advanced features enabled, can this wallet use advanced features.**
3. Make sure your MPC Node is configured with callback service, refer to the [MPC Node User Guide](ws-1-node)；
4. Use the "Create address using specified path" interface to derive the public key according to the custom path and derive the address from the public key by yourself. Interface：[Create address according to specified path](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path)；
5. Construct the hash to be signed by yourself, and use the“[original data source signature](/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data)”interface to initiate the signature request. After the signature is completed, the signature value will be reported through the callback interface of MPC Node.

Advanced feature integration can be achieved by following the above process.