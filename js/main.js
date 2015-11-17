import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/homecontroller';
import AddController from './controllers/addcontroller';

angular 
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController);
