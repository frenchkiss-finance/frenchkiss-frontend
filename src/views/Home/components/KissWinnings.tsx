import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceKissBusd } from 'state/hooks'
import { Text } from '@frenchkiss-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

const KissWinnings = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const { claimAmount } = useTotalClaim()
  const kissAmount = getBalanceNumber(claimAmount)
  const kissPriceBusd = usePriceKissBusd()
  const claimAmountBusd = new BigNumber(kissAmount).multipliedBy(kissPriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={kissAmount} lineHeight="1.5" />
      {!kissPriceBusd.eq(0) && <CardBusdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default KissWinnings
