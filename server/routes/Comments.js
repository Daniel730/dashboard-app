const express = require('express');
const router = express.Router();

const { Comments } = require('../models');

router.get('/:postId', async (req, res) => {
  const { postId } = req.params;
  const comments = await Comments.findAll({
    where: { postId },
    order: [['updatedAt', 'DESC']],
  });
  return res.json(comments);
});

router.post('/', async (req, res) => {
  const comment = req.body;
  const comments = await Comments.create(comment);
  res.json(comments);
});

module.exports = router;
