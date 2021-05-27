import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kiss,
    earningToken: tokens.kiss,
    contractAddress: {
      97: '0xb8465a654ca9D74521fD1F0c950909B3dE47FD65',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '12.4',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
