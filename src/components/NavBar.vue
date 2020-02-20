<template>
  <el-menu :default-active="activeIndex" mode="horizontal"  router="true">
  <el-menu-item index="LandingPage">icon</el-menu-item>
  <el-menu-item index="Works">Works</el-menu-item>
  <el-menu-item index="Contact">Contact</el-menu-item>
  <el-menu-item index="AboutMe">About me</a>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}
</script>
<style>

</style>
