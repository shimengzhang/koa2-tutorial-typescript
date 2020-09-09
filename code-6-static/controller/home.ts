const HomeService = require('../service/home')

import {midFunc} from '../../typings/myTypes';

const index: midFunc = async(ctx, next) => {
  await ctx.render("home/index", {title: "iKcamp欢迎您"})
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
  await ctx.render('home/login', {
    btnName: 'GoGoGo'
  })
}

const testnj: midFunc = async(ctx, next) => {
  await ctx.render('test/nj', {
    btnName: 'GoGoGo'
  })
}

const register: midFunc = async(ctx, next) => {
  let params = ctx.request.body
  let name = params.name
  let password = params.password
  let res = await HomeService.register(name,password)
  if(res.status == "-1"){
    await ctx.render("home/login", res.data)
  }else{
    ctx.state.title = "个人中心"
    await ctx.render("home/success", res.data)
  }
}

export default {
  index,
  home,
  homeParams,
  login,
  register,
  testnj
}