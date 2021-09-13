const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = process.env.PORT

app.listen(4000)