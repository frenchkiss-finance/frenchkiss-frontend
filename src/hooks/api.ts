import { useEffect, useState } from 'react'

/*
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/frenchkiss-finance/gatsby-frenchkiss-api/
 */
// export const baseUrl = 'https://api.frenchkiss.finance/api/v1'
export const baseUrl = 'https://api.pancakeswap.finance/api/v1'

/* eslint-disable camelcase */

export interface ApiTvlResponse {
  update_at: string
  '24h_total_volume': number
  total_value_locked: number
  total_value_locked_all: number
}

export const useGetStats = () => {
  const [data, setData] = useState<ApiTvlResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/tvl`)
        const responsedata: ApiTvlResponse = await response.json()

        setData(responsedata)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
