<template>
  <div class="sidebar">
    <div class="sidebar-nav">
      <el-menu mode="vertical" theme="dark" :default-active="$route.path">
        <sidebar-item :routes='permission_routers'></sidebar-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  name: 'sidebar',
  components: { SidebarItem },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  },
  route: {
    data: function(transition){
      transition.next({
          currentPath: transition.to.path
      })
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  },
  
  created (){
    console.log('路由白名单', this.permission_routers)

  },
  methods: {

  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
  .el-menu--dark {
      background-color: #263238;
  }
</style>
