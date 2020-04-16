<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// 逻辑
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'i love u'
    };
  },
  mounted() {
    console.log('生命周期-页面挂载');
    this.handleRequest();
  },
  methods: {
    handleRequest() {
      console.log('我要发请求');
    }
  }
}
</script>

 <style scoped>
/* 样式 */
</style>
