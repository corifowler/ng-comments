import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import PARSE from './constants/parse.constant';

import HomeController from './controllers/homecontroller';
import AddController from './controllers/addcontroller';

import CommentService from './services/commentservice';

angular 
  .module('app', ['ui.router'])
  .constant('PARSE', PARSE)
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .service('CommentService', CommentService)
;
