const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const colors = require('colors');
const schema = require('./schema/schema');
const resolver = require('./schema/resolver');
const PORT = 3030;



// The root provides a resolver function for each API endpoint
const root = resolver

const app = express();

app.get("/",(req,res)=>res.status(200).json({message:"Server is up and running"}))

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT, ()=>console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`.bgYellow));
