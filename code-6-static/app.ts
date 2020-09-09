import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
// import ejs from 'koa-ejs';
const nunjucks = require('koa-nunjucks-2')
// 引入 koa-static
import staticFiles from 'koa-static'

const app = new Koa()
import router from './router'

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))

// ejs(app, {
//   root: path.join(__dirname, 'views'),
//   layout: 'template',
//   viewExt: 'html',
//   cache: false,
//   debug: true
// })

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlocks: true
  }
}));

app.use(bodyParser())
router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})