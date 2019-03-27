// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { router } from './router'
import { store } from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIdCard, faCheckCircle, faTimesCircle, faChevronDown, faSpinner, faCheck, faColumns, faTags, faCog, faWallet, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import firebase from 'firebase'


library.add(faIdCard, faCheckCircle, faTimesCircle, faChevronDown, faSpinner, faCheck, faColumns, faTags, faCog, faWallet, faSignOutAlt, faUserAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

let app = null

//Wait for firebase to init before creating
firebase.auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })
  }

})