const reactSsr = require('./dist/src/server/middlewares/react-ssr').default;
const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');

const app = new Koa();

// 设置克访问的静态资源，我们把webpack打包后的代码放到dist/static下
app.use(koaStatic(
  path.join(__dirname, './dist/static')
));

// 使用ssr工作的中间件
app.use(reactSsr);

// 启动服务
app.listen(9001);

console.info('server is start .9001')

