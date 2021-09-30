const express = require('express');
const router = express.Router();

const { Posts } = require('../models');

router.get('/', async (req, res) => {
  const posts = await Posts.findAll();
  return res.json(posts);
});

router.post('/', async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  return res.json(post);
});

// router.put('/');

// router.delete('/');

module.exports = router;
