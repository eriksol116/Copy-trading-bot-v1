import { Commitment } from "@solana/web3.js";
import { logger, retrieveEnvVariable } from "../utils";

export const PRIVATE_KEY = retrieveEnvVariable('PRIVATE_KEY', logger);
export const TARGET_ADDRESS = retrieveEnvVariable('TARGET_ADDRESS', logger);

export const NETWORK = 'mainnet-beta';
export const COMMITMENT_LEVEL: Commitment = retrieveEnvVariable('COMMITMENT_LEVEL', logger) as Commitment;
export const GRPC_ENDPOINT = retrieveEnvVariable('GRPC_ENDPOINT', logger);
export const RPC_ENDPOINT = retrieveEnvVariable('RPC_ENDPOINT', logger);
export const RPC_WEBSOCKET_ENDPOINT = retrieveEnvVariable('RPC_WEBSOCKET_ENDPOINT', logger);
export const PUMPFUN_PROGRAM_ID = retrieveEnvVariable('PUMPFUN_PROGRAM_ID', logger);
export const RARDIUM_PROGRAM_ID = retrieveEnvVariable('RARDIUM_PROGRAM_ID', logger);
export const SOL_MINT = retrieveEnvVariable('SOL_MINT', logger);
export const LOG_LEVEL = retrieveEnvVariable('LOG_LEVEL', logger);
export const QUOTE_MINT = retrieveEnvVariable('QUOTE_MINT', logger);
export const QUOTE_AMOUNT = retrieveEnvVariable('QUOTE_AMOUNT', logger);
export const LILJITO_RPC_ENDPOINT = retrieveEnvVariable('LILJITO_RPC_ENDPOINT', logger);
export const SOL_DECIMAL = Number(retrieveEnvVariable('SOL_DECIMAL', logger))
export const SET_COMPUTE_UNITPRICE = Number(retrieveEnvVariable('SET_COMPUTE_UNITPRICE', logger))
export const SET_COMPUTE_UNIT_LIMIT = Number(retrieveEnvVariable('SET_COMPUTE_UNIT_LIMIT', logger))
export const SLIPPAGE = Number(retrieveEnvVariable('SLIPPAGE', logger))
export const BUY_LIMIT = Number(retrieveEnvVariable('BUY_LIMIT', logger))
export const SELL_PERCENT = Number(retrieveEnvVariable('SELL_PERCENT', logger))
// export const TAKE_PROFIT = Number(retrieveEnvVariable('TAKE_PROFIT', logger))
// export const STOP_LOSS = Number(retrieveEnvVariable('STOP_LOSS', logger))
// export const SKIP_SELLING_IF_LOST_MORE_THAN = Number(retrieveEnvVariable('SKIP_SELLING_IF_LOST_MORE_THAN', logger))
// export const MAX_SELL_RETRIES = Number(retrieveEnvVariable('MAX_SELL_RETRIES', logger))
// export const PRICE_CHECK_INTERVAL = Number(retrieveEnvVariable('PRICE_CHECK_INTERVAL', logger))
// export const PRICE_CHECK_DURATION = Number(retrieveEnvVariable('PRICE_CHECK_DURATION', logger))