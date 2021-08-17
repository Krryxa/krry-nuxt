<template>
  <div>
    {{ myturn }}
    <nuxt-link to="/krry">krry 首页</nuxt-link>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  useRoute,
  useContext,
} from '@nuxtjs/composition-api'
// import { getBlog } from '@/api/blog'

export default defineComponent({
  middleware: 'auth',
  layout: 'blog',
  async asyncData({ params, query, $axios }) {
    // asyncData 使用 axios 实例
    const data = await $axios.get(`/krryblog/blog/getBlogDetail/${params.id}`)
    // 获取参数
    return { myturn: { params, query, blogData: data } || '没有参数' }
  },

  setup() {
    const route = useRoute()
    const id = route.value.params.id

    // setup 使用 axios 实例
    const { $axios } = useContext()

    const blog = ref({})

    const getData = async () => {
      blog.value = await $axios.get(`/krryblog/blog/getBlogDetail/${id}`)
    }

    getData()

    // 使用 api 文件实例
    // const apiData = getBlog(id)

    return {
      blog,
    }
  },
})
</script>
