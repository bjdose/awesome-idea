const { Router } = require('express');

module.exports = ({ IdeaController }) => {
  const router = Router();

  router.get('/:ideaId', IdeaController.get);
  router.get('/', IdeaController.getAll);
  router.get('/:userId/all', IdeaController.getUserIdeas);
  router.post('/', IdeaController.create);
  router.patch('/:ideaId', IdeaController.update);
  router.delete('/:userId', IdeaController.delete);
  router.post('/:ideaId/upvote', IdeaController.upvoteIdea);
  router.post(
    '/:ideaId/downvote',
    IdeaController.downvoteIdea
  );

  return router;
};
