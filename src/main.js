import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Signin from './Signin.vue'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Signin }
    ]
  }),
});
