const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
  },
};

module.exports = resolver;
