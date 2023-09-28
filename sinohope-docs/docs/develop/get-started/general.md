---
sidebar_position: 2
---
# General

## Terminology
### sinoId

For businesses involving MPC private key shares, including developer-requested transactions and signature-related operations (such as initiating transactions, initiating signatures, etc.), Sinohope will generate a unique identifier for each business, called sinoId.

### requestId 

For requests that need to implement idempotency (such as initiating a transfer), the requester needs to provide a unique identifier for the API request, called `requestId`. The requestId should be globally unique and ensure that the same requestId is used for multiple submissions of the same business request. **The maximum allowed length is 120 ASCII characters.**
It is recommended to use UUID or snowflake algorithm to generate a requestId.

### Rules for chainSymbol

1. chainSymbol is the unique identifier for a blockchain;
2. Distinguish between testnets and mainnets; 
3. Use uppercase letters for naming.

> For example:
> - Mainnets use common abbreviations, such as `ETH`, `BTC` for `Ethereum Mainnet`/`Bitcoin Mainnet` respectively
> - For testnets with specific names, use their testnet names, such as `GOERLI` for `ETH Goerli Testnet`  
> - For testnets without specific names, use `_TEST` to distinguish, such as `BTC_TEST` for `Bitcoin testnet3 Testnet`
> - Note: The chains supported by the system are subject to the `/v1/waas/common/get_supported_chains` interface

### Rules for assetId

1. assetId is the unique identifier for a asset;
2. Named as coin first then chain, separated by underscores; 
3. Use uppercase letters.

> For example: `USDT_GOERLI` represents the USDT coin on the ETH Goerli testnet

# API Signature

## API Authentication

To strengthen API security, Sinohope requires developers to sign API requests with elliptic curve signatures. Sinohope API servers will verify the validity of requests and signatures.

**If you do not use the SDK provided by Sinohope, or if there is no SDK available for the programming language you want to use, you will need to construct the interface request yourself. In this case, you will need to understand the implementation details of Sinohope API authentication. If you use the SDK for integration development, you can skip this section!**

Notes:
1. Sinohope POST interfaces only support JSON data format.


### Request Headers

- `BIZ-API-KEY`: Your public key string
- `BIZ-API-SIGNATURE`: Data signature string, HEX encoded string of the byte array formatted according to `ASN.1 DER` after ECDSA signature 
- `BIZ-API-NONCE`: timestamp involved in the composition of signed data

Sinohope will verify your request validity by verifying your signature based on the above request headers and your request data.


### Signature Construction


Data to be signed:

| key | value |
| --- | --- |  
| data | String value composed of request parameters, see `DATA` section below for details |
| path | `PATH` part of the request URL, see `PATH` section below for details |
| timestamp | API access UNIX EPOCH timestamp (accurate to milliseconds), see `TIMESTAMP` section below for details | 
| version | Fixed value `1.0.0`, see `VERSION` section below for details |
| "" (empty string) | Public key string, see `PUBLICKEY` section below for details |

String concatenation rules:

