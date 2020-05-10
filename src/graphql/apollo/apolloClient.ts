import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { getToken } from '../../utils/storage';

export default function createApolloClient(initialState: any, ctx: any) {
  const token = getToken();

  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: 'https://title-academy-backend.herokuapp.com/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
