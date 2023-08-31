---
sidebar_position: "5"
---
# ⛽ Transaction Acceleration and Cancellation

During times of blockchain network congestion, transactions can remain in a pending state and might not complete. Some cryptocurrency transactions might even be temporarily halted during network congestion. If there's a high volume of transactions waiting to be confirmed on-chain, your transaction could be delayed for hours or even days.

Pending transactions can sometimes fail due to various reasons, including low gas fees. Although Ethereum transactions cannot be outright canceled, there are steps you can take to expedite the process. SINOHOPE provides transaction acceleration and cancellation options to address such scenarios:

**Transaction Acceleration:**

Initiating a new transaction with the same "From" address, "To" address, token type, and quantity as the pending transaction can speed up the process. By default, you can adjust the Gas mode to "Fast," or even set a higher Gas value. Both transactions should use the same Nonce value, resulting in one successful transaction and the other one failing.

![](<../images/assets/image (22).png>)


**Canceling a Transaction:**

To cancel a transaction, you can initiate a new transaction with the same "From" address and "To" address, but set the amount of the token to 0. Set the Gas mode to "Fast" as well. Just like the previous methods, the cancellation transaction and the pending transaction should use the same Nonce value. This will result in one successful transaction (cancellation) and the other one failing (the pending transaction).

![](<../images/assets/image (49).png>)
