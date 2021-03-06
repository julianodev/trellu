import Vue from 'vue';
import App from './App.vue';
import router from './core/router';
import store from './store';
import './registerServiceWorker';
import 'bulma/css/bulma.css'

Vue.config.productionTip = false;

Vue.component('app-header', () => import('@/components/shared/header/Header.vue'));
Vue.component('app-navbar', () => import('@/components/shared/navbar/Navbar.vue'));
Vue.component('app-card', () => import('@/components/card/Card.vue'));
Vue.component('app-list', () => import('@/components/list/List.vue'));
Vue.component('app-board', () => import('@/components/board/Board.vue'));
Vue.component('app-button-icon', () => import('@/components/shared/button-icon/ButtonIcon.vue'));
Vue.component('app-dialog', () => import('@/components/shared/dialog/Dialog.vue'));


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
