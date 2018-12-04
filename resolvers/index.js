const resolver = {
  Query: {
    hello(root) {
      return 'world';
    },
  },
};

console.log('___________________');
console.log(resolver);
console.log('_____________________');

module.exports = resolver;
