const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { Users } = require('../models');

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({ username, password: hash });
  });
  res.json({ message: 'success' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username } });

  return !user
    ? res.json({ message: 'Username and password mismatch!' })
    : bcrypt.compare(password, user.password).then((match) => {
        return !match
          ? res.json({ message: 'Username and pasword mismatch!' })
          : res.json({ message: 'success' });
      });
});

module.exports = router;
