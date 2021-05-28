import gql from 'graphql-tag'

const TVL_DATA = (block) => {
  const queryString = ` query frenchKissFactories {
      frenchKissFactories(
       ${block ? `block: { number: ${block}}` : ``} 
       where: { id: "0x8abb529141ad358cb0dec76eef0e749420deae77" }) {
        id
        totalLiquidityUSD
        totalLiquidityBNB
      }
    }`
  return gql(queryString)
}

export default TVL_DATA