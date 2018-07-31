const Koa = require('koa2');
const router = require('koa-router')();
const koaBody = require('koa-body');
const log4js = require('log4js');
const pool = require('./db');

// log4js.configure({
//   pm: true,
//   appenders: {
//     out: { type: 'console' },
//     task: {
//       type: 'dateFile',
//       filename: 'logs/task',
//       pattern: '-dd.log',
//       alwaysIncludePattern: true
//     },
//     result: {
//       type: 'dateFile',
//       filename: 'logs/result',
//       pattern: '-dd.log',
//       alwaysIncludePattern: true
//     },
//     error: {
//       type: 'dateFile',
//       filename: 'logs/error',
//       pattern: '-dd.log',
//       alwaysIncludePattern: true
//     },
//     default: {
//       type: 'dateFile',
//       filename: 'logs/default',
//       pattern: '-dd.log',
//       alwaysIncludePattern: true
//     },
//     rate: {
//       type: 'dateFile',
//       filename: 'logs/rate',
//       pattern: '-dd.log',
//       alwaysIncludePattern: true
//     }
//   },
//   categories: {
//     default: { appenders: ['out', 'default'], level: 'info' },
//     task: { appenders: ['task'], level: 'info' },
//     result: { appenders: ['result'], level: 'info' },
//     error: { appenders: ['error'], level: 'error' },
//     rate: { appenders: ['rate'], level: 'info' }
//   }
// });
// var logger = log4js.getLogger('appenders');

const app = new Koa();

app.use(router.routes());

// app.use(async (ctx, next) => {
//   logger.info(`${ctx.request.method} ${ctx.request.url}`);
//   await next();
// });
// function init(n) {
//   const arr = new Array(n);
//   let _n = n;
//   while(_n > 0) {
//     arr[--_n] = new Array(n)
//   }
//   return arr;
// }
// router.post('/api/login/:id', koaBody(), async (ctx, next) => {
//   logger.info('----context \n', ctx);
//   pool.getConnection((err, connection) => {
//     if (!err) {
//       connection.query('select * from user', (err, row) => {
//         if (err) {
//           console.error('查询错误', err);
//         }
//         logger.info(row);
//       });
//     }
//   });
//   logger.info('login', ctx.request.body);
// });

// app.use(async (ctx, next) => {
//   const start = new Date().getTime();
//   await next();
//   const ms = new Date().getTime() - start;
//   console.info(`耗时：${ms}ms`);
// });

// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/heml';
//   ctx.response.body = `<h1>${ctx.request.url}</h1>`;
// });

app.listen(3232);
