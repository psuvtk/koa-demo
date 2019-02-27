const router = require("koa-router")();

router.get("/", async ctx => {
    console.log(ctx.cookies.get("username"));
    ctx.cookies.set("username", "songqun", {
        maxAge:60*1000
    });
    console.log("once");
    await ctx.render("index");
});

module.exports = router.routes();