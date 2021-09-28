import { InMemoryCache } from '@apollo/client'
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist'

const store = new InMemoryCache()

export const persistApolloCache = persistCache({
  cache: store,
  storage: new LocalStorageWrapper(window.localStorage),
})

export { store }
