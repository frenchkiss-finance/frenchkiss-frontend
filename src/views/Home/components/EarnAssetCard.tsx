import React from 'react'
import styled from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@frenchkiss-libs/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'

const StyledFarmStakingCard = styled(Card)`
  background: linear-gradient(#53dee9, #7645d9);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardMidContent = styled(Heading).attrs({ size: 'xl' })`
  line-height: 44px;
`
const EarnAssetCard = () => {
  const activeNonKissPools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('KISS'))
  const latestPools: Pool[] = orderBy(activeNonKissPools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
  // Always include KISS
  const assets = ['KISS', ...latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/pools" id="pool-cta">
        <CardBody>
          <Heading color="contrast" size="lg">
            Earn
        </Heading>
          <CardMidContent color="invertedContrast">{assets}</CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="contrast" size="lg">
              in Pools
          </Heading>
            <ArrowForwardIcon mt={30} color="primary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
