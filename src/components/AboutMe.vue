<template>
  <div>
    <p>I'm Marin Iida. </p>

    <div class="section">
      <h2>Skills</h2>
      <ol>
        <li v-for="(skill, index) in skills">
          {{skill.name}}
        </li>
      </ol>
    </div>

  </div>
</template>

<script>

export default {
  name: 'AboutMe',
  data () {
    return {
      skills:[
        {name:'HTML',level:''},
        {name:'CSS', level:''},
        {name:'JavaScript', level:''},
        {name:'English', level:''},
        {name:'Japanese', level:''},
        {name:'Photoshop', level:''},
        {name:'Illustrator', level:''},
        {name:'InDesign', level:''},
        {name:'XD', level:''},
      ]
    }
  }
}
</script>

<style>


</style>
