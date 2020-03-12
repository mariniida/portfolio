<template>
  <div class="section">
		<prismic-rich-text :field="slice.primary.name_of_the_gallery"/>
    <el-carousel trigger="click" max-height="600px"
        indicator-position="outside"
        arrow="always" class="width80">
        <el-carousel-item v-for="(item, index) in slice.items" :key="index">
					<div v-for="(caption, index) in item.image_captions" :key="index">
						<h5 class="caption">{{caption.text}}</h5>
					</div>
					<el-image
          :src="item.gallery_image.url"
          fit="contain" >
						<div slot="placeholder" class="slot">
							<p class="slottext">Loading...</p>
						</div>
					</el-image>

        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-gallery',

}
</script>

<style scoped>
.el-image {
  height:100%;
}

.caption{
	font-style: italic;
	opacity: 80%;
}
</style>
