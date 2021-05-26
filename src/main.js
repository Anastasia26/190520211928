import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/style.scss"
Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueFilterDateFormat);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