Sort the above key-value pairs in ascending order of the alphabet of the keys, then directly concatenate all `key` `value` (no delimiter between them, with the public key string having no key field) to form the final string to be signed, **encode the string to be signed as a byte array in UTF8**, and then use the private key (privateKey) generated locally to perform ECDSA signature on the data (the specific algorithm is `SHA256withECDSA`), output the signature using `ASN.1 DER` format, and then encode the byte array to a HEX string, then you will get the final signature string (see Sinohope demo: <https://github.com/sinohope/sinohope-java-api>).

**Note**: In the concatenated string, the string corresponding to key is essential. For interfaces without request parameters, the concatenated string will start with the string `datapath`.

See the following sections for detailed explanations of each part of the data.

### Explanations of Each Part of Data
#### DATA

* For `GET` request:
```html 
https://api.develop.sinohope.com/v1/test?key=key&value=value
```

First sort the parameters by key alphabetically, then url encode them, i.e.:

```
key=key
value=value
```
Since k comes before v alphabetically, key should be placed before value, then connect them with &, i.e.: `key=key&value=value`

* For `POST` request:
```java
{
  "key": "key",
  "value": "value"
}
```
Treat the entire body parameter as a String.

For interfaces without request parameters, no request body should be provided, so the concatenated string will only have `data`, followed immediately by `path`.

#### PATH
The PATH part of the request URL, e.g. `/v1/test/` for https://api.develop.sinohope.com/v1/test/

#### TIMESTAMP
UNIX EPOCH timestamp (accurate to milliseconds) when accessing API  

#### VERSION
Fixed value `1.0.0`

#### PUBLICKEY
Your locally acquired public key, HEX encoded string after serializing to bytes array according to `X.509` format.

Java code example for generating public and private keys: <https://github.com/sinohope/sinohope-java-api#generate-key-pair>


### Request Example

This example uses the following key pair:

- publicKey: `3056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d`
- privateKey: `30818d020100301006072a8648ce3d020106052b8104000a04763074020101042049888755bcb8bead7efd451426692cebd00c2aba9fad62a6f753343085a7c060a00706052b8104000aa14403420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d`

#### GET Request:
| Method | URL |
| :--- | :--- |
| GET | https://api.develop.sinohope.com/v1/test?key=key&value=value |

Parameters:

| Parameter | Value |
| :--- | :--- |
| key | key |
| value | value |

Assuming timestamp is `1692614885094`, data to be signed is:
```html
datakey=key&value=valuepath/v1/testtimestamp1692614885094version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d
```

Signing the above data with the example private key, one possible result is: 
```text
304402205db4c34ade2295f81bc2aa1be535a75cf4557dd9ad079d6804f2bc06c06c94ff0220380b75060f7a1abac6625a99cb684aaecc3135f99fc97333d1f99bccad6724d4
```

The above signature result should be verifiable as "valid" using the example public key and data to be signed.

#### POST Request:
| Method | URL |
| :--- | :--- |
| POST | https://api.develop.sinohope.com/v1/test |

Parameters: 
```html
{
  "key": "key",
  "value": "value"
} 
```
Assuming timestamp is `1692614885153`, data to be signed is:
```html  
data{"key":"key","value":"value"}path/v1/testtimestamp1692614885153version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d
```

Signing the above data with the example private key, one possible result is:
```text
30440220439fb1cb1860d7621ab37db48a7c29ee488c182c7bddd25276b2bc97a35560190220764a04dee91b1d9fcf784c5ae24ab0c19443b2823adfa4ef06e0b63ed4563cf9
```

The above signature result should be verifiable as "valid" using the example public key and data to be signed.

#### Example of data to be signed for a POST request without request parameters


```text
datapath/v1/waas/common/get_vaultstimestamp1692614885153version1.0.03056301006072a8648ce3d020106052b8104000a03420004d8caf9385ee3f28df77eab42a0da4b8dc9462a8ad39dbb224c2802cc377df9dc09ac23d04748b40c2897d91bbd7fe859476c6f6fe9b2aa82607e8a48f9b7ac0d
```

### Additional Information
#### Development Utils Kids

For some development languages that SDKs have not been provided yet, Sinohope also offers some code snippets and examples for key generation, signing and signature verification. You can check the github repository [sinohope-waas-code-demo](https://github.com/sinohope/sinohope-waas-code-demo) for details. 

Under the `golang` directory, it provides a sample service which can be used as a callback sample service and also for interface request signature debugging.

#### Signature Algorithm
Sinohope uses the ECDSA signature scheme based on the P-256 curve (also known as prime256v1 or secp256r1) and SHA256withECDSA algorithm for verification, see the demo above. If you encounter any problems during operation, please contact Sinohope staff at bd@newhuotech.com to assist you in troubleshooting and resolving them together.