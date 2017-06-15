<template>
  <div id="app">
    <div class="app-period">
      <div class="app-period__inner">
        <v-area></v-area>
        <ul class="app-period__data">
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  export default {}
</script>

<style>
  .app-period {
    width: 800px;
    margin: 200px auto 0;
    background-color: #fff;
    border: 1px solid #20A0FF;
    box-shadow: 0 1px 10px #20A0FF;
  }
  .app-period__inner {
    padding: 50px;
  }
  .app-period__data {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 40px;
  }
  .app-period__data li {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    background-color: #20A0FF;
    color: #fff;
    border: 1px solid #fff;
  }
</style>
