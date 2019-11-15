import Vue from 'vue'
import VueLayoutComposer from 'vue-layout-composer'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

Vue.use(VueApollo)
Vue.use(VueLayoutComposer)

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
