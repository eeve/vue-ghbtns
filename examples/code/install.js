export default {
  installViaCDN: {
    lang: 'html',
    code: `
    <script src="//vuejs.org/js/vue.min.js"></script>
    <script src="//unpkg.com/vue-ghbtns/dist/index.min.js"></script>`
  },
  installViaYarn: {
    lang: 'bash',
    code: `
    yarn add vue-ghbtns`
  },
  usage: {
    lang: 'javascript',
    code: `
    import Vue from 'vue'
    import GitHubButtons from 'vue-ghbtns'
     
    Vue.use(GitHubButtons)
     
    new Vue({
      el: '#app',
      methods: {
        updated(count) {
          console.log('update:' + count)
        }
      }
    })`
  },
  usageVue: {
    lang: 'html',
    code: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Github Buttons</title>
    </head>
    <body>
      <div id="app">
        <GitHubButtons repository="vuejs/vue" type="watch" @on-updated="updated"></GitHubButtons>
        <GitHubButtons repository="vuejs/vue" type="star"  @on-updated="updated"></GitHubButtons>
        <GitHubButtons repository="vuejs/vue" type="fork"  @on-updated="updated"></GitHubButtons>
        <GitHubButtons repository="vuejs/vue" type="follow"></GitHubButtons>
        <GitHubButtons repository="vuejs/vue" type="issue"></GitHubButtons>
        <GitHubButtons repository="vuejs/vue" type="download"></GitHubButtons>
      </div>
    </body>
    </html>`
  }
}
