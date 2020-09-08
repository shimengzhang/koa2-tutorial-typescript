import Router from 'koa-router';
import Koa from 'koa';
import HomeController from './controller/home';

const router = new Router()

export default (app:Koa) => {
  router.get( '/', HomeController.index )
  
  router.get('/home', HomeController.home)
  
  router.get('/home/:id/:name', HomeController.homeParams)
  
  router.get('/user', HomeController.login)
  
  router.post('/user/register', HomeController.register)
  
  app.use(router.routes())
    .use(router.allowedMethods())
}