<template>
  <el-menu
  mode="horizontal"
  :router="true"
  :active-text-color="activeColor">
  <el-menu-item index="work">Works</el-menu-item>
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
      activeColor: "var(--keyColor)",
    }
  }
}
</script>
<style>


</style>
