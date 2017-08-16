<template>
  <div class="sidebar">
    <el-menu default-active="2" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-document"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">PC系列</template>
          <el-menu-item index="1-1">英雄联盟</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">手游系列</template>
          <el-submenu index="1-4">
            <template slot="title">王者荣耀</template>
            <el-menu-item index="1-4-2" @click="$router.push({ path: '/content/articleform'})">新闻</el-menu-item>
            <el-menu-item index="1-4-3">皮肤</el-menu-item>
            <el-menu-item index="1-4-4">视频</el-menu-item>
            <el-menu-item index="1-4-5">图片</el-menu-item>
          </el-submenu>
        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-picture"></i>图片管理</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>会员管理</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>系统设置</el-menu-item>
    </el-menu>
<!--     <nav class="sidebar-nav">
      <ul class="nav">
        
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
          <router-link :to="'#'" class="nav-link"><i class="icon-speedometer"></i> 图片管理 </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'@'" class="nav-link"><i class="icon-speedometer"></i> 会员管理 </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'#'" class="nav-link"><i class="icon-speedometer"></i> 系统设置 </router-link>
        </li>
      </ul>
    </nav> -->
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    },
    handleOpen () {

    },
    handleClose () {

    }
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
