export default ({ app }: any, inject: any) => {
  // Set the function directly on the context.app object
  app.myInjectedFunction = (string: any) =>
    console.log('Okay, another function', string)
  
  // 系统会自动将$添加到方法名的前面
  inject('krryFunc', () => {
    console.log('inject 方法同时在context、Vue实例、Vuex注入')
  })
}