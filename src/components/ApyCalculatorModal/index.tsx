import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from '@frenchkiss-libs/uikit'
import useI18n from 'hooks/useI18n'
import { kissEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  kissPrice?: BigNumber
  apr?: number
  addLiquidityUrl?: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  kissPrice,
  apr,
  addLiquidityUrl,
}) => {
  
  const TranslateString = useI18n()
  const oneThousandDollarsWorthOfKiss = 1000 / kissPrice.toNumber()

  const kissEarnedPerThousand1D = kissEarnedPerThousandDollarsCompounding({ numberOfDays: 1, farmApr: apr, kissPrice })
  const kissEarnedPerThousand7D = kissEarnedPerThousandDollarsCompounding({ numberOfDays: 7, farmApr: apr, kissPrice })
  const kissEarnedPerThousand30D = kissEarnedPerThousandDollarsCompounding({
    numberOfDays: 30,
    farmApr: apr,
    kissPrice,
  })
  const kissEarnedPerThousand365D = kissEarnedPerThousandDollarsCompounding({
    numberOfDays: 365,
    farmApr: apr,
    kissPrice,
  })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(860, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(858, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(864, 'KISS per $1000')}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {getRoi({ amountEarned: kissEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfKiss })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kissEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {getRoi({ amountEarned: kissEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfKiss })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kissEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {getRoi({ amountEarned: kissEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfKiss })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kissEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {getRoi({ amountEarned: kissEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfKiss })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{kissEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        {TranslateString(
          866,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        <LinkExternal href={addLiquidityUrl}>
          {TranslateString(999, 'Get')} {lpLabel}
        </LinkExternal>
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
