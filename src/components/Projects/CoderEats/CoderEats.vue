<template>
<div class="coder">
  <div class="coder__content">
    <img src="@/assets/images/projects/iphone.gif" alt="coder eats" height="600" >
    <div class="coder__content__description">{{ project.description }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CoderEats',
  props : ['project']
};
</script>

<style lang="scss" scoped>
@import "coder";
</style>
