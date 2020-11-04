const { Router } = require('express');
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require('../middlewares');
const { CacheTime } = require('../helpers');

module.exports = function ({ UserController }) {
  const router = Router();

  router.get('/:userId', UserController.get);
  router.get(
    '/',
    [
      AuthMiddleware,
      ParseIntMiddleware,
      CacheMiddleware(CacheTime.OneHour),
    ],
    UserController.getAll
  );
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
};
