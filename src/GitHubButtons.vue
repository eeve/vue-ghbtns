<template>
  <div class="star clearfix">
    <a :href="btnUrl" class="btn-icon" target="_blank">
      <template v-if="type === 'star'">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        <span>Star</span>
      </template>
      <template v-if="type === 'fork'">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <span>Fork</span>
      </template>
      <template v-if="type === 'watch'">
        <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
        <span>Watch</span>
      </template>
      <template v-if="type === 'follow'">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        <span>Follow</span>
      </template>
      <template v-if="type === 'issue'">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="16"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span>Issue</span>
      </template>
      <template v-if="type === 'download'">
        <svg aria-hidden="true" class="octicon octicon-cloud-download" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>
        <span>Download</span>
      </template>
    </a>
    <a :href="textUrl" class="social-count" target="_blank">
      <Loading v-if="!text" />
      <template v-else >{{ text }}</template>
    </a>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from './Loading'
export default {
  name: 'GitHubButtons',
  components: {
    Loading
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'star',
      validator (value) {
        return ['star', 'fork', 'watch', 'follow', 'issue', 'download'].indexOf(value) !== -1
      }
    },
    repository: {
      type: String,
      required: true,
      validator (value) {
        return value.split('/').length === 2
      }
    }
  },
  data () {
    return {
      text: null
    }
  },
  computed: {
    textUrl () {
      if (!this.repository) {
        return null
      }
      if (this.type === 'follow') {
        return `https://github.com/${this.user}/followers`
      }
      if (this.type === 'issue') {
        return `https://github.com/${this.repository}/issues`
      }
      if (this.type === 'download') {
        return `https://github.com/${this.repository}/releases`
      }
      return `https://github.com/${this.repository}`
    },
    btnUrl () {
      let endpoint = ''
      switch (this.type) {
        case 'fork':
          endpoint = '/fork'
          break
        case 'watch':
          endpoint = '/subscription'
          break
      }
      return this.textUrl ? `${this.textUrl}${endpoint}` : null
    },
    user () {
      return this.repository ? this.repository.split('/')[0] : null
    },
    api () {
      return this.repository ? `https://bird.ioliu.cn/v1?url=https://github.com/${this.repository}` : null
    }
  },
  watch: {
    repository () {
      this.loaded()
    },
    count () {
      this.$emit('on-updated', this.text.replace(/,/, ''))
    }
  },
  beforeMount () {
    this.loaded()
  },
  methods: {
    getRegx () {
      switch (this.type) {
        case 'star':
          return /<a\sclass=".*"\shref=".*"\s+aria-label="\d+\susers\sstarred\sthis\srepository">\s+((\w+?,?\w+?)?(\d)?)\s+<\/a>/g
        case 'fork':
          return /<a\shref=".*"\sclass=".*"\s+aria-label="\d+\susers\sforked\sthis\srepository">\s+((\w+?,?\w+?)?(\d)?)\s+<\/a>/g
        case 'watch':
          return /<a\sclass=".*"\shref=".*"\s+aria-label="\d+\susers\sare\swatching\sthis\srepository">\s+((\w+?,?\w+?)?(\d)?)\s+<\/a>/g
      }
    },
    async loaded () {
      if (!this.api) { return }
      if (this.type === 'follow') {
        this.text = `@${this.user}`
        return
      }
      if (this.type === 'issue' || this.type === 'download') {
        this.text = `${this.repository}`
        return
      }
      const { data } = await axios.get(this.api)
      if (data instanceof Object && data.status.code === -1) {
        this.text = '?'
        return
      }
      const regex = this.getRegx()
      let m
      while ((m = regex.exec(data)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++
        }
        this.text = m[1]
      }
    }
  }
}
</script>

<style scoped>
  .clearfix {
    overflow: auto;
    _height: 1%;
  }
  .star {
    display: inline-block;
    box-sizing: border-box;
  }
  .star > a {
    float: left;
    padding: 3px 10px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    outline-width: 0;
    vertical-align: middle;
    user-select: none;
    white-space: nowrap;
    text-transform: none;
    border: 1px solid rgba(27,31,35,0.2);
    color: #24292e;
    -webkit-appearance: none;
  }
  .star .octicon {
    vertical-align: text-top;
  }
  .star .btn-icon {
    border-radius: 0.25em;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .star .btn-icon:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
  }
  .star a.social-count {
    background-color: #fff;
    border-left: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .star a.social-count:hover {
    color: #0366d6;
  }
</style>

