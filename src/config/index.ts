import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// KISS_PER_BLOCK details
// 50 KISS is minted per block
// 22.5 KISS per block is sent to Burn pool (A farm just for burning kiss)
// 15.1 KISS per block goes to KISS Gloss pool
// 12.4 KISS per block goes to Yield farms and lottery
// KISS_PER_BLOCK in config/index.ts = 50 as we only change the amount sent to the burn pool which is effectively a farm.
// KISS/Block in components/KissStats.tsx = 27.5 (50 - Amount sent to burn pool)

export const KISS_PER_BLOCK = new BigNumber(50)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://frenchkiss.finance'
export const BASE_EXCHANGE_URL = 'https://exchange.frenchkiss.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
