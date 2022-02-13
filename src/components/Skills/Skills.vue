<template>
  <div class="skills">
    <div class="skills__title">Les technologies</div>
    <div class="skills__ctn" >
      <div class="skills__front">
        <div class="skills__front__label">
          Front-end
        </div>

        <div class="skills__front__technos">
          <div class="skills__front__technos__techno">
            <div class="skills__front__technos__techno__icon">
              <img src="@/assets/images/technos/html.png" alt="html">
            </div>
            Html
          </div>

          <div class="skills__front__technos__techno">
            <div class="skills__front__technos__techno__icon">
              <img src="@/assets/images/technos/css.png" alt="css">
            </div>
            Css
          </div>

          <div class="skills__front__technos__techno">
            <div class="skills__front__technos__techno__icon">
              <img src="@/assets/images/technos/js.png" alt="javascript">
            </div>
            Javascript
          </div>

          <div class="skills__front__technos__techno">
            <div class="skills__front__technos__techno__icon">
              <img src="@/assets/images/technos/react.png" alt="react">
            </div>
            React
          </div>

          <div class="skills__front__technos__techno">
            <div class="skills__front__technos__techno__icon">
              <img src="@/assets/images/technos/redux.png" alt="redux">
            </div>
            Redux
          </div>

          <div class="skills__front__technos__techno">
            <div class="skills__front__technos__techno__icon">
              <img src="@/assets/images/technos/sass.png" alt="sass">
            </div>
            Sass
          </div>

        </div>
      </div>
      <div class="skills__back">
        <div class="skills__back__label">
          Back-end
        </div>

        <div class="skills__back__technos">

          <div class="skills__back__technos__techno">
            <div class="skills__back__technos__techno__icon">
              <img src="@/assets/images/technos/php.png" alt="php">
            </div>
            Php
          </div>

          <div class="skills__back__technos__techno">
            <div class="skills__back__technos__techno__icon">
              <img src="@/assets/images/technos/laravel.png" alt="php">
            </div>
            Laravel
          </div>

          <div class="skills__back__technos__techno">
            <div class="skills__back__technos__techno__icon">
              <img src="@/assets/images/technos/mysql.png" alt="php">
            </div>
            MySql
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style lang="scss" scoped>
@import "skills";
</style>
