<template>
	<div class="section">
	 	<div v-if="$prismic.richTextAsPlain(slice.primary.captiontitle) != ''">
			  <prismic-rich-text id="prismic" :field="slice.primary.captiontitle"/>
		</div>
			<li v-for="item in slice.items" :key="item.id">
				<div >
					<prismic-image :field="item.image"  />
				</div>
	      <p class="image-label">
					{{ $prismic.richTextAsPlain(item.caption)}}
				</p>
		</li>

  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-caption-slice',
}
</script>

<style scoped>

.image-label {
  display: block;
  text-align: center;
  font-style: italic;
  font-size: 1.5rem;
  color: #949494;
	margin-bottom: 5rem;
}



</style>
