<template>
  <div class="page">
    <el-tabs     tabPosition="top">
      <el-tab-pane
        v-for="(workType, index) in workTypes"
        :key="index"
        :label="workType"
        :name="workType">{{workType}}</el-tab-pane>
      </el-tabs>

      <div class="section flexContainer tileContainer">

          <div class="thumbnail flexItem" v-for="(work, index) in works">
            <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div class="thumbnail-overlay"></div>
                <img class="thumbnail-image"
                style="width: 200px; height: 200px" :src="work.thumbnail">
                <div class="thumbnail-details fadeIn-top">
                  <h4>{{work.title}}</h4>
                  <div v-for="(tag, index) in work.tag">
                    <p>{{tag}}</p>
                  </div>
                </div>
            </a>
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
      works: [
        {title: "brandingwork",
          tag: ["Branding","Typography"],
          thumbnail:"https://images.unsplash.com/photo-1583138320337-a47316bc2b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        },
        {title: "ui/uxwork",
          tag: ["UI/UX",],
            thumbnail:"https://images.unsplash.com/photo-1583124688221-728de3b79b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
        },
        {title: "brandingwork",
          tag: ["Branding","Typography"],
          thumbnail:"https://images.unsplash.com/photo-1583138320337-a47316bc2b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        },
        {title: "ui/uxwork",
          tag: ["UI/UX",],
            thumbnail:"https://images.unsplash.com/photo-1583124688221-728de3b79b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
        },
      ]

    }
  }
}
</script>

<style>

.thumbnail {
  position: relative;
  /*
  width: 30%;
  max-width: 50%;
  margin: auto;
  */
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
