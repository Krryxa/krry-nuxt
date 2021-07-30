<template>
  <div>
    <h2>{{ myturn }}</h2>
    <p>参数：{{ paramsQuery }}</p>
    <div>
      <ul>
        <li v-for="ele in eleList" :key="ele.id">{{ ele.name }}</li>
      </ul>
      <button @click="addEle">添加</button>
    </div>
    <div>
      <ul>
        <li v-for="ele in dataObj.todoList" :key="ele.id">{{ ele.name }}</li>
      </ul>
      <button @click="addTodo">添加</button>
    </div>
    <el-button @click="changeQuery">改变 query 参数</el-button>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  useRouter,
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  middleware: 'auth',
  layout: 'blog',
  // asyncData(context) {
  //   // 组件渲染之前做的异步处理，返回对象能直接融合组件 data()
  //   console.log('上下文：', context)
  //   return {
  //     myturn: 'yyds'
  //   }
  // },
  asyncData({ params, query }) {
    // 请检查您是否在服务器端
    // 使用 req 和 res
    return { myturn: '123', paramsQuery: { params, query } }
  },
  // 使用watchQuery属性可以监听参数字符串的更改。 如果定义的字符串发生变化，将调用所有组件方法(asyncData, fetch, validate, layout, ...)。 为了提高性能，默认情况下禁用。
  // 如果您要为所有参数字符串设置监听， 请设置： watchQuery: true.
  watchQuery: ['ko'],

  setup() {
    // ref
    const eleList = ref([])
    function addEle() {
      const len = eleList.value.length
      eleList.value.push({
        id: len,
        name: 'ref 自增' + len,
      })
    }

    // reactive
    const dataObj = reactive({
      todoList: [],
    })
    function addTodo() {
      const len = dataObj.todoList.length
      dataObj.todoList.push({
        id: len,
        name: 'reactive 自增' + len,
      })
    }
    const router = useRouter()
    const changeQuery = () => {
      router.push({
        path: `/krry`,
        query: {
          ko: 'kopawkefawefarg',
        },
      })
    }
    return {
      changeQuery,
      eleList,
      addEle,
      dataObj,
      addTodo,
    }
  },
})
</script>
