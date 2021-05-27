import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/router/Home.vue'
import About from './components/router/About.vue'
import Contact from './components/router/Contact.vue'
import product from './components/router/product.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes=[
  {path:"/",component: Home},
  {path:"/about",component: About},
  {path:"/contact",component: Contact},
  {path:"/product",component: product}
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
