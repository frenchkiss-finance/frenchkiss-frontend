const tokens = {
  bnb: {
    symbol: 'BNB',
    projectLink: 'https://www.binance.com/',
  },
  kiss: {
    symbol: 'KISS',
    address: {
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      97: '0x10A3f8EEcA50d62D1A78d48DA0353592507975D3',
    },
    decimals: 18,
    projectLink: 'https://frenchkiss.finance/',
  },
  wbnb: {
    symbol: 'wBNB',
    address: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    },
    decimals: 18,
    projectLink: 'https://frenchkiss.finance/',
  },
  twt: {
    symbol: 'TWT',
    address: {
      56: '0x4b0f1812e5df2a09796481ff14017e6005508003',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://trustwallet.com/',
  },
  sushi: {
    symbol: 'SUSHI',
    address: {
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://sushi.com/',
  },
  comp: {
    symbol: 'COMP',
    address: {
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://compound.finance/',
  },
  gloss: {
    symbol: 'GLOSS',
    address: {
      56: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
      97: '0x9CF0fe6347F8a149172b80807d5D3bf12747DFa1',
    },
    decimals: 18,
    projectLink: 'https://frenchkiss.finance/',
  },
  busd: {
    symbol: 'BUSD',
    address: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.paxos.com/busd/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/',
  },
  beth: {
    symbol: 'BETH',
    address: {
      56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://ethereum.org/en/eth2/beacon-chain/',
  },
  ltc: {
    symbol: 'LTC',
    address: {
      56: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://litecoin.org/',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.centre.io/usdc',
  },
  dai: {
    symbol: 'DAI',
    address: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      97: '',
    },
    decimals: 18,
    projectLink: 'https://www.makerdao.com/',
  },
  ada: {
    symbol: 'ADA',
    address: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.cardano.org/',
  },
  dot: {
    symbol: 'DOT',
    address: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://polkadot.network/',
  },
  eos: {
    symbol: 'EOS',
    address: {
      56: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://eos.io/',
  },
  link: {
    symbol: 'LINK',
    address: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://chain.link/',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    decimals: 18,
    projectLink: 'https://tether.to/',
  },
  btcb: {
    symbol: 'BTCB',
    address: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bitcoin.org/',
  },
  xrp: {
    symbol: 'XRP',
    address: {
      56: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://ripple.com/xrp/',
  },
  atom: {
    symbol: 'ATOM',
    address: {
      56: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://cosmos.network/',
  },
  yfii: {
    symbol: 'YFII',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x7f70642d88cf1c4a3a7abb072b53b929b653eda5',
    },
    decimals: 18,
    projectLink: 'https://dfi.money/#/',
  },
  xtz: {
    symbol: 'XTZ',
    address: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    },
    decimals: 18,
    projectLink: 'https://www.tezos.com/',
  },
  bch: {
    symbol: 'BCH',
    address: {
      56: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://bch.info/',
  },
  yfi: {
    symbol: 'YFI',
    address: {
      56: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://yearn.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://uniswap.org/',
  },
  fil: {
    symbol: 'FIL',
    address: {
      56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://filecoin.io/',
  },
  bake: {
    symbol: 'BAKE',
    address: {
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    decimals: 18,
    projectLink: 'https://www.bakeryswap.org/',
  },
  tlm: {
    symbol: 'TLM',
    address: {
      56: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
      97: '',
    },
    decimals: 4,
    projectLink: 'https://alienworlds.io/',
  },
}

export default tokens
