import BigNumber from "bignumber.js";
import { Address } from "viem";

export type Token = {
  chainId?: number;
  logoURI?: string;
  tags?: string[];
  address: Address;
  decimals: number;
  symbol: string;
  name: string;
  default?: boolean;
  balance?: bigint;
  formattedBalance?: string;
};

export interface SwapRequest {
  tokenIn: Address;
  tokenOut: Address;
  tokenInDecimals: number;
  tokenOutDecimals: number;
  amount: string;
}

export interface AddLiquidityRequest {
  slippage: number;
  poolPrice: number;
  baseToken: Token;
  quoteToken: Token;
  isAmountBaseDenominated: boolean;
  baseAmount: bigint;
  quoteAmount: bigint;
  poolIdx: number;
}

export interface WithdrawLiquidityRequest {
  slippage: number;
  poolPrice: number;
  baseToken: Token;
  quoteToken: Token;
  poolIdx: number;
  percentRemoval: number;
  seeds: string;
}

export interface PoolV2 {
  id: string;
  base: Address;
  quote: Address;
  baseInfo: Token;
  quoteInfo: Token;
  timeCreate: number;
  poolIdx: number;
  poolName: string;
  tokens: Token[];
  tvlUsd: number;
  volumeUsd: number;
  feeRate: number;
  feesUsd: number;
  baseFees: number;
  quoteFees: number;
  baseVolume: number;
  quoteVolume: number;
  baseTokens: string;
  quoteTokens: string;
  volume24h: number;
  fees24h: number;
  baseTokenHoneyTvl: number;
  quoteTokenHoneyTvl: number;
  totalApy: number;
  bgtApy: number;
  shareAddress: string;
}

export interface IUserPosition {
  baseAmount: BigNumber;
  quoteAmount: BigNumber;
  formattedBaseAmount: string;
  formattedQuoteAmount: string;
  estimatedHoneyValue: number;
  seeds: bigint;
}

export interface ISwaps {
  user: string;
  baseFlow: string;
  quoteFlow: string;
  swapIn: Token;
  swapOut: Token;
  swapInAmount: number;
  swapOutAmount: number;
  transactionHash: string;
  time: number;
  estimatedHoneyValue?: number;
  baseAssetHoneyPrice: string;
  quoteAssetHoneyPrice: string;
}

export interface IProvisions {
  user: string;
  baseFlow: number;
  quoteFlow: number;
  changeType: "mint" | "burn";
  transactionHash: string;
  time: number;
  estimatedHoneyValue?: number;
  baseAssetHoneyPrice: string;
  quoteAssetHoneyPrice: string;
}