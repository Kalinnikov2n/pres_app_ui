//GLOBAL CONFIG

import { ApolloClient } from '@apollo/client/core/ApolloClient'
import { from, createHttpLink } from '@apollo/client'
import { envConfig } from '../config/envConfig'
import { store } from '../store/store'

const { APP_SERVER_GRAPHQL } = envConfig

const httpLink = createHttpLink({
  uri: ({ operationName }) => {
    return `${APP_SERVER_GRAPHQL}?_____${operationName}`
  },
})

const client = new ApolloClient({
  link: from([httpLink]),
  cache: store,
  connectToDevTools: true,
})

export default client
