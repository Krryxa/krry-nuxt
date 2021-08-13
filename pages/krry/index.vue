<template>
  <div>
    <h2>{{ myturn }}</h2>
    <p>参数：{{ paramsQuery }}</p>
    <div ref="krryRef">
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
    <el-button @click="addVuex">设置vuex</el-button>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  useRouter,
  defineComponent,
  onMounted,
  useStore,
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
  asyncData(context) {
    context.app.myInjectedFunction('ctx!')

    const { params, query } = context

    return { myturn: '123', paramsQuery: { params, query } }
  },
  // 使用watchQuery属性可以监听参数字符串的更改。 如果定义的字符串发生变化，将调用所有组件方法(asyncData, fetch, validate, layout, ...)。 为了提高性能，默认情况下禁用。
  // 如果您要为所有参数字符串设置监听， 请设置： watchQuery: true.
  watchQuery: ['ko'],

  setup(props, context) {
    console.log('setup 参数：', props, context)

    // 获取 dom 节点，命名必须要与 dom ref 相同，在 mounted 之后可获取。必须要 return 这个 ref
    const krryRef = ref(null)

    onMounted(() => {
      // 可获取 ref dom 节点
      console.log('组件挂载', krryRef.value)
    })

    // onMounted() {
    // context.$myInjectedFunction('krry')
    // },

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

    // vuex
    const store = useStore()
    console.log(store.state.modules.blog)
    store.dispatch('modules/blog/setClassify', '郭企鹅')
    const addVuex = () => {
      store.commit('increment')
    }

    return {
      krryRef,
      changeQuery,
      eleList,
      addEle,
      dataObj,
      addTodo,
      addVuex,
    }
  },
})
</script>
