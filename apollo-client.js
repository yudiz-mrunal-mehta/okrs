import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_APP_BASE_URL,
  cache: new InMemoryCache(),
});

export default client;
