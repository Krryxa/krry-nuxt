<template>
  <div>
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
  </div>
</template>
<script>
import { ref, reactive, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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

    return {
      eleList,
      addEle,
      dataObj,
      addTodo
    }
  }
})
</script>
