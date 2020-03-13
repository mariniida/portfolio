<template>
  <div v-loading.fullscreen="loading" class="page width80">
			<h1>{{$prismic.richTextAsPlain(work.title)}}</h1>
			<p>{{work.tag}}: {{$prismic.richTextAsPlain(work.tool)}}</p>
			<div class="section">
		    <div class="flexContainer tileContainer">
					<el-image class="flexItem workLPImage halfWidth"
		        :src="work.landingImg.url"
		        fit="contain">
						<div slot="placeholder" class="slot">
							<p class="slottext">Loading...</p>
						</div>
					</el-image>
					<div class="flexItem section description">
			      <prismic-rich-text class="textLeft " :field="work.description"/>
					</div>
				</div>
		</div>
		<slices-block class="prismic" :slices="work.slices"/>
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
        uid: '',
        title: '',
        tool: '',
        landingImg: '',
        tag: '',
        description: '',
        slices: [],
      },
			loading: true,

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
					this.loading=false;

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

<style>
.workLPImage {
  width: 50%;
	height: auto;
}

.description {
  width: 45%;
}

</style>
