const express = require('express');
const router = express.Router();

const { Posts } = require('../models');

router.get('/', async (req, res) => {
  const posts = await Posts.findAll({
    order: [['updatedAt', 'DESC']],
  });
  return res.json(posts);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  return res.json(post);
});

router.post('/', async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  return res.json(post);
});

// router.put('/');

// router.delete('/');

module.exports = router;
