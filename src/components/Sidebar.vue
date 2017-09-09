<template>
  <div class="sidebar">
  <div class="sidebar-nav">
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
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

        console.log(transition)
          transition.next({
              currentPath: transition.to.path
          })
      }
  },
  name: 'sidebar',
  created (){
   // this.navMenuActive = this.$store.state.sidebar.navMenuActive
    //console.log(this.navMenuActive)
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
