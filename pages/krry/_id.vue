<template>
  <div>
    {{ myturn }}
    <nuxt-link to="/krry">krry 首页</nuxt-link>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'auth',
  layout: 'blog',
  asyncData({ params, query }) {
    // 获取参数
    return { myturn: { params, query } || '没有参数' }
  },

  setup() {
    return {}
  },
})
</script>
