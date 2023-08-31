---
sidebar_position: "5"
---
# ⛽ 加速及取消交易

### **加速交易**

当区块链网络拥堵时，可能会出现交易一直处于Pending状态无法完成的情形，某些加密货币交易可能会在网络拥塞期间停止。如果上链交易量太大，您的交易可能会被搁置数小时甚至数天。

由于未决的交易失败或较低的矿工费（Gas 费），有时会自行解决阻塞。虽然您实际上无法取消以太坊交易，但您可以采取一些措施来加快该过程。Sinohope提供了加速交易和取消交易来应对这种缺口：



（1）加速交易。将发起一笔新的交易，From地址、To地址，转账币种和数量与之前的交易一致，默认把Gas模式调整为快速模式，也可以自定义设置更高的Gas值，两笔交易使用相同的Nonce值，一笔成功另一笔一定失败。

![](<../images/assets/image (16).png>)



（2）取消交易。将发起一笔新的交易，rom地址、To地址，转账币种的数量调整为0，默认把Gas模式调整为快速模式。同样地，取消交易和之前的交易，两笔交易使用相同的Nonce值，一笔成功另一笔一定失败。

![](<../images/assets/image (43).png>)