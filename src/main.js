// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('../static/fire.js');
Vue.config.productionTip = false

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
*/







new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
})