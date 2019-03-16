import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import checkPermissionsGuard from "./guards/checkPermissionsGuard";
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import(/* webpackChunkName: "vote" */ './views/Vote.vue')
    },
    {
      path: '/score',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ './views/Vote.vue')
    },
    {
      // beforeEnter: checkPermissionsGuard,
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    }
  ]
})
