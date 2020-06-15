import Vue from 'vue'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Loader from './components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import currencyFilter from './filters/currency.filter'
import dateFilter from './filters/date.filter'
import tooltipDirective from './directives/tooltip.directive'
import MessagePlugin from './message-plugin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(MessagePlugin)
Vue.use(Vuelidate)

Vue.component('paginate', Paginate)
Vue.component('loader', Loader)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
Vue.directive('tooltip', tooltipDirective)

firebase.initializeApp({
  apiKey: "firenase-api-key",
  authDomain: "firebase-domain",
  databaseURL: "firebase-database-url",
  projectId: "firebase_project-id",
  storageBucket: "firebase-storage-bucket",
  messagingSenderId: "firebase-message-sender-id",
  appId: "firebase-app-id",
  measurementId: "measurementId"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
