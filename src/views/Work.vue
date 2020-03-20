<template>
  <div v-loading.fullscreen="loading" class="page">
			<h1>{{$prismic.richTextAsPlain(work.title)}}</h1>
			<p>{{work.tag}}: {{$prismic.richTextAsPlain(work.tool)}}</p>

			<div id="prismic" class="subsection">
		    <div class="flexContainer tileContainer">
					<el-image class="flexItem halfWidth"
		        :src="work.landingImg.url"
		        fit="contain">
						<div slot="placeholder" class="slot">
							<p class="slottext">Loading...</p>
						</div>
					</el-image>
					<div class="flexItem section description">
			      <prismic-rich-text class="textLeft" :field="work.description"/>
					</div>
				</div>
			</div>
			<el-collapse class="responsiveWidth">
			  <el-collapse-item title="詳細を見る" name="1" >
			    <slices-block :slices="work.slices"/>
	  		</el-collapse-item>
			</el-collapse>
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
.description {
  width: 450px;
}
</style>
