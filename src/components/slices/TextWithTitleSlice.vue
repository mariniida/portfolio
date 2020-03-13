<template>
	<div class="section">
		<prismic-rich-text id="prismic" :field="slice.primary.title1"/>
	  <prismic-rich-text class="width80 textLeft dashed" id="prismic"
		:field="slice.primary.paragraph"/>
	</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'TextWithTitleSlice'
}
</script>
