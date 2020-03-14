<template>
  <div>
		<div v-if="$prismic.richTextAsPlain(slice.primary.bannertitle) != ''">
	 		<prismic-rich-text id="prismic" :field="slice.primary.bannertitle"/>
		</div>
		<ul>
				<li class="flexContainer tileContainer"
				v-for="item in slice.items" :key="item.id">
					<div class="flexItem halfWidth">
						<el-image
			        :src="item.bannerimg.url"
			        fit="contain"></el-image>
					</div>
					<div class="flexItem halfWidth textLeft" id="prismic">
						<prismic-rich-text :field="item.bannertext"/>
          </div>
					<div class="dashed"></div>
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

</style>
