import React from 'react'
import { Card, CardBody, Heading, Text } from '@frenchkiss-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getKissAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledKissStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const KissStats = () => {
  const totalSupply = getBalanceNumber(useTotalSupply())
  const burnedBalance = getBalanceNumber(useBurnedBalance(getKissAddress()))
  const kissCirculatingSupply = totalSupply ? totalSupply - burnedBalance : 0

  return (
    <StyledKissStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          Kiss Stats
        </Heading>
        <Row>
          <Text fontSize="14px">Total KISS Supply</Text>
          {totalSupply && <CardValue fontSize="14px" value={totalSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">Total KISS Burned</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">Total Circulating Supply</Text>
          <CardValue fontSize="14px" decimals={0} value={kissCirculatingSupply} />
        </Row>
        <Row>
          <Text fontSize="14px">New KISS/block</Text>
          <CardValue fontSize="14px" decimals={0} value={22.5} />
        </Row>
      </CardBody>
    </StyledKissStats>
  )
}

export default KissStats
