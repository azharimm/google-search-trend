import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'

Vue.config.productionTip = false
Vue.use(VueTyperPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
