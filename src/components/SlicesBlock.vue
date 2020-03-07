<template>
    <div class="container">
        <!-- Slice section template -->
        <section v-for="(slice, index) in slices" :key="'slice-' + index">

            <!-- Image Gallery slice component -->
            <template v-if="slice.slice_type === 'image_gallery'">
                <image-gallery :slice="slice"/>
            </template>

        </section>
    </div>
</template>

<script>
 import ImageGallery from './slices/ImageGallery.vue';

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    ImageGallery,
  },
}
</script>
