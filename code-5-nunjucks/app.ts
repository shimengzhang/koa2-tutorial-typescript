import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
// nunjucks 没有类型声明文件，所以改用 ejs
// const nunjucks = require('koa-nunjucks-2')
import ejs from 'koa-ejs';

const app = new Koa()
import router from './router'

ejs(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
})
// app.use(nunjucks({
//   ext: 'html',
//   path: path.join(__dirname, 'views'),// 指定视图目录
//   nunjucksConfig: {
//     trimBlocks: true // 开启转义 防Xss
//   }
// }));

app.use(bodyParser())
router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})