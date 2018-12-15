const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');

const { ApolloServer } = require('apollo-server-express');

const indexRouter = require('./routes/index');
const typeDefs = require('./schema/index');
const resolvers = require('./resolvers/index');

const app = express();

const auth = jwt({
  secret: process.env.JWT_SECERT,
  credentialsRequired: false,
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

const server = new ApolloServer({ typeDefs, resolvers, context: req => ({ ...req }) });

const jwtMW = jwt({
  secret: process.env.JWT_SECERT,
}).unless({ path: [{ url: server.graphqlPath, methods: ['POST'] }] });

// app.use(server.graphqlPath, jwtMW);

server.applyMiddleware({ app });

console.log(`🚀 Server Graph QL is ready at ${server.graphqlPath}`);

module.exports = app;
