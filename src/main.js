import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
import store from './store'


Vue.config.productionTip = false
Vue.use(VueTyperPlugin)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
