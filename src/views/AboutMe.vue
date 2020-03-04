<template>
  <div class="page">
    <div class="section flexContainer"> <!--Profile section-->
      <el-image class="flexItem"
       style="width: 200px; height: 250px"
       :src="profile.img" fit="fit"></el-image>

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
            <h5 class=lineButtom>{{timelineEvent.startDate}}</h5>
            <h5>{{timelineEvent.endDate}}</h5>
          </div>
          <div class="flexItem right">
            <h2>{{timelineEvent.heading}}</h2>
            <div class="event">
              <h4>{{timelineEvent.subHeading}}</h4>
              <p>{{timelineEvent.description}}</p>
            </div>
          </div>
        </li>
    </div>
    <div class="section"> <!--Skills section-->
      <h1>Skills</h1>
      <ul class="flexContainer tileContainer skillContianer">
        <li v-for="(skill, index) in skills" class="flexItem skillItem">
            <h3 class="inline">{{skill.name}}</h3>
            <div class="inline">
              <div class="inline" v-for="n in skill.level">
                <div class="darkSquare"/>
              </div>
              <div class="inline" v-for="n in 5-skill.level">
                <div class="lightSquare"/>
              </div>
          </div>
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
      ],
      skills:[
        {name: 'Mictrosoft Office Suite', level: 3},
        {name: 'Japanese', level: 5},
        {name: 'Adobe Photoshop', level: 2},
        {name: 'English', level: 4},
        {name: 'Adobe Illustrator', level: 3},
        {name: 'HTML',level: 3},
        {name: 'Adobe InDesign', level: 2},
        {name: 'CSS', level: 3},
        {name: 'Adobe XD', level: 4},
        {name: 'JavaScript', level: 2},
      ],
    }
  },
    }
</script>

<style scoped>
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

.event{
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

.tileContainer{
  padding: 0px;
  justify-content:space-between;
}

.tileItem{
  align-self: center;
  text-align: right;
  width: 60%;
}

.inline{
  display: inline-block;
  vertical-align: middle;
}

.darkSquare{
  background-color: #494CA2;
  height: 1.75em;
  width: 1.75em;
  margin: 5px;
}

.lightSquare{
  background-color: #E3E7F1;
  height: 1.75em;
  width: 1.75em;
  margin: 5px;
}
</style>
