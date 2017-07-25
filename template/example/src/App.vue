<template>
  <div id="app">
    <demonstration
      tag="h2"
      title="hello 组件"
      description="组件模板"
      :show-content="false">
    </demonstration>
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
    <demonstration
      :show-content="false">
      <p>示例使用详情请参考：（<a href="https://github.com/savoygu/vue-demonstration">https://github.com/savoygu/vue-demonstration</a>）</p>
    </demonstration>
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
    margin: 60px auto;
  }
</style>
