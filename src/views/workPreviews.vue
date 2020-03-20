<template>
  <div class="page">
<!--
    <el-tabs  tabPosition="top">
    Planning to include a filtering function based on the type of work

    <el-tab-pane
        v-for="(workType, index) in workTypes"
        :key="index"
        :label="workType"
        :name="workType">{{workType}}</el-tab-pane>
      </el-tabs>
-->
      <div v-loading.fullscreen="loading" class="section flexContainer tileContainer">
          <div class="thumbnail flexItem"v-for="(work, index) in works" >
            <router-link :to="linkResolver(work)">
              <div class="thumbnail-overlay"></div>
                <img class="thumbnail-image"
                style="width: 300px; height: 300px"
                :src="work.data.thumbnail.url">
                <div class="thumbnail-details fadeIn-top">
                  <h4>{{$prismic.richTextAsPlain(work.data.title)}}</h4>
                  <p>{{work.data.tag}}</p>
                </div>
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      workTypes:[
        'All','Graphics','UI/UX','Branding'
      ],
      documentId: '',
      works: [],
      loading: true,
      linkResolver: this.$prismic.linkResolver
    }
  },
  methods: {
    getAllWorks() {
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'work'),
        { orderings : '[document.first_publication_date]'}
        ).then((response) => {
          this.works = response.results;
          this.loading=false;
        });
    },
  },
  created () {
    this.getAllWorks();
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
}
</script>

<style>

.thumbnail {
  position: relative;
  overflow: hidden;
}

.thumbnail .thumbnail-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.thumbnail:hover .thumbnail-overlay{
  opacity: 1;
}

.thumbnail-image{
  width: 100%;
  object-fit: contain;
}

.thumbnail-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.thumbnail:hover .thumbnail-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.thumbnail-details h4{
  color: #fff;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.thumbnail-details p{
  color: #fff;
}

.fadeIn-top{
  top: 20%;
}
</style>
