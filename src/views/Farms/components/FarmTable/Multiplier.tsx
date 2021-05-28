import React from 'react'
import styled from 'styled-components'
import { HelpIcon, useTooltip } from '@frenchkiss-libs/uikit'

const ReferenceElement = styled.div`
  display: inline-block;
`

export interface MultiplierProps {
  multiplier: string
}

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  text-align: right;
  margin-right: 14px;

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    margin-right: 0;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Multiplier: React.FunctionComponent<MultiplierProps> = ({ multiplier }) => {
  const displayMultiplier = multiplier ? multiplier.toLowerCase() : '-'
  const tooltipContent = (
    <div>
      The multiplier represents the amount of KISS rewards each farm gets.
      <br />
      <br />
      For example, if a 1x farm was getting 1 KISS per block, a 40x farm would be getting 40 KISS per block.
    </div>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, 'top-end', 'hover', undefined, undefined, [
    20,
    10,
  ])

  return (
    <Container>
      <MultiplierWrapper>{displayMultiplier}</MultiplierWrapper>
      <ReferenceElement ref={targetRef}>
        <HelpIcon color="textSubtle" />
      </ReferenceElement>
      {tooltipVisible && tooltip}
    </Container>
  )
}

export default Multiplier
