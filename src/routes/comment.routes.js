const { Router } = require('express');

module.exports = ({ CommentController }) => {
  const router = Router();

  router.get('/:commentId/unique', CommentController.get);
  router.get('/:ideaId', CommentController.getIdeaComments);
  router.get('/:ideaId', CommentController.createComment);
  router.patch('/:commentId', CommentController.update);
  router.delete('/:commentId', CommentController.delete);

  return router;
};
