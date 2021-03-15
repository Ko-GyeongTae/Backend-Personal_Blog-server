const Router = require('koa-router');
const src = new Router();

const posts = require('./posts');

src.use('/posts', posts.routes());


module.exports = src;