'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/api/test', controller.home.index);
  router.get('/api/aaa', controller.home.aaa);
};
