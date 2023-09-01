---
sidebar_position: "5"
---
# 🔧 FAQ

1.What is an MPC Wallet?&#x20;

An MPC Wallet is built upon Multi-Party Computation (MPC) technology, enabling secure self-custody of digital assets. Compared to traditional centralized custodial digital wallets, an MPC Wallet offers heightened security, reliability, and gives users complete control over their private keys. The cryptographic solution adopted for MPC self-custody involves utilizing MPC-TSS technology (Threshold Signature Scheme based on Multi-Party Computation). This novel approach manages and uses blockchain account private keys. In the realm of blockchain, the private key is paramount, and traditional account private keys are singular, sensitive data prone to single-point failures. Leveraging MPC-TSS technology, private keys can be fragmented and held by multiple parties, enabling transaction signatures through multi-party signing protocols. The complete private key need not exist entirely in any one place at any given time.

2.How does Self-custody ensure security?&#x20;

Self-custody refers to users independently managing their digital wallets and safeguarding their private keys, instead of entrusting them to third parties. SINOHOPE employs Multi-Party Computation (MPC) technology, allowing secure management and transactions of digital assets without exposing the private key. We've chosen the 3-3 multi-signature scheme (also supporting t-n threshold signature settings), wherein the customer holds one private key shard, New Fire holds two private key shards (SGX + cloud storage), and all three parties collaboratively participate to complete the transaction signature. (Since only the user's shard can initiate transactions, the platform's two shards only perform verification signatures, ensuring the platform cannot access assets).&#x20;

Under this model, a complete private key is never centralized on a single device at any time, eliminating mnemonic phrases and defending against hacker attacks. Should one shard be lost, wallet recovery can swiftly occur through other shards. This empowers users with full asset management control while resolving trust concerns of asset co-management. Moreover, we employ multi-layer encrypted shard backups. In extreme situations, users can offline-export and recover the complete private key, mitigating risks of loss, leakage, attacks, or internal malevolence.

3.What if I forget my wallet password?&#x20;

If you forget your wallet password, you can reset it by uninstalling and reinstalling the app, then applying for a new device login through the organization creator.

4.What if I forget my recovery key?

Organization creators (Owners) and administrators (Admins) mutually back up. If an admin forgets or loses the recovery key, the organization creator can delete the admin, then re-invite them to join the organization.

If the organization creator forgets or loses the recovery key, they need to contact SINOHOPE customer service, provide verification information, and temporarily elevate one of the administrators to the organization creator role. The previous organization creator will be adjusted to an admin, and the new organization creator can delete the admin, re-invite them, and then elevate them to organization creator.

Note: To prevent single-point recovery key loss, please promptly invite organization administrators after creating the organization. If the organization lacks administrators and the recovery key is lost or forgotten, SINOHOPE cannot retrieve the recovery key.

5.What if organization creation takes a long time?&#x20;

Creating an organization typically takes 5-10 seconds. If you encounter extended wait times during organization creation, it's often due to network congestion or technical issues. If switching networks doesn't resolve the issue, consider contacting SINOHOPE for assistance.

6.What if organization creation fails?&#x20;

If you face difficulties while creating an organization, it could be due to incorrect provided information or technical issues. In such cases, reach out to SINOHOPE for technical support team for assistance, ensuring accurate information is supplied.

7.What if GA (Authenticator) is lost?&#x20;

If your phone is lost during use, or if the Authenticator is unintentionally deleted, contact SINOHOPE to reset the GA verification code.

8.What if I can't log into the organization after deleting the app?&#x20;

Since devices and the app are linked, after deleting the app or switching to a new device, you'll need to apply for new device login through your organization's superior. The superior will receive a message in the message center about the new device login. Once approved by the superior, you can rejoin the organization.

