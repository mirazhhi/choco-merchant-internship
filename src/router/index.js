import VueRouter from 'vue-router'
import Deals from '../deals.vue'


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/deals',
      name: 'Deals',
      component: Deals
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})
