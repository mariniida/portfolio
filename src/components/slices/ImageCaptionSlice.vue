<template>
	<div class="section">
	 	<div v-if="$prismic.richTextAsPlain(slice.primary.captiontitle) != ''">
			  <prismic-rich-text id="prismic" :field="slice.primary.captiontitle"/>
		</div>

		<ul>
				<li v-for="item in slice.items" :key="item.id">
					<div class="width80 imgMax600">
						<prismic-image :field="item.image"/>
					</div>
          <p class="image-label">
						{{ $prismic.richTextAsPlain(item.caption)}}
					</p>
				</li>
		</ul>

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
}

</style>
