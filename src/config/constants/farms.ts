import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'KISS',
    lpAddresses: {
      97: '0x10A3f8EEcA50d62D1A78d48DA0353592507975D3',
      56: '0x3b44b0cFe3a290906F3C6479df56457db9d7cd59',
    },
    token: tokens.gloss,
    quoteToken: tokens.wbnb,
  },
]

export default farms
