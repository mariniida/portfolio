<template>
  <div>
    	<prismic-rich-text id="prismic" class="responsiveWidth textLeft" :field="slice.primary.paragraph"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>
