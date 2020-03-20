<template>
  <div class="page">
	    <ul class="tab">
				<li v-bind:class="{'active': active == 'Recommended'}"
				class="navItem" @click=getRecommendedWorks() >
					オススメ</li>
				<li v-bind:class="{'active': active === 'All'}" class="navItem" @click=getAllWorks()>All</li>
	    	<li v-bind:class="{'active': active === workType }" class="navItem"
	        v-for="(workType, index) in workTypes"
	        :key="index" :label="workType" :name="workType"
					@click=getSpecificWorks(workType)>{{workType}}</li>
	      </ul>

      <div v-loading.fullscreen="loading" class="section flexContainer tileContainer">
					<div v-if="!displayWorks.length" class="section">
						<h3 class="slotText ">No work to display in this category...</h3>
					</div>
          	<div v-for="(work, index) in displayWorks" class="thumbnail flexItem" >
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
				'Graphic','UI/UX','Branding', 'Coding','Game Design', 'Crafting', 'Other'
      ],
      documentId: '',
      allWorks: [],
			displayWorks: [],
      loading: true,
      linkResolver: this.$prismic.linkResolver,
			active: 'All'
    }
  },
  methods: {
    getAllWorks() {
			this.loading = true;
      this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'work'),
        { orderings : '[document.last_publication_date]'}
        ).then((response) => {
          this.allWorks = response.results;
					this.displayWorks = response.results;
          this.loading = false;
					this.active = 'All';
        });
    },
		getSpecificWorks(tag) {
			this.loading = true;
      this.$prismic.client.query([
				this.$prismic.Predicates.at('document.type', 'work'),
			  this.$prismic.Predicates.at('my.work.tag', tag)
			]).then((response) => {
          this.displayWorks = response.results;
          this.loading = false;
					this.active = tag;
      });
    },
		getRecommendedWorks(tag) {
			this.loading = true;
      this.$prismic.client.query([
				this.$prismic.Predicates.at('document.type', 'work'),
			  this.$prismic.Predicates.at('document.tags', ['Recommended'])
			]).then((response) => {
          this.displayWorks = response.results;
          this.loading = false;
					this.active = 'Recommended';
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

.tab li{
	font-size: 1.5rem;
	margin: 0.9rem;
	padding: 2px;
	line-height: 1.5rem;
}

.tab li:hover{
	cursor: pointer;
}

.tab li:hover, .tab li.active {
	color: #3550B2;
	transition: 0.1s;
}

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

.thumbnail-image {
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

.thumbnail:hover .thumbnail-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.thumbnail-details h4 {
  color: #fff;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.thumbnail-details p {
  color: #fff;
}

.fadeIn-top {
  top: 20%;
}
</style>
