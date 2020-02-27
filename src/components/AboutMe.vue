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
      <h1>Timeline</h1>
        <li v-for="(timelineEvent, index) in timelineEvents"
        class="flexContainer">
          <div class="flexItem left">
            <h4 class=lineButtom>{{timelineEvent.startDate}}</h4>
            <h4>{{timelineEvent.endDate}}</h4>
          </div>

          <div class="flexItem right">
            <h3>{{timelineEvent.heading}}</h3>

            <div class="paragraph">
              <h4>{{timelineEvent.subHeading}}</h4>
              <p>{{timelineEvent.description}}</p>
            </div>

          </div>
        </li>

    </div>

    <div class="section">
      <h1>Skills</h1>
      <ul>
        <li v-for="(skill, index) in skills">
        <h3>{{skill.name}}</h3>
        </li>
      </ul>
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
        },{
          startDate:'2017 Feb',
          endDate:'2019 Dec',
          heading:'University of Melbourne',
          subHeading:'Bachelor of Design',
          description:'Major: Digital Technologies. Minor: Graphic Design, Computing.',
        }
      ]
    }
  }
}
</script>

<style>
.lineButtom{
  position: relative;
  display: inline-block;
  height: 70px;
  line-height: 70px;
}

.lineButtom::after{
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  height: 20px;
  margin: auto;
  background-color: #707070;
}

.paragraph{
  padding-left: 18px;
  padding-top: 8px;
}

.right{
  flex-basis: 300px;
  text-align: left;
  margin-top: 40px;
}

.left{
  flex-basis: 150px;
}

</style>
