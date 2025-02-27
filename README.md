# 🚀Copy Trading Bot-V3.0-Multi-Dex

You can monitor target wallet and copy trade automatically using this bot.

Copy Trading Bot v3.0 is a multi-DEX automated trading bot built for the Solana blockchain. The bot allows users to copy trades from target wallets, execute transactions efficiently using MEV protection, and integrate with multiple decentralized exchanges (DEXs) like Pump.fun and Raydium.
This bot use GRPC to fetch the target wallet's transactions.

## Features

- Multi-DEX Support: Compatible with various DEX platforms, including Pump.fun and Raydium.

- Copy Trading: Automatically replicates trades from a target address.

- MEV Protection: Uses Jito block engine for front-running protection.

- Customizable Trading Settings: Supports slippage control, retry mechanisms, and fee optimization.

- Efficient Transaction Execution: Leverages Jito and custom compute unit settings for optimal gas fees.

- Cross-Platform Compatibility: Works on both Windows and Linux.


## Video



https://github.com/user-attachments/assets/8fb518af-b54b-4bd6-a50a-cb206ff041a8




## Transactions

- Fetch the target wallet transaction

![copy-trading-bot-catch-target-wallet-transaction](https://github.com/user-attachments/assets/700cfd4e-847f-4ce7-bc20-6bf15fb4b00a)

- Target Wallet's Buy

[https://solscan.io/tx/5tebXLW6pt1gtVwz2bsGMqE38hGhaJnpYykLhgVEt46QcRPqRo9MYdHazVaGkxSxQdBPKYF4SnMr6eETumtPoFCZ](https://solscan.io/tx/5tebXLW6pt1gtVwz2bsGMqE38hGhaJnpYykLhgVEt46QcRPqRo9MYdHazVaGkxSxQdBPKYF4SnMr6eETumtPoFCZ)

![copy-trading-buy-target](https://github.com/user-attachments/assets/16399c3a-1cf3-4e22-a504-8bfb88c80eef)

- My Wallet's copy Buy Trading

[https://solscan.io/tx/4hdT1DcMnfqgf3x4F4KvtuP3NFAQHzH7h7sAJhdZx87uJPtvoYCoJ6nZk27pAYNYWZ7NF2m5xwssCc5JASPgi4dR](https://solscan.io/tx/4hdT1DcMnfqgf3x4F4KvtuP3NFAQHzH7h7sAJhdZx87uJPtvoYCoJ6nZk27pAYNYWZ7NF2m5xwssCc5JASPgi4dR)

![copy-trading-buy-wallet](https://github.com/user-attachments/assets/cff2d2a8-0f6b-4640-ac5e-a98ea7fc8c81)

- Target Wallet's Sell

[https://solscan.io/tx/eETkb2ZyN1A5YKedGkSwcufVw8UznmH374NpR3R9ywQN6jG5BdzoVMK63ZFm9Hs6jQATr2sYpcDmpAAJaNajfmu](https://solscan.io/tx/eETkb2ZyN1A5YKedGkSwcufVw8UznmH374NpR3R9ywQN6jG5BdzoVMK63ZFm9Hs6jQATr2sYpcDmpAAJaNajfmu)


![copy-trading-sell-target](https://github.com/user-attachments/assets/f9f21362-afe8-4fc0-89d4-7767bcfc1d21)


- My Wallet's copy Sell Trading


[https://solscan.io/tx/3bcpUucuraFsDVm3RFbGuL6AmWc67k37yk315jvxDCDcME1LE6Q4i1wyNT6CuN56W9tSTuj13cuNL7PcJUehZ7BF](https://solscan.io/tx/3bcpUucuraFsDVm3RFbGuL6AmWc67k37yk315jvxDCDcME1LE6Q4i1wyNT6CuN56W9tSTuj13cuNL7PcJUehZ7BF)


![copy-trading-sell-wallet](https://github.com/user-attachments/assets/3fa6a233-6c92-4fdb-8cd5-7a9bf5f17bd1)



## 💬Contact Me

If you have any question or something, feel free to reach out me anytime via telegram, discord or twitter.
<br>

Discord: @erikerik116 <br>

Telegram: @erikerik116 <br>

twitter: @erikerikerik116 <br>










## 👀Usage
1. Clone the repository

    ```
    git clone https://github.com/eriksol116/Copy-trading-bot-v3-multi-Dex.git
    cd Copy-trading-bot-v3-multi-Dex
    ```
2. Install dependencies

    ```
    npm install
    ```
3. Configure the environment variables

    Rename the .env.example file to .env and set RPC and WSS, main keypair's secret key, and others.

4. Run the bot

    ```
    npm start
    ```


## .env Configuration

PRIVATE_KEY=

TARGET_ADDRESS=

RPC_URL=https://mainnet.helius-rpc.com/?api-key=

RPC_ENDPOINT=https://mainnet.helius-rpc.com/?api-key=

RPC_WEBSOCKET_ENDPOINT=ws://mainnet.helius-rpc.com/?api-key=

SEND_RPC_ENDPOINT=https://mainnet.helius-rpc.com/?api-key=

GRPC_ENDPOINT=http://grpc.solanavibestation.com:10000

# Fee settings

SET_COMPUTE_UNITPRICE=100000

SET_COMPUTE_UNIT_LIMIT=60000

JITO_FEE=0.0001

BLOCK_ENGINE_URL=ny.mainnet.block-engine.jito.wtf

IS_JITO=true

JITO_FEE=0.0001

IS_REBUY=true

PUMPFUN_PROGRAM_ID=6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P

RAYDIUM_PROGRAM_ID=675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8

QUOTE_MINT=WSOL

SOL_MINT=So11111111111111111111111111111111111111112

SOL_DECIMAL=9

SLIPPAGE=10

MAX_RETRY=10

LOG_LEVEL=info

COMMITMENT_LEVEL=processed

QUOTE_AMOUNT=0.0007

AMOUNT_TO_WSOL=0.0007

This is finish version bot. But it's MVP code. If u need perfect code, contact me.

# Limit settings
BUY_LIMIT=0.0001
SELL_PERCENT=100

