import Vue from 'vue'
import VueLayoutComposer from 'vue-layout-composer'
import App from './App.vue'

Vue.use(VueLayoutComposer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
