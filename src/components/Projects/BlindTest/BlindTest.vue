<template>
  <div class="blind">
    <div class="blind__content">
      <div>
        <div class="blind__title" >Music Blind Test</div>
        <iframe
            width="280"
            height="600"
            src="https://www.youtube.com/embed/58kwE0lLiv0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>
      </div>

      <div class="blind__content__description">{{ project.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlindTest',
  props: ['project']
};

</script>

<style lang="scss" scoped>
  @import "blind";
</style>
