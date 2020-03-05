<template>
  <div class="page">
    <div class="workLP">
      <h1>{{$prismic.richTextAsPlain(work.title)}}</h1>
      <el-image
        :src="work.landingImg.url"
        :fit="contain"></el-image>
    </div>
    <slices-block :slices="work.slices"/>
    <p class="themeColor">{{work.tag}}: {{$prismic.richTextAsPlain(work.tool)}}</p>
    <div class="section description">
      <prismic-rich-text :field="work.description"/>
      <!-- <p>{{$prismic.richTextAsPlain(work.description)}}</p>-->
    </div>
</div>
</template>

<script>
import SlicesBlock from '../components/SlicesBlock.vue'

export default {
  name: 'Work',
  components:{
    SlicesBlock,
  },
  data () {
    return {
      documentId: '',
      work: {
        uid:null,
        title:null,
        tool:null,
        landingImg:null,
        tag:null,
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
          this.work.tool = document.data.tool
          this.work.landingImg = document.data.landingimg
          this.work.tag = document.data.tag
          this.work.description = document.data.description
          this.work.slices = document.data.body

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

.workLP {
  margin: 0 auto;
  width: 90%;
}

.description {
  margin: 0 auto;
  padding: 20px;
  width: 80%;
}

</style>
