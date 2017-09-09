<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>    <a class="navbar-brand" href="#"></a>
    <ul class="nav navbar-nav d-md-down-none mr-auto">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarToggle">&#9776;</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <dropdown size="nav" class="nav-item">
        <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" :alt="avatar">
          <span class="d-md-down-none">admin</span>
        </span>
        <div slot="dropdown-menu"class="dropdown-menu dropdown-menu-right">
          <a class="dropdown-item" @click="logout"><i class="fa fa-lock"></i> Logout</a>
        </div>
      </dropdown>
      <li class="nav-item hidden-md-down"><a href="javascript:;" class="nav-link navbar-toggler aside-menu-toggler">☰</a></li>
    </ul>

  </navbar>
</template>
<script>
import { mapGetters } from 'vuex'
import navbar from './Navbar'
import { dropdown } from 'vue-strap'

export default {
  name: 'header',
  components: {
    navbar,
    dropdown
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    click () {
      // do nothing
    },
    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    },
    logout() {
      this.$store.dispatch('Logout').then(() => {
        location.reload()  // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>
<style>
  .dropdown-menu {
    top: 42px;
    cursor: pointer;
  }
</style>