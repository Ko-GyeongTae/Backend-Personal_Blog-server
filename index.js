const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(Logger());
app.use(bodyParser());
router.get('/', async(ctx, next) => {
    console.log(ctx);
    ctx.body = "home";
});

router.post('/', (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4500, () => {
    console.log("✅Server is running on port : 4500");
});
