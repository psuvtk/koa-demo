const Koa = require("koa");
const Router = require("koa-router");

const DB = require("./module/db");

const views = require("koa-views");
const serve = require("koa-static");

const app = new Koa();
const router = new Router();

// 视图中间件
app.use(
  views("views", {
    extension: "ejs"
  })
);

// 静态资源中间件
app.use(serve(__dirname + "/static"));

router.get("/", async ctx => {
  let title = "Hello ejs";
  await ctx.render("index", {
    title: title
  });
});

router.get("/news", async ctx => {
  ctx.body = "news";
  console.log(ctx.header);
});

router.get("/pictures", async ctx => {
    ctx.body = "API 用来获取所有图片"
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);
console.log("koa-cms server start.");
