export default ({ app }: any, inject: any) => {
  // Set the function directly on the context.app object
  app.myInjectedFunction = (string: any) =>
    console.log('Okay, another function', string)
}