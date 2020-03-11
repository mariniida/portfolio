<template>
	<div class="section">
	 	<div v-if="$prismic.richTextAsPlain(slice.primary.captiontitle) != ''">
			  <prismic-rich-text :field="slice.primary.captiontitle"/>
		</div>

		<ul>
				<li v-for="item in slice.items" :key="item.id">
					<div class="block-img" >
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

img {
  width: 100%;
  height: auto;
}
.block-img {
  margin-bottom: 24px;
}
.image-label {
  display: block;
  text-align: center;
  font-style: italic;
  font-size: 14px;
  color: #949494;
}

/* Media Queries */
@media screen and (min-width: 768px) {
  /* Blog post images */
  .block-img.emphasized {
    width: 130%;
    margin: 0 -15% 2rem -15%;
  }
}
</style>
