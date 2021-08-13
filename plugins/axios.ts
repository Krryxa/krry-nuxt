export default function ({ $axios, redirect }: any) {
  $axios.onRequest((config: any) => {
    console.log('Making request to ' + config.url)
  })
  
  $axios.onResponse((response: any) => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(response)
    }
  })

  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
