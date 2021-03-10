const Router = require('koa-router');
const postCtrl = require('./postsCtrl.list');
const bodyparser = require('koa-bodyparser');

const posts = new Router();

posts.get('/', postCtrl.getHome);
posts.get('/profile', postCtrl.getProfile);
posts.get('/activity', postCtrl.getActivity);

module.exports = posts;
