import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache()
  });
};

export const initializeApollo = (initialState = {}) => {
  const apolloClientGlobal = apolloClient ?? createApolloClient();

  // recuperando os dados de cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
};

export const useApollo = (initialState = {}) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
