import React from 'react'
import { Menu as UikitMenu } from '@frenchkiss-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePriceKissBusd } from 'state/hooks'
import config from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const kissPriceUsd = usePriceKissBusd()

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang="EN"
      kissPriceUsd={kissPriceUsd.toNumber()}
      links={config}
      {...props}
    />
  )
}

export default Menu
