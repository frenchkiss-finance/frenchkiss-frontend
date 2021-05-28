import { useEffect, useState } from 'react'
import client from "../apollo/client"
import TVL_DATA from "../apollo/queries"

export interface ApiTvlResponse {
  id: string
  totalLiquidityUSD: number
  totalLiquidityBNB: number
}

export const useGetStats = () => {
  const [data, setData] = useState<ApiTvlResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.query({
          query: TVL_DATA(),
          fetchPolicy: 'cache-first',
        })
        setData(result.data.frenchKissFactories[0])
        
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
