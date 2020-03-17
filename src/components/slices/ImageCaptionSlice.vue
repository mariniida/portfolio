<template>
	<div class="section">
	 	<div v-if="$prismic.richTextAsPlain(slice.primary.captiontitle) != ''">
			  <prismic-rich-text id="prismic" :field="slice.primary.captiontitle"/>
		</div>
			<li v-for="item in slice.items" :key="item.id">
				<div class="imgCaption">
					<prismic-image :field="item.image" class="imgCaption"/>
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

<style>

.image-label {
  display: block;
  text-align: center;
  font-style: italic;
  font-size: 14px;
  color: #949494;
	margin-bottom: 5rem;
}

.imgCaption{
	max-height: 500px;
    object-fit: contain;
}


</style>
