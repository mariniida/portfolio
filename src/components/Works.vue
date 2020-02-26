<template>
  <div>
    <li v-for="(workType, index) in workTypes">
      <h3>{{workType}}</h3>
    </li>

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
