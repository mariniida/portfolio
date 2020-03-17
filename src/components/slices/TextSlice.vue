<template>
  <div class="section">
    	<prismic-rich-text id="prismic" class="responsiveWidth" :field="slice.primary.paragraph"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>
