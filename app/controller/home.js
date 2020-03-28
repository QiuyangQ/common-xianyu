'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = { massage: 21342 };
  }

  async aaa() {
    const { ctx } = this;
    ctx.body = { massage: 'test' };
  }
}

module.exports = HomeController;
