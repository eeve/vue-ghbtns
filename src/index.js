import GitHubButtons from './GitHubButtons'

const install = function (Vue, opts = {}) {
  Vue.component(GitHubButtons.name, GitHubButtons)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({
  GitHubButtons
}, { install })
