<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar/>
      <main class="main">
      <div class="product-main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '../components/Header'
import Sidebar from '../components/Sidebar'
import AppFooter from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppFooter,
    Breadcrumb
  },
  computed: {
    name () {
      return this.$route.name
    },

    list () {
      return this.$route.matched
    }
  }
}
</script>
<style>
.header-fixed .app-body {
  margin-top: 0;
    position: absolute;
    width: 100%;
    top: 55px;
    bottom: 0px;
}
.aside-menu-fixed.aside-menu-hidden .main {
    width: auto;
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    overflow: hidden;
}
.product-main {
    position: absolute;
    width: auto;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: hidden;
    overflow-y: auto;
    -o-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
}
</style> 