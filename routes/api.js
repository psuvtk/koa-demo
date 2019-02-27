const router = require("koa-router")();

router.get("/", async ctx=>{
    ctx.body = "api 入口";
});

router.get("/pictures", async ctx => {
    ctx.body = "API 用来获取所有图片";
});

module.exports = router.routes();