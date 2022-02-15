import { createApp } from 'vue'
import App from './App.vue'
const title = document.querySelector('title');
title.textContent = 'Nicolas Vitry - Développeur web';
createApp(App).mount('#app')
