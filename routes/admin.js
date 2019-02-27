const router = require("koa-router")();

router.get("/", async ctx => {
    ctx.redirect("/admin/login");
});

router.get("/login", async ctx => {
    ctx.body = "登陆";
});

module.exports = router.routes();