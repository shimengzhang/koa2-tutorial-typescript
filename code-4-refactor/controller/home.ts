
// import Koa from 'koa';
import HomeService from '../service/home'
import {midFunc} from '../../typings/myTypes';
// declare interface midFunc {
//   (ctx: Koa.Context, next:()=>Promise<any>):Promise<any>
// }

const index: midFunc = async(ctx, next) => {
  ctx.body = `<h1>index page</h1>`
}

const home: midFunc = async(ctx, next) => {
  console.log(ctx.request.query)
  console.log(ctx.request.querystring)
  ctx.response.body = '<h1>HOME page</h1>'
}

const homeParams: midFunc = async(ctx, next) => {
  console.log(ctx.params)
  ctx.response.body = '<h1>HOME page /:id/:name</h1>'
}

const login: midFunc = async(ctx, next) => {
  ctx.response.body =
    `
    <form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
      <br/>
      <input name="password" type="text" placeholder="请输入密码：123456"/>
      <br/> 
      <button>GoGoGo</button>
    </form>
  `
}

const register: midFunc = async(ctx, next) => {
  let {
    name,
    password
  } = ctx.request.body
  let data = await HomeService.register(name, password)
  ctx.response.body = data
}

export default {
  index,
  home,
  homeParams,
  login,
  register
}