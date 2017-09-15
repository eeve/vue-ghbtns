<template>
  <div class="example">
    <h1>GitHub buttons</h1>
    <GitHubButtons repository="eeve/vue-ghbtns" type="star"></GitHubButtons>
    <GitHubButtons repository="eeve/eeve" type="follow"></GitHubButtons>
    <p class="sub-title">Showcase your GitHub repo's success with hotlinkable GitHub star, fork, issue, download or follow buttons.</p>
    
    <div class="split-line"></div>
    <h1>Demo</h1>
    <h2>React</h2> 
    <GitHubButtons repository="facebook/react" type="watch"></GitHubButtons>
    <GitHubButtons repository="facebook/react"></GitHubButtons>
    <GitHubButtons repository="facebook/react" type="fork"></GitHubButtons>
    <GitHubButtons repository="facebook/react" type="follow"></GitHubButtons>
    <GitHubButtons repository="facebook/react" type="issue"></GitHubButtons>
    <GitHubButtons repository="facebook/react" type="download"></GitHubButtons>

    <h2>Vue</h2>
    <GitHubButtons repository="vuejs/vue" type="watch"></GitHubButtons>
    <GitHubButtons repository="vuejs/vue"></GitHubButtons>
    <GitHubButtons repository="vuejs/vue" type="fork" @on-updated="updated"></GitHubButtons>
    <GitHubButtons repository="vuejs/vue" type="follow"></GitHubButtons>
    <GitHubButtons repository="vuejs/vue" type="issue"></GitHubButtons>
    <GitHubButtons repository="vuejs/vue" type="download"></GitHubButtons>
    
    <div class="split-line"></div>

    <h1>Installation</h1>

    <p>Via NPM:</p>
    <a href="">
      <img src="https://nodei.co/npm/vue-ghbtns.png?downloads=true&downloadRank=true&stars=true" alt="NPM">
    </a>

    <p>Via Yarn:</p>
    <iCode :lang="codes.installViaYarn.lang" bg>{{ codes.installViaYarn.code }}</iCode>

    <p>Via CDN:</p>
    <iCode :lang="codes.installViaCDN.lang" bg>{{ codes.installViaCDN.code }}</iCode>


    <div class="split-line"></div>


    <h1>Usage</h1>
    <iCode :lang="codes.usage.lang" bg>{{ codes.usage.code }}</iCode>
    <iCode :lang="codes.usageVue.lang" bg>{{ codes.usageVue.code }}</iCode>

    <div class="split-line"></div>



    <h1>API</h1>
    <h2>props</h2>
    <div class="responsive">
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
            <th>Optional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>repository</td>
            <td>github repository, eg: facebook/react</td>
            <td>String</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>type</td>
            <td>button type</td>
            <td>String</td>
            <td>star</td>
            <td>star, fork, watch, follow, issue, download</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>events</h2>
    <div class="responsive">
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Description</th>
            <th>Return Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>on-updated</td>
            <td>Emitted when count loaded. Only when the type is equal to star, fork, watch</td>
            <td>count</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="split-line"></div>

    <h1>License</h1>
    <p>MIT</p>

    <a href="https://github.com/eeve/vue-ghbtns"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"></a>
  </div>
</template>

<script>
  import iCode from './Code'
  import Codes from '../code/install'
  export default {
    components: {
      iCode
    },
    data () {
      return {
        codeLang: 'html',
        codes: Codes
      }
    },
    methods: {
      updated (count) {
        console.log(`vuejs/vue fork ${count}`)
      }
    }
  }
</script>

<style>
  body {
    font: 14px/1.6 Source Sans Pro,Calibri,Candara,Arial,sans-serif;
  }
  .sub-title {
    font-size: 1.1rem;
  }
  .star {
    margin-right: 1rem;
  }
  .split-line {
    border-bottom: 1px solid #eee;
    margin: 3rem 0;
  }
  .responsive {
    width: 100%;
    overflow-x: auto;
  }
  table {
    border-collapse:collapse;
  }
  table tr th {
    background: #f5f5f5;
  }
  table tr td, table tr th{
    border: 1px solid #eee;
    padding: 0.25rem 1rem;
  }
</style>
