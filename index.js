//express for make routing easy
const express = require('express');
//schema[logical representaion of database.]
let shcema = require('./schema');

//require express-graphql for graphql playground.
const {graphqlHTTP} = require('express-graphql');

//instance of a express for routing.
const app = express();

//semple root end point
app.get('/', (req, res)=>{
    res.send("My First Project in GraphQL");
});

//resolver for resolve all graphql querys and store the data to database.
const root = require('./resolvers');

//use express-graphql so create a endpoint for graphql querys.
app.use('/graphql', graphqlHTTP({
    schema: shcema,
    rootValue: root,
    graphiql: true
}))

//listen the endpoint on 3000 ports.
app.listen(3000, ()=>{
    console.log(`Server is running : http://www.localhost:3000/`);
});
