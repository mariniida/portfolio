<template>
  <div class="section">
    <el-carousel trigger="click" max-height="500px"
        indicator-position="outside"
        arrow="always">
        <el-carousel-item v-for="(item, index) in slice.items"  :key="index">
          <el-image
          :src="item.gallery_image.url"
          fit="contain" ></el-image>
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'image-gallery',

}
</script>

<style scoped>
.el-image {
  height:100%;
}
</style>
