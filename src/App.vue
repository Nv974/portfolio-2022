<template>
  <div id="app">
    Vue App
<!-- 3 <test></test>-->
  </div>
</template>

<script>
// 1 import Test from './components/Test/Test'
console.log( '%c' + 'test', 'color:#f0f ; font-size: 1.3rem' );


export default {
  name: 'App',
  components: {
    // 2 Test
  }
}
</script>

<style lang="scss" >
@import "src/assets/scss/style";
</style>
