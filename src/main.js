import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Signin from './Signin.vue'
import Signup from './Signup.vue'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', redirect: '/signin' },
      { path: '/signin', component: Signin },
      { path: '/signup', component: Signup },
    ],
  }),
});
