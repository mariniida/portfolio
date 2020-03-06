<template>
  <el-menu
  mode="horizontal"
	:default-active="activeIndex"
  :router="true"
  :active-text-color="activeColor">
  <el-menu-item index="work" :route="{ name:'Works' }">Works</el-menu-item>
  <el-menu-item index="contact" :route="{ name:'Contact' }">Contact</el-menu-item>
  <el-menu-item index="aboutme" :route="{ name:'AboutMe' }">About me</a>
  </el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      activeColor: "var(--keyColor)",
			activeIndex: 'work',
    }
  }
}
</script>
<style>
</style>
