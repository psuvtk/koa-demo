const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const views = require("koa-views");
const serve = require("koa-static");
const session = require("koa-session");

const index = require("./routes/index");
const api = require("./routes/api");
const admin = require("./routes/admin");

router.use(index);
router.use("/api", api);
router.use("/admin", admin);

const DB = require("./module/db").default;

app.keys = ["some secret hurr"];

const CONFIG = {
    key: "koa:sess",
    maxAge: 86400,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: true
};

// session 中间件
app.use(session(CONFIG, app));

// 视图中间件
app.use(
    views("views", {
        extension: "ejs"
    })
);

// 静态资源中间件
app.use(serve(__dirname + "/static"));
app.use(serve(__dirname + "/public"));





app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);
console.log("koa-cms server start.");