<template>
  <div class='post-part single container'>
  	<prismic-embed :field="slice.primary.url"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'embedLinkSlice'
}
</script>
