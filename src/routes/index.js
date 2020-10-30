const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

const {
  ErrorMiddleware,
  NotFoundMiddleWare,
} = require('../middlewares');
const { Router } = require('express');

module.exports = ({
  UserRoutes,
  CommentRoutes,
  IdeaRoutes,
}) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/comment', CommentRoutes);
  apiRoutes.use('/idea', IdeaRoutes);

  router.use('/v1/api', apiRoutes);

  router.use(NotFoundMiddleWare);
  router.use(ErrorMiddleware);

  return router;
};
