import React from 'react'
import { Text } from '@frenchkiss-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getKissAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceKissBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const KissWalletBalance = () => {
  const TranslateString = useI18n()
  const kissBalance = useTokenBalance(getKissAddress())
  const kissPriceBusd = usePriceKissBusd()
  const busdBalance = new BigNumber(getBalanceNumber(kissBalance)).multipliedBy(kissPriceBusd).toNumber()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '54px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={getBalanceNumber(kissBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      {!kissPriceBusd.eq(0) ? <CardBusdValue value={busdBalance} /> : <br />}
    </>
  )
}

export default KissWalletBalance
