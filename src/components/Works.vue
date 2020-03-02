<template>
  <div class="page">
    <el-tabs v-model="activeName"
    tabPosition="left">
      <el-tab-pane
        v-for="(workType, index) in workTypes"
        :key="index"
        :label="workType"
        :name="workType">{{workType}}</el-tab-pane>
      </el-tabs>

      <li v-for="(work, index) in works"
      class="flexItem tileItem">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="work.thumbnail" class="image" :fit="fit"
          style="width: 100px; height: 100px">
          <div style="padding: 14px;">
            <span>{{work.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </li>


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
          tag: "Branding",
          thumbnail:"https://images.unsplash.com/photo-1583138320337-a47316bc2b86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        },
        {title: "ui/uxwork",
          tag: "UI/UX",
            thumbnail:"https://images.unsplash.com/photo-1583124688221-728de3b79b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
        },
      ]

    }
  }
}
</script>

<style>

</style>
