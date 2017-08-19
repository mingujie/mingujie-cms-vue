<template>
  <div class="sidebar">
  <div class="sidebar-nav">
    <el-menu default-active="1" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu  index="1">
        <template slot="title"><i class="el-icon-document"></i>内容管理</template>
        <el-menu-item-group>
            <el-submenu index="1-1-1">
            <template slot="title">游戏属性</template>
            <el-menu-item index="1-1-2" @click="$router.push({ path: '/content/gameform'})">游戏</el-menu-item>
            <el-menu-item index="1-1-3" @click="$router.push({ path: '/content/roleform'})">职业</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title" index="1-2">PC系列</template>
          <el-menu-item index="1-2-1">英雄联盟</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">手游系列</template>
          <el-submenu index="1-4">
            <template slot="title">王者荣耀</template>
            <el-menu-item index="1-4-2" @click="$router.push({ path: '/content/articleform'})">新闻</el-menu-item>
            <el-menu-item index="1-4-3" @click="$router.push({ path: '/content/skinform'})">皮肤</el-menu-item>
            <el-menu-item index="1-4-4" @click="$router.push({ path: '/content/videoform'})">视频</el-menu-item>
            <el-menu-item index="1-4-5" @click="$router.push({ path: '/content/photoform'})">图片</el-menu-item>
            <el-menu-item index="1-4-6" @click="$router.push({ path: '/content/heroform'})">英雄</el-menu-item>

          </el-submenu>
        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="2" @click="$router.push({ path: '/picture'})"><i class="el-icon-picture"></i>图片管理</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>会员管理</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-setting"></i>系统设置</el-menu-item>
    </el-menu>
    </div>
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
