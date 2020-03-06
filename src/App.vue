<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components:{
    NavBar
  }
}
</script>

<style>
@import "./style/global.css"

</style>
