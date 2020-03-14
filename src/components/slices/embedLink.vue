<template>
  <div class='link'>
  	<prismic-embed :field="slice.primary.url"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'embedLinkSlice'
}
</script>

<style>

.link{
	position: relative;
	padding-top: 50%;
	margin: 0 auto;
}

.link iframe{
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
}
</style>
