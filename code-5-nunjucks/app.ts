import Koa from 'koa'
import path from 'path'
import bodyParser from 'koa-bodyparser'
const nunjucks = require('koa-nunjucks-2')

const app = new Koa()
import router from './router'

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),// 指定视图目录
  nunjucksConfig: {
    trimBlocks: true // 开启转义 防Xss
  }
}));

app.use(bodyParser())
router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})