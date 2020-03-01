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
  </div>
</template>

<script>
export default {
  name: 'Works',
  data () {
    return {
      workTypes:['All','Graphics','UI/UX','Branding']
    }
  }
}
</script>

<style>

</style>
