<template>
  <div class="page">
    <div class="section flexContainer"> <!--Profile section-->
      <el-image
      class="flexItem"
       style="width: 200px; height: 250px"
       :src="profile.img"
       :fit="fit"></el-image>
      <div class="flexItem">
        <h1>{{profile.tagLine}}</h1>
        <h3>{{profile.bio}}</h3>
      </div>
    </div>
    <div class="section"> <!--Timeline section-->
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

    <div class="section"> <!--Skills section-->
      <h1>Skills</h1>
      <ul class="flexContainer">
        <li v-for="(skill, index) in skills" class="flexItem tile">

            <h3>{{skill.name}}</h3>
            <i class="icon el-icon-reading"></i>

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
        bio:"An aspiring UI/UX designer based in Japan.",
        img: require("../assets/IMG_2338.jpg"),
      },
      profileImg: require("../assets/IMG_2338.jpg"),
      skills:[
        {name: 'Adobe Photoshop', level: 2},
        {name: 'Adobe Illustrator', level: 3},
        {name: 'Adobe InDesign', level: 2},
        {name: 'Adobe XD', level: 4},
        {name: 'JavaScript', level: 2},
        {name: 'HTML',level: 3},
        {name: 'CSS', level: 3},
        {name: 'English', level: 4},
        {name: 'Japanese', level: 5},
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

.tile{
  flex-wrap:wrap;
  
}

.el-icon-reading{
  font-size: 1.5em;
}


</style>
