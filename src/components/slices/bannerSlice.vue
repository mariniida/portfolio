<template>
  <div class="section">
	 	<prismic-rich-text :field="slice.primary.bannertitle"/>
		<ul>
				<li class="flexContainer tileContainer" v-for="item in slice.items" :key="item.id">
					<div class="flexItem halfImg">
						<el-image
			        :src="item.bannerimg.url"
			        fit="contain"></el-image>
					</div>
					<div class="flexItem sliceText textLeft" id="prismic">
            <p>{{ $prismic.richTextAsPlain(item.bannertext) }}</p>
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

@media screen and (min-width: 768px) {
  /* Blog post images */
  .block-img.emphasized {
    width: 130%;
    margin: 0 -15% 2rem -15%;
  }
}
</style>
