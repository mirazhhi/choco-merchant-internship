import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Deals from './deals.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/deals',
      // name: 'Deals',
      component: Deals
    },
    // {
    //   path: '*',
    //   name: 'notFound',
    //   component: NotFound
    // },
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
