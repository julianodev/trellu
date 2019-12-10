import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/board/:id/:name',
    name: 'board',
    component: () => import('../views/Board.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
