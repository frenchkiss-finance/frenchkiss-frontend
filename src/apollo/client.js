import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const client =  new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/frenchkiss-finance/exchange',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export default client;