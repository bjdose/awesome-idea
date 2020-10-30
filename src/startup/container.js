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
  AuthService,
} = require('../services');

// controllers
const {
  UserController,
  IdeaController,
  CommentController,
  AuthController,
} = require('../controllers');

// routes
const {
  CommentRoutes,
  UserRoutes,
  IdeaRoutes,
  AuthRoutes,
} = require('../routes/index.routes');
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
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    UserController: asClass(UserController).singleton(),
    IdeaController: asClass(IdeaController).singleton(),
    AuthController: asClass(AuthController).singleton(),
    CommentController: asClass(
      CommentController
    ).singleton(),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
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
