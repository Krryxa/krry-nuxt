export default {
  // 设置博客分类
  async setClassify({ commit }: any, name: string) {
    const result = {
      data: [
        {
          id: 1,
          name: name
        }
      ]
    }
    commit('setClassify', result.data)
  }
}
