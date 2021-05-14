import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { useToast } from 'state/hooks'

const useGetProfileCosts = () => {
  const [costs, setCosts] = useState({
    numberKissToReactivate: new BigNumber(0),
    numberKissToRegister: new BigNumber(0),
    numberKissToUpdate: new BigNumber(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberKissToReactivate, numberKissToRegister, numberKissToUpdate] = await makeBatchRequest([
          profileContract.methods.numberKissToReactivate().call,
          profileContract.methods.numberKissToRegister().call,
          profileContract.methods.numberKissToUpdate().call,
        ])

        setCosts({
          numberKissToReactivate: new BigNumber(numberKissToReactivate as string),
          numberKissToRegister: new BigNumber(numberKissToRegister as string),
          numberKissToUpdate: new BigNumber(numberKissToUpdate as string),
        })
      } catch (error) {
        toastError('Error', 'Could not retrieve KISS costs for profile')
      }
    }

    fetchCosts()
  }, [setCosts, toastError])

  return costs
}

export default useGetProfileCosts
