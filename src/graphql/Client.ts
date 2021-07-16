import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ' '

const Client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default Client
