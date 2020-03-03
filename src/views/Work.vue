<template>
  <div class="page">
    <h1>ind works</h1>



  <!--<div class="wrapper">
<prismic-rich-text :field="fields.description" class="description"/>

    <div class="cta-wrapper">
      <prismic-link :field="fields.ctaLink" class="cta">
        {{ $prismic.richTextAsPlain(fields.ctaText) }}
      </prismic-link>
    </div>

    <div class="icon-wrapper">
      <prismic-image :field="fields.icon" class="icon"/>
    </div>
  </div>
  uid
  title
  tool
  thumbnail(img)
  tag
  themeColor
  imagegallery
  text

  <section v-for="(slice, index) in slices" :key="'slice-' + index">

  <template v-if="slice.slice_type === 'description'">

    <prismic-rich-text :field="slice.primary.rich_text"/>

  </template>

  <template v-else-if="slice.slice_type === 'photo_gallery'">

    <prismic-rich-text :field="slice.primary.title"/>

    <template v-for="(item, index) in slice.items">

      <prismic-image :field="item.image" :key="'photo-item-' + index"/>

    </template>

  </template>

</section>
-->
</div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      documentId: '',
      work: {
        uid:null,
        title:null,
        tool:null,
        thumbnail:null,
        tag:null,
        themeColor:null,
        description:null,
        slices:[],
      },
    }
  },
  methods: {
    getContent (uid) {
      this.$prismic.client.getByUID('work', uid)
      .then((document) => {
        if (document) {
          this.documentId = document.id
          this.work.title = document.data.title
          this.work.themeColor = document.data.themeColor
          this.work.tool=document.data.tool
          this.work.thumbnail=document.data.thumbnail
          this.work.tag=document.data.tag
          this.work.description = document.data.description
          this.work.slices=documnt.data.body

        } else {
          this.$router.push({ name: 'not-found' })
        }
      })
    }
  },
  created () {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>

<style scoped>

</style>
