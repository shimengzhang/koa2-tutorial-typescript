import HomeService from '../service/home'

import {midFunc} from '../../typings/myTypes';

const index: midFunc = async(ctx, next) => {
  ctx.response.body = `<h1>index page</h1>`
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
  await ctx.render('home/login',{
    btnName: 'GoGoGo'
  })
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

// export default {
//   index: async(ctx, next) => {
//     ctx.response.body = `<h1>index page</h1>`
//   },
//   home: async(ctx, next) => {
//     console.log(ctx.request.query)
//     console.log(ctx.request.querystring)
//     ctx.response.body = '<h1>HOME page</h1>'
//   },
//   homeParams: async(ctx, next) => {
//     console.log(ctx.params)
//     ctx.response.body = '<h1>HOME page /:id/:name</h1>'
//   },
//   login: async(ctx, next) => {
//     await ctx.render('home/login',{
//       btnName: 'GoGoGo'
//     })
//   },
//   register: async(ctx, next) => {
//     let {
//       name,
//       password
//     } = ctx.request.body
//     let data = await HomeService.register(name, password)
//     ctx.response.body = data
//   }
// }