<template>
	<div class="section">
		<prismic-rich-text :field="slice.primary.title1"/>
	  <prismic-rich-text class="width80 textLeft" id="prismic"
		:field="slice.primary.paragraph"/>
	</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'TextWithTitleSlice'
}
</script>
