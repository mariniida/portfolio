<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">icon</el-menu-item>
  <el-menu-item index="2">Works</el-menu-item>
  <el-menu-item index="3">Contact</el-menu-item>
  <el-menu-item index="4">About me</a></el-menu-item>
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
