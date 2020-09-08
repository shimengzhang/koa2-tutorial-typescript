import Koa from 'koa'
const app = new Koa()
import router from './router'
const middleware = require('./middleware')

middleware(app)
router(app)
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})