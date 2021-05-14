import { usePriceKissBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalKiss = getBalanceNumber(totalRewards)
  const kissPriceBusd = usePriceKissBusd()

  return totalKiss * kissPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
