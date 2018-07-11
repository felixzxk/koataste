const Koa = require('koa2');

const app = new Koa();

app.use(async (ctx, next) => {
  console.info(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});
app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.info(`耗时：${ms}ms`);
});
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/heml';
    ctx.response.body = `<h1>${ctx.request.url}</h1>`
})

app.listen(3000);
