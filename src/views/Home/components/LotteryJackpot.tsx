import React from 'react'
import { Text } from '@frenchkiss-libs/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'
import { usePriceKissBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardBusdValue from './CardBusdValue'

const LotteryJackpot = () => {
  const TranslateString = useI18n()
  const lotteryPrizeAmount = useTotalRewards()
  const balance = getBalanceNumber(lotteryPrizeAmount)
  const lotteryPrizeAmountKiss = balance.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })
  const kissPriceBusd = usePriceKissBusd()
  const lotteryPrizeAmountBusd = new BigNumber(balance).multipliedBy(kissPriceBusd).toNumber()

  return (
    <>
      <Text bold fontSize="24px" style={{ lineHeight: '1.5' }}>
        {TranslateString(999, `${lotteryPrizeAmountKiss} KISS`, { amount: lotteryPrizeAmountKiss })}
      </Text>
      {!kissPriceBusd.eq(0) ? <CardBusdValue value={lotteryPrizeAmountBusd} /> : <br />}
    </>
  )
}

export default LotteryJackpot
