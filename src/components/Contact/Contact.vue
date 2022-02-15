<template>
  <div id="contact" class="contact">
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
          <div class="contact__content__left__phone__text" >
            <div style="font-weight: bold" >Téléphone</div>
            <div>06 93 51 62 99</div>
          </div>
        </div>
        <div class="contact__content__left__mail">
          <img src="@/assets/icons/mail2.svg" alt="nv.nicolasvitry@gmail.com">
          <div class="contact__content__left__mail__text">
            <div style="font-weight: bold" >E-mail</div>
            <div>nv.nicolasvitry@gmail.com</div>
          </div>
        </div>
        <div class="contact__content__left__map">
          <img src="@/assets/icons/map2.svg" alt="lieu">
          <div class="contact__content__left__map__text" >
            <div style="font-weight: bold" >Situé à</div>
            <div>Saint-Joseph / La Réunion </div>
          </div>
        </div>
        </div>
      <form ref="form" @submit.prevent="sendEmail" class="contact__content__right">
        <div class="contact__content__right__first">
          <label class="contact__content__right__first__label__name">
            Nom*
          </label>
          <input
              class="contact__content__right__first__input__name"
              @focusin="setLabel('first' , 'name')"
              @focusout="unsetLabel('first', 'name')"
              type="text" name="name" required>
          <label class="contact__content__right__first__label__email" >Email*</label>
          <input @focusin="setLabel('first' , 'email')"
                 @focusout="unsetLabel('first', 'email')"
                 class="contact__content__right__first__input__email"
                 type="email" name="email" required >
        </div>
        <div class="contact__content__right__second">
          <label class="contact__content__right__second__label__phone" >Téléphone</label>
          <input @focusin="setLabel('second' ,'phone')"
                 @focusout="unsetLabel('second','phone')"
                 class="contact__content__right__second__input__phone"
                 type="text" name="phone" >
          <label class="contact__content__right__second__label__company" >Société</label>
          <input
              class="contact__content__right__second__input__company"
              @focusin="setLabel('second' ,'company')"
              @focusout="unsetLabel('second','company')"
              type="text" name="company">
        </div>
        <div class="contact__content__right__thirst">
          <label class="contact__content__right__thirst__label__object" >
            Objet du message
          </label>
          <input

              @focusin="setLabel('thirst' ,'object')"
              @focusout="unsetLabel('thirst','object')"
              type="text" name="object"
              class="contact__content__right__thirst__input__object"
          >

        </div>
        <div class="contact__content__right__fourth">
          <label
              class="contact__content__right__fourth__label__message" >Message*</label>
          <textarea
              class="contact__content__right__fourth__input__message"
              @focusin="setLabel('fourth' ,'message')"
              @focusout="unsetLabel('fourth','message')"
              name="message" required ></textarea>
        </div>
        <button type="submit" v-if="sendMessage === 'sending'" >
          <span class="contact__content__right__spinner" ></span>
        </button>
        <button type="submit"  v-if="sendMessage === '' " >
          Envoyer un message
        </button>
        <button type="submit"  v-if="sendMessage === 'isSend' "
                style="background: none"  >
          <span  style="color: #a8ff92" > Message envoyé </span>
        </button>
        <button v-if="sendMessage === 'error'" type="submit"
                style="background: none"  >
          <span  style="color: #ff0000" > Erreur lors de l'envoi</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';


export default {
  name: 'Contact',
  data(){
    return {
      sendMessage : ''
    }
  },
  methods : {

    setLabel(number, name) {
      const label = document.querySelector(`.contact__content__right__${number}__label__${name}`);
      label.classList.add(`contact__content__right__second__label__${name}--focus`);
    },
    unsetLabel(number, name) {
      const input = document.querySelector(`.contact__content__right__${number}__input__${name}`) ;
      const label = document.querySelector(`.contact__content__right__${number}__label__${name}`);
      if (input.value.length === 0) {
        label.classList.remove(`contact__content__right__second__label__${name}--focus`);
      }

    },
    sendEmail() {
      this.sendMessage = 'sending'
      emailjs.sendForm('service_v6uky3m', 'template_sc10diy', this.$refs.form, 'user_hL7WoXlwucZBJGlQ2JtNK')
          .then((result) => {
            this.sendMessage = 'isSend'
            setTimeout(() => {
              this.sendMessage = ''
            }, 4000 )
            console.log('SUCCESS!', result.text);
          }, (error) => {
            this.sendMessage = "error"
            setTimeout(() => {
              this.sendMessage = ''
            } , 4000 )
            console.log('FAILED...', error.text);
          });
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "contact";
</style>
