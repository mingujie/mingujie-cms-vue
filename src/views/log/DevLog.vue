<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            开发日志：
          </div>
          <div class="card-block">
           <devlog-md></devlog-md>
          </div>
        </div>
      </div><!--/.col-->
    </div>
  </div>
</template>

<script>
import DevlogMd from '@/markdown/devlog.md'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
export default {
  name: 'devlog',
  components: { DevlogMd },
  data () {
    return {
    }
  },
  methods: {


  }
}
</script>
<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>