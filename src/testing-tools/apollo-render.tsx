import { render } from "@testing-library/react";

// Mocking Apollo Client imports
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from "@graphql-tools/mock";

import { typeDefs } from "../../../tm2-graphql/src/schema";
import { ReactNode } from "react";

export function mockedRender(component: ReactNode, { mocks }: any = {} ) {
  const schema = makeExecutableSchema({ 
    typeDefs,
  });

  const mockSchema = addMocksToSchema({
    schema,
    resolvers: () => mocks
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }),
    cache: new InMemoryCache()
  });

  return render(
   <ApolloProvider client={client}>{component}</ApolloProvider>
  );
}