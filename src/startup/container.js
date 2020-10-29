const {
  createContainer,
  asClass,
  asValue,
  asFunction,
} = require('awilix');

// config
const config = require('../config');
const app = require('.');

// services
const {
  UserService,
  IdeaService,
  CommentService,
} = require('../services');

// controllers

// routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

// models
const { User, Comment, Idea } = require('../models');

// repositories
const {
  UserRepository,
  CommentRepository,
  IdeaRepository,
} = require('../repositories');

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    UserService: asClass(UserService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
  })
  .register({})
  .register({})
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment),
  })
  .register({
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(
      CommentRepository
    ).singleton(),
    UserRepository: asClass(UserRepository).singleton(),
  });

module.exports = container;
