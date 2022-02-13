<template>
  <div class="contact">
    <div class="contact__title">
      Contactez moi !
    </div>
    <div class="contact__content">
      <div class="contact__content__left">
        <div class="contact__content__left__text">
          N'hésitez pas à me contacter pour vos projets, ou pour tout autre renseignement via les coordonnées affichées ci-dessous.
          Vous pouvez aussi directement m'envoyer un message en utilisant le formulaire de contact.
        </div>
        <div class="contact__content__left__phone">
          <img src="@/assets/icons/phone2.svg" alt="phone">
          <div class="contact__content__left__phone__text" style="font-size: 1.2rem " >
            <div style="font-weight: bold" >Téléphone</div>
            <div>06 93 51 62 99</div>
          </div>
        </div>
        <div class="contact__content__left__mail">
          <img src="@/assets/icons/mail2.svg" alt="nv.nicolasvitry@gmail.com">
          <div class="contact__content__left__mail__text" style="font-size: 1.2rem " >
            <div style="font-weight: bold" >E-mail</div>
            <div>nv.nicolasvitry@gmail.com</div>
          </div>
        </div>
        <div class="contact__content__left__map">
          <img src="@/assets/icons/map2.svg" alt="lieu">
          <div class="contact__content__left__map__text" style="font-size: 1.2rem " >
            <div style="font-weight: bold" >E-mail</div>
            <div>Saint-Joseph / Réunion / 97480</div>
          </div>
        </div>
        </div>
      <form class="contact__content__right">
        <div class="contact__content__right__first">
          <input type="text" name="name">
          <input type="email" name="email">
        </div>
        <div class="contact__content__right__second">
          <input type="text" name="phone">
          <input type="text" name="email">
        </div>
        <div class="contact__content__right__thirst">
          <input type="text" name="object" class="contact__content__right__object" >

        </div>
        <div class="contact__content__right__fourth">
          <textarea name="message" ></textarea>
        </div>
        <button type="submit">Envoyer un message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
  @import "contact";
</style>
