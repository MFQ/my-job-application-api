const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.get('/', (req, res) => res.send({ status: 200 }));

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) {
      return res.send({ status: 403, error: 'User not found' });
    }

    bcrypt.compare(password, user.password).then((valid) => {
      if (valid) {
        const token = jsonwebtoken.sign(
          { userId: user.id, email: user.email },
          process.env.JWT_SECERT,
          { expiresIn: '1d' },
        );
        return res.send({ status: 200, token });
      }

      return res.send({ status: 403, error: 'Email and Password does not match' });
    });
  });
});

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  if (
    username === undefined
    || username === ''
    || (email === undefined || email === '')
    || (password === undefined || password === '')
  ) {
    return res.send({ status: 403, error: 'Missing parameter' });
  }
  User.findOne({ where: { email } }).then((user) => {
    if (user) {
      return res.send({ status: 403, error: 'Email is already exist ' });
    }
    bcrypt.hash(password, 10).then((decryptPassword) => {
      User.create({
        username,
        email,
        password: decryptPassword,
      }).then((newUser) => {
        const token = jsonwebtoken.sign(
          { userId: newUser.id, email: newUser.email },
          process.env.JWT_SECERT,
          { expiresIn: '1y' },
        );
        return res.send({ status: 200, token });
      });
    });
  });
});

module.exports = router;
