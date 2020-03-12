<template>
    <div>
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">

            <!-- Image Gallery slice component -->
            <template v-if="slice.slice_type === 'image_gallery'">
                <image-gallery :slice="slice"/>
            </template>

						<!-- Text slice template -->
            <template v-else-if="slice.slice_type === 'text'">
                <!-- Here :slice="slice" passes the data to the component -->
                <text-slice :slice="slice"></text-slice>
            </template>

						<!-- Text with title slice template -->
            <template v-else-if="slice.slice_type === 'text_with_title'">
                <!-- Here :slice="slice" passes the data to the component -->
                <text-title-slice :slice="slice"></text-title-slice>
            </template>

						<!-- Image with caption template -->
						<template v-else-if="slice.slice_type === 'image_with_caption'">
                <image-caption-slice :slice="slice"></image-caption-slice>
            </template>

						<!-- Banner template -->
						<template v-else-if="slice.slice_type === 'image_with_paragraph'">
                <bannerSlice :slice="slice"></bannerSlice>
            </template>

						<!-- Embed Link template -->
						<template v-else-if="slice.slice_type === 'embed'">
                <embedLinkSlice :slice="slice"></embedLinkSlice>
            </template>

        </section>
    </div>
</template>

<script>
	import ImageGallery from './slices/ImageGallery.vue';
	import TextSlice from './slices/TextSlice.vue';
	import embedLinkSlice from './slices/embedLink.vue';
	import bannerSlice from './slices/bannerSlice.vue';
	import ImageCaptionSlice from './slices/ImageCaptionSlice.vue';
	import TextWithTitleSlice from './slices/TextWithTitleSlice.vue';


export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    ImageGallery,
		ImageCaptionSlice,
		TextSlice,
		embedLinkSlice,
		bannerSlice,
		TextWithTitleSlice
  },
}
</script>
