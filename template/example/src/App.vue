<template>
  <div id="app">
    <demonstration
        title="示例代码标题"
        anchor="demo-code-title"
        :highlight="sourcecode">
      <template slot="description">
        简单描述一下示例代码标题
      </template>
      <template slot="source">
        <div class="source">
          <hello></hello>
        </div>
      </template>
      <template slot="explanation">
        对你的代码进行描述
      </template>
    </demonstration>
    <p>示例使用详情请参考：（<a href="https://github.com/savoygu/vue-demonstration">https://github.com/savoygu/vue-demonstration</a>）</p>
  </div>
</template>

<script type="es6">
  import { sourcecode } from './template'
  export default {
    data () {
      return {
        msg: '编写你的代码',
        sourcecode
      }
    },
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    width: 1000px;
    margin: 0 auto;
    .hello {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
  }
</style>
