import { MenuEntry } from '@frenchkiss-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.frenchkiss.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.frenchkiss.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/#/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // href: '/lottery',
    // status: {
    //   text: 'WIN',
    //   color: 'warning',
    // },
  },
  {
    label: 'NFT Marketplace',
    icon: 'TicketIcon',
    href: '/#/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // href: '/lottery',
    // status: {
    //   text: 'WIN',
    //   color: 'warning',
    // },
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: '/competition',
  //   status: {
  //     text: 'CLAIM',
  //     color: 'warning',
  //   },
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    href: '/#/',
    status: {
      text: 'SOON',
      color: 'warning',
    },
    // items: [
    //   {
    //     label: 'Overview',
    //     href: 'https://info.frenchkiss.finance',
    //   },
    //   {
    //     label: 'Tokens',
    //     href: 'https://info.frenchkiss.finance/tokens',
    //   },
    //   {
    //     label: 'Pairs',
    //     href: 'https://info.frenchkiss.finance/pairs',
    //   },
    //   {
    //     label: 'Accounts',
    //     href: 'https://info.frenchkiss.finance/accounts',
    //   },
    // ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.frenchkiss.finance/contact-us',
      },
      {
        label: 'Voting',
        // href: 'https://voting.frenchkiss.finance',
        href: '/#/',
        status: {
          text: 'SOON',
          color: 'warning',
        },
      },
      {
        label: 'Github',
        href: 'https://github.com/frenchkiss-finance',
      },
      {
        label: 'Docs',
        href: 'https://docs.frenchkiss.finance',
      },
      {
        label: 'Blog',
        href: 'https://frenchkiss-finance.medium.com',
      },
      // {
      //   label: 'Merch',
      //   href: 'https://frenchkiss.creator-spring.com/',
      // },
    ],
  },
]

export default config
