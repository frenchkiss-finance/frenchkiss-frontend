import React from 'react'
import { Card, CardBody, Heading, Text } from '@frenchkiss-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
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
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getKissAddress()))
  const kissSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledKissStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Kiss Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total KISS Supply')}</Text>
          {kissSupply && <CardValue fontSize="14px" value={kissSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total KISS Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New KISS/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={1} />
        </Row>
      </CardBody>
    </StyledKissStats>
  )
}

export default KissStats
