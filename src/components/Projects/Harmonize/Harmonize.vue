<template>
<div class="harmonize">
  <div class="harmonize__title">Harmonize</div>
  <div class="harmonize__content">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mQki_QvYDJ0?start=4453"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
    <div class="harmonize__content__description">
      {{ project.description }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Harmonize',
  props : ['project']
};
</script>

<style lang="scss" scoped>
@import "harmonize";
</style>
