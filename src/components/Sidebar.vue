<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> Dashboard</router-link>
        </li>
        
        <li class="nav-item">
          <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/article'}" disabled>
            <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-puzzle"></i> 内容管理</div>
            <ul class="nav-dropdown-items">
              <li class="nav-item">
                <router-link :to="'/article'" class="nav-link" exact><i class="icon-puzzle"></i> 英雄联盟</router-link>
                
              </li>
              <li class="nav-item">
                <router-link :to="'/components/social-buttons'" class="nav-link" exact><i class="icon-puzzle"></i> 王者荣耀</router-link>
              </li>
            </ul>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> 图片管理 </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> 会员管理 </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link"><i class="icon-speedometer"></i> 系统设置 </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
