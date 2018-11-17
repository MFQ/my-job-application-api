const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const { ApolloServer } = require('apollo-server-express');

const indexRouter = require('./routes/index');
const typeDefs = require('./schema/index');
const resolvers = require('./resolvers/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

console.log(`🚀 Server Graph QL is ready at ${server.graphqlPath}`);

module.exports = app;
