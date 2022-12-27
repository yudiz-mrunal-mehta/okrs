import '../styles/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import Layout from '../components/layouts/layout';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
