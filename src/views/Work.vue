<template>
  <div class="page">
    <h1 :style="{ color: work.themeColor }">
      {{ $prismic.richTextAsPlain(work.title) }}</h1>
    <h2>{{work.themeColor}}</h2>

    <h3>{{work.title}}</h3>
    <h1>{{work.title.text}}</h1>
    <prismic-image
    style="width: 100%; height: auto" :field="work.thumbnail"/>

    <el-image
      style="width: 100px; height: 100px"
      :src="work.thumbnail.u"
      :fit="fit"></el-image>
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
