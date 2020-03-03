<template>
  <el-menu
  mode="horizontal"
  :router="true"
  active-text-color="#2B2D62">
  <el-menu-item index="Landing">icon</el-menu-item>
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
      activeColor: "var(--Gradient5)",
    }
  }
}
</script>
<style>


</style>
