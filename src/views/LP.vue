<template>
  <div>
		<div class="landingSection flexContainer tileContainer">
			<el-image class="flexItem"
			 style="width: 500px; height: 570px"
			 :src="profile.img" fit="cover">
				 <div slot="placeholder">
					 <h4 class="slottext">Loading...</h4>
				 </div>
			</el-image>

			<div class="flexItem">
				<h1>Hi, there. {{profile.tagLine}}</h1>
				<h3>{{profile.bio}}</h3>
			</div>

		</div>
  </div>
</template>

<script>

export default {
  name: 'landing',
  data () {
    return {
			profile:{
        tagLine:"I'm Marin Iida.",
        bio:"An aspiring UI/UX designer based in Japan (for now).",
        img: require("../assets/IMG_2338.jpg"),
      },
    }
  }
}
</script>

<style scoped>
.landingSection{
	margin: 20px 0px;
}

</style>
