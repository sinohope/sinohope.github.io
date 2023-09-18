---
sidebar_position: 3
---

# 系统支持的公链及币种

Sinohope将持续扩展对公链以及币种的支持，本文档所列数据不一定是最新的。对于 WaaS服务，请以 `/v1/waas/common/get_supported_chains` 和 `/v1/waas/common/get_supported_coins` 这两个接口的返回值为准。

列表最新更新日期：2023/09/18

## 正式环境支持的链及币种

公链：

|chainName|chainSymbol|
|--|--|
|Bitcoin|BTC|
|Ethereum|ETH|
|BNB Chain|BNB|
|Polygon|POLYGON|
|Tron|TRON|
|Near|NEAR|
|Avalanche|AVALANCHE|
|Arbitrum|ARBITRUM|
|Optimism|OPTIMISM|
|Filecoin|FIL|
|Cosmos|COSMOS|

币种：

|assetId |decimals|chainSymbol| contractAddress|
|--|--|--|--|
|BTC_BTC |8|BTC| |
|ETH_ETH |18|ETH| |
|USDT_ETH |6|ETH| 0xdac17f958d2ee523a2206206994597c13d831ec7|
|DAI_ETH |18|ETH| 0x6b175474e89094c44da98b954eedeac495271d0f|
|USDC_ETH |6|ETH| 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48|
|BNB_BNB |18|BNB| |
|BUSD_BNB |18|BNB| 0xe9e7cea3dedca5984780bafc599bd69add087d56|
|USDT_BNB |18|BNB| 0x55d398326f99059ff775485246999027b3197955|
|USDC_BNB |18|BNB| 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d|
|TUSD_BNB |18|BNB| 0x14016e85a25aeb13065688cafb43044c2ef86784|
|MATIC_POLYGON |18|POLYGON| |
|DAI_POLYGON |18|POLYGON| 0x8f3cf7ad23cd3cadbd9735aff958023239c6a063|
|USDT_POLYGON |6|POLYGON| 0xc2132d05d31c914a87c6611c10748aeb04b58e8f|
|USDC_POLYGON |6|POLYGON| 0x2791bca1f2de4661ed88a30c99a7a9449aa84174|
|TRX_TRON |6|TRON| |
|USDT_TRON |6|TRON| TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t|
|USDC_TRON |6|TRON| TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8|
|NEAR_NEAR |24|NEAR| |
|AVAX_AVALANCHE |18|AVALANCHE| |
|ETH_ARBITRUM |18|ARBITRUM| |
|ARB_ARBITRUM |18|ARBITRUM| 0x912ce59144191c1204e64559fe8253a0e49e6548|
|ETH_OPTIMISM |18|OPTIMISM| |
|OP_OPTIMISM |18|OPTIMISM| 0x4200000000000000000000000000000000000042|
|FIL_FIL |18|FIL| |
|ATOM_COSMOS |6|COSMOS| |

## 测试组织所支持的链及币种

测试链：

|chainName|chainSymbol|
|--|--|
|Ethereum_Test|SEPOLIA|
|Bitcoin_Test|BTC_TEST|
|BNB Chain_Test|BNB_TEST|

币种：

|assetId |decimals|chainSymbol|contractAddress|
|--|--|--|--|
|ETH_SEPOLIA |18|SEPOLIA| |
|USDT_SEPOLIA |6|SEPOLIA|aac8e15c491111a52af6c97e26dbb220ca11d73f|
|BTC_BTC_TEST |8|BTC_TEST| |
|BNB_BNB_TEST |18|BNB_TEST| |

