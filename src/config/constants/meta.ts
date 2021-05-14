import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'FrenchKiss Finance',
  description:
    'The most popular AMM on BSC by user count! Earn KISS through yield farming or win it in the Lottery, then stake it in Gloss Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by FrenchKiss Finance), NFTs, and more, on a platform you can trust.',
  image: 'https://frenchkiss.finance/images/easter-battle.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'FrenchKiss Finance Easter Battle',
    description: 'Register now for the FrenchKiss Finance Easter battle!',
    image: 'https://frenchkiss.finance/images/easter-battle.png',
  },
}
