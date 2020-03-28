'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = { massage: 21342 };
  }
}

module.exports = HomeController;
