const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const postRouter = require('./routes/Posts');
const commentsRouter = require('./routes/Comments');
const usersRouter = require('./routes/Users');
app.use('/posts', postRouter);
app.use('/comments', commentsRouter);
app.use('/auth', usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running http://localhost:3001');
  });
});
