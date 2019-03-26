// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { router } from './router'
import { store } from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIdCard, faCheckCircle, faTimesCircle, faChevronDown, faSpinner, faCheck, faColumns, faTags, faCog, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


library.add(faIdCard, faCheckCircle, faTimesCircle, faChevronDown, faSpinner, faCheck, faColumns, faTags, faCog, faWallet)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
