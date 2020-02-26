<template>
  <div>
    <div class="section flexContainer">
      <el-image
      class="flexItem"
       style="width: 200px; height: 250px"
       :src="profileImg"
       :fit="fit"></el-image>
      <div class="flexItem">
        <h1>{{profile.tagLine}}</h1>
        <h3>{{profile.bio}}</h3>
      </div>
    </div>

    <div class="section">
      <h1>Skills</h1>
      <ul>
        <li v-for="(skill, index) in skills">
        <h3>{{skill.name}}</h3>
        </li>
      </ul>
    </div>

    <div class="section">
      <h1>Timeline</h1>
      <ol>
        <li v-for="(timelineEvent, index) in timelineEvents">
          <h4>{{timelineEvent.startDate}}</h4>
          <h4>{{timelineEvent.endDate}}</h4>
          <h3>{{timelineEvent.heading}}</h3>
          <h4>{{timelineEvent.description}}</h4>
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
      profile:{
        tagLine:"I'm Marin Iida.",
        bio:"An aspiring UI/UX designer based in Japan."
      },
      profileImg: require("../assets/IMG_2338.jpg"),
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
      ],
      timelineEvents:[
        {
          startDate:'2012 Feb',
          endDate:'2016 Nov',
          heading:'Somerset College',
          description:'',
        },{
          startDate:'2017 Feb',
          endDate:'2019 Dec',
          heading:'University of Melbourne',
          description:'Bachelor of Design. Major: Digital Technologies Minor: Graphic Design, Computing',
        }
      ]
    }
  }
}
</script>
<style>

</style>
