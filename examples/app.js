import './app.css'
import Vue from 'vue'
import GitHubButtons from 'buttons'
import App from './components/App.vue'
Vue.use(GitHubButtons)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
