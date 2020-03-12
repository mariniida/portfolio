<template>
	<div class="section">
		<prismic-rich-text :field="slice.primary.title1"/>
  <div>
		<div v-for="item in slice.items" :key="item.id">
    <prismic-rich-text id="prismic" class="width80 textLeft" :field="slice.item.paragraph"/>
	</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-title-slice'
}
</script>
