const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./src/graphql/schema');
const { root } = require('./src/graphql/root');
const port = process.env.PORT || 4000;
const app = express();

// GraphQL
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);

// Server
app.listen(port, () => console.log(`Server listening on port: ${port}`));
