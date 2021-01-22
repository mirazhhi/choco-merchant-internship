import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Deals from './deals.vue'
// import Coupon_input from './coupon_input.vue'
// import App_work_sheduller from './app-work-sheduller.vue'
// import DealThumbnail from './deal-thumbnail.vue'
// import Deal_context_menu from './deal_context-menu.vue'

// import router from './router/index'

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
// Vue.component ('app-coupon', Coupon_input)
// Vue.component ('app-work-sheduller', App_work_sheduller)
// Vue.component ('dealThumbnail', Deal_thumbnail)
// Vue.component ('deal-context-menu', Deal_context_menu)

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
