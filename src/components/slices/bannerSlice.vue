<template>
  <div class="section">
	 	<prismic-rich-text :field="slice.primary.bannertitle"/>
		<ul>
				<li class="flexContainer tileContainer" v-for="item in slice.items" :key="item.id">
					<div class="flexItem halfWidth">
						<el-image
			        :src="item.bannerimg.url"
			        fit="contain"></el-image>
					</div>
					<div class="flexItem halfWidth textLeft" id="prismic">
						<prismic-rich-text :field="item.bannertext"/>
          </div>
				</li>
		</ul>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'bannerSlice',
}
</script>

<style>
img{
	width: 80%;
}

</style>
