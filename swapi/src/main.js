import Vue from 'vue'
import App from './App.vue'
import People from './components/People.vue'
import Planets from './components/Planets.vue'
import Details from './components/PersonDetails.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: People },
  { path: '/people', component: People },
  { path: '/people', component: People },
  { path: '/people/:id', component: Details },
  { path: '/planets', component: Planets },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
