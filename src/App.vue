<template>
  <div id="app">
    <navbar />
    <home />
    <about />
    <skills />
    <projects />
    <contact />
    <footer>
      Réalisé par Nicolas Vitry ©
    </footer>
  </div>
</template>

<script>
import Home from '@/components/Home/Home';
import Navbar from '@/components/Navbar/Navbar';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Contact from '@/components/Contact/Contact';



export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Projects,
    Contact
  }
}
</script>
<style lang="scss" >
@import "src/assets/scss/style";
</style>
