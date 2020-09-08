export default {
  register: async(name:string, pwd:string) => {
    let data 
    if (name == 'ikcamp' && pwd == '123456') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data
  }
}