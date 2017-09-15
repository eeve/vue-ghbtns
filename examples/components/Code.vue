<template>
  <div>
    <pre :class="{bg: bg}"><code :class="language" ref="code"><slot></slot></code></pre>
    <span class="copy" @click="clip">
      <button v-show="!copied">
        <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>
      </button>
      <button v-show="copied" class="copied">
        <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>
        <span>coped</span>
      </button>
    </span>
  </div>
</template>

<script>
  import hljs from 'hljs'
import Clipboard from 'clipboard'
export default {
    props: {
      lang: {
        type: String,
        default: 'javascript'
      },
      bg: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        code: '',
        copied: false,
        docLang: this.$lang
      }
    },
    computed: {
      language () {
        if (this.lang === 'auto') {
          return ''
        } else {
          return this.lang
        }
      }
    },
    mounted () {
      this.code = this.$refs.code.innerHTML.replace(/\n/, '')
      this.$refs.code.innerHTML = this.code
      hljs.highlightBlock(this.$refs.code)
    },
    methods: {
      clip () {
        const code = this.code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
        const clipboard = new Clipboard('.copy', {
          text () {
            return code
          }
        })
        clipboard.on('success', (e) => {
          e.clearSelection()
          clipboard.destroy()
          this.copied = true
          console.log('代码已复制到剪贴板')
          setTimeout(() => {
            this.copied = false
          }, 20000)
        })
      }
    }
  }
</script>

<style scoped>
  div {
    position: relative;
    font-size: 14px;
  }

  pre.bg code {
    background: #efefef;
  }

  span.copy {
    border-radius: 0 0 3px 3px;
    padding: 2px 5px;
    position: absolute;
    top: 5px;
    right: 0;
    color: #b2b2b2;
    cursor: pointer;
  }

  .bg+span.copy {
    right: 5px;
  }

  .copied {
    color: #5cb85c;
  }
  
  .copied svg {
    vertical-align: super;
  }

  span.copy:hover {
    color: #5c6b77;
  }
</style>
