import axios from 'axios'
import { GraphQLClient } from 'graphql-request'
import { ANIME_LIST_API, JIKAN_API } from '../commons/constants'

const clientApi = async (endpoint) => {
  console.log('REQUEST', `${JIKAN_API}/${endpoint}`)
  return await axios
    .get(`${JIKAN_API}/${endpoint}`)
    .then((data) => data?.data)
    .catch((error) => {
      if (error.response) {
        const err = {
          ...error.response,
          message: error.response?.data?.status_message,
        }
        return Promise.reject(err)
      } else {
        return Promise.reject(error)
      }
    })
}

const graphQLClient = new GraphQLClient(ANIME_LIST_API, {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

export { clientApi, graphQLClient }
