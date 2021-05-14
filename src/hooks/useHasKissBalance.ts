import BigNumber from 'bignumber.js'
import { getKissAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's KISS balance is at least the amount passed in
 */
const useHasKissBalance = (minimumBalance: BigNumber) => {
  const kissBalance = useTokenBalance(getKissAddress())
  return kissBalance.gte(minimumBalance)
}

export default useHasKissBalance
