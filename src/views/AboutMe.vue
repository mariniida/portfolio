<template>
  <div class="page width80">
    <div class="section flexContainer tileContainer"> <!--Profile section-->

      <el-image class="flexItem display-none"
       style="width: 200px; height: 250px"
       :src="profile.img" fit="cover">
				 <div slot="placeholder">
		       <h4 class="slottext">Loading...</h4>
		     </div>
			</el-image>

      <div class="flexItem">
        <h1>{{profile.tagLine}}</h1>
        <h3>{{profile.bio}}</h3>
      </div>

    </div>
		<el-divider></el-divider>
    <div class="section"> <!--Timeline section-->
      <h1 class="timeline">Timeline</h1>
        <li v-for="(timelineEvent, index) in timelineEvents"
        class="flexContainer">
          <div class="flexItem left">
            <h5 class=lineButtom>{{timelineEvent.startDate}}</h5>
            <h5>{{timelineEvent.endDate}}</h5>
          </div>
          <div class="flexItem right">
            <a :href="timelineEvent.link" target="_blank"><h2>{{timelineEvent.heading}}</h2></a>
            <div class="event">
              <h4>{{timelineEvent.subHeading}}</h4>
              <p>{{timelineEvent.description}}</p>
            </div>
          </div>
        </li>
    </div>
    <div class="section margin60"> <!--Skills section-->
      <h1>Skills</h1>
      <div class="flexContainer tileContainer">
        <div v-for="(skill, index) in skills" class="flexItem textRight">
          <h3>{{skill.name}}</h3>
          <ul class="boxContainer">
            <li v-for="n in skill.level" class="box">
              <div class="darkSquare"/>
            </li>
            <li v-for="n in 5-skill.level" class="box">
              <div class="lightSquare"/>
            </li>
          </ul>
        </div>
      </div>
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
        bio:"An aspiring UI/UX designer based in Japan (for now).",
        img: require("../assets/IMG_2338.jpg"),
      },
      profileImg: require("../assets/IMG_2338.jpg"),
      timelineEvents:[
        {
          startDate:'2012 Feb',
          endDate:'2016 Nov',
          heading:'Somerset College',
					link:'https://www.somerset.qld.edu.au/'
        },{
          startDate:'2017 Feb',
          endDate:'2019 Dec',
          heading:'University of Melbourne',
          subHeading:'Bachelor of Design',
          description:'Majored in Digital Technologies and minored in Graphic Design and Computing.',
					link:'https://www.unimelb.edu.au/',
        }
      ],
      skills:[
        {name: 'Microsoft Office Suite', level: 3},
        {name: 'Adobe Photoshop', level: 2},
        {name: 'Adobe Illustrator', level: 3},
        {name: 'Adobe InDesign', level: 2},
        {name: 'Adobe XD', level: 4},
        {name: 'Japanese', level: 5},
        {name: 'English', level: 4},
        {name: 'HTML',level: 3},
        {name: 'CSS', level: 3},
        {name: 'JavaScript', level: 2},
      ],
    }
  },
    }
</script>

<style scoped>

.box{
  display: inline-block;
}

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

.darkSquare{
  background-color: #3550B2;
  height: 1.75em;
  width: 1.75em;
  margin: 5px;
}

.lightSquare{
  background-color: #b9c4ed;
  height: 1.75em;
  width: 1.75em;
  margin: 5px;
}

@media screen and (max-width:480px){
  /*画面幅が480pxまでの時*/
  .display-none{
      display:none;
  }
}
a:-webkit-any-link {
    color: #3550B2;
		text-decoration: none;
}


.margin60{
	margin: 60px 0px;
}

</style>
