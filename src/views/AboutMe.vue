<template>
  <div class="page width80">

		<!--Profile section-->
    <div class="section flexContainer tileContainer alignEnd">

      <el-image class="flexItem"
       style="width: 300px; height: 450px"
       :src="profile.img" fit="cover">
				 <div slot="placeholder">
		       <h4 class="slottext">Loading...</h4>
		     </div>
			</el-image>

      <div class="flexItem description">
				<div class="section">
					<h2>飯田まりん</h2>
					<p>岐阜県に生まれ、１３歳で家族とオーストラリアに移住。</p>
					<p>新しい環境で勉学に励むも、英語力以外のスキルを得たいと強く感じました。</p>
					<p>「国や言語の垣根を超えたスキルとはなんだろう。」と考えた結果、デザイン職に興味を持ち、メルボルン大学でデザイン学部に進学しました。</p>
					<p>大学ではデジタルテクノロジーを専攻しHCIについて学びながら、グラフィックデザインとコンピューティングを副専攻。</p>
					<p>UI/UX、ゲームデザイン、ブランディング、ウェブサイト制作など、幅広い種類の課題に取り組みました。</p>
				</div>

				<div class="links">
					<h2>Links</h2>
					<div class="flexContainer">
						<div class="flexItem">
						<li v-for="(link, index) in links">
							<a target="_blank"
							rel="noopener noreferrer"
							:href="link.url">
								<i :class="link.icon"></i>{{link.name}}
							</a>
						</li>
					</div>
					<div class="flexItem">
						<li v-for="(mark, index) in marks" class="marks">
							<a target="_blank"
							rel="noopener noreferrer"
							:href="mark.url">
									<img class="mark" :src="mark.icon">
							</a>
						</li>
					</div>
					</div>
				</div>
      </div>

    </div>
		<el-divider></el-divider>

		<!--Timeline section-->
    <div class="section">
      <h1 class="timeline">Timeline</h1>
        <li v-for="(timelineEvent, index) in timelineEvents"
        class="flexContainer">
          <div class="flexItem left">
            <h5 class=lineButtom>{{timelineEvent.startDate}}</h5>
            <h5>{{timelineEvent.endDate}}</h5>
          </div>

          <div class="flexItem right links">
            <a :href="timelineEvent.link" target="_blank"><h2>{{timelineEvent.heading}}</h2></a>
            <div class="event">
              <h4>{{timelineEvent.subHeading}}</h4>
              <p>{{timelineEvent.description}}</p>
            </div>
          </div>
        </li>
    </div>

		<!--Skills section-->
    <div class="section margin60">
      <h1>Skills</h1>

      <div class="flexContainer tileContainer">
        <div v-for="(skill, index) in skills" class="flexItem textRight skillBox">
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
      profile: {
        tagLine: "I'm Marin Iida.",
        bio: "An aspiring UI/UX designer based in Japan (for now).",
        img: require("../assets/IMG_2338.jpg"),
      },
      timelineEvents: [
        {
          startDate: '2012 Feb',
          endDate: '2016 Nov',
          heading: 'Somerset College',
					link: 'https://www.somerset.qld.edu.au/'
        },{
          startDate: '2017 Feb',
          endDate:'2019 Dec',
          heading:'University of Melbourne',
          subHeading:'Bachelor of Design',
          description:'Majored in Digital Technologies and minored in Graphic Design and Computing.',
					link:'https://www.unimelb.edu.au/',
        }
      ],
      skills:[
        {name: 'Microsoft Office Suite', level: 3},
				{name: 'Adobe XD', level: 4},
				{name: 'Adobe Illustrator', level: 3},
        {name: 'Adobe Photoshop', level: 2},
        {name: 'Adobe InDesign', level: 1},
        {name: 'HTML',level: 3},
        {name: 'CSS', level: 3},
        {name: 'JavaScript', level: 2},
				{name: 'Python', level: 1},
				{name: 'MySQL', level: 1},
				{name: 'Japanese', level: 5},
        {name: 'English', level: 4},
      ],
			links:[
				{
					name:'Email',
					icon:'el-icon-message',
					url:'mailto:mariniida114@gmail.com'
				},
				{
					name:'Indeed',
					icon:'el-icon-download',
					url:'https://my.indeed.com/p/69cw2g1'
				}],
			marks:[
				{
						name:'Github',
						icon:require("../assets/GitHub-Mark-64px.png"),
						url:'https://github.com/mariniida',
				},
				{
					name:'Wantedly',
					icon:require("../assets/wantedly_mark.png"),
					url:'https://www.wantedly.com/secret_profiles/1h8Wm5W3Bo-i1Ok2u_aFIV_b2uy1eFz9'

				}
			],
    }
  },
}
</script>
<style scoped>

.description {
	width: 500px;
	text-align: left;
}

.box {
  display: inline-block;
}

.lineButtom {
  position: relative;
  display: inline-block;
  height: 70px;
  line-height: 70px;
}

.lineButtom::after {
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

.event {
  padding-left: 18px;
  padding-top: 8px;
}

.right {
  flex-basis: 300px;
  text-align: left;
  margin-top: 40px;
}

.left {
  flex-basis: 150px;
}

.darkSquare {
  background-color: #3550B2;
  height: 1.75em;
  width: 1.75em;
  margin: 5px;
}

.lightSquare {
  background-color: #b9c4ed;
  height: 1.75em;
  width: 1.75em;
  margin: 5px;
}

.links a {
	color: #333333;
	font-size: 1.75em;
	font-weight: 300;
	text-decoration: none;
}

.links a:hover {
	cursor: pointer;
	transition: .1s;
	color: #3550B2;
}

.links img:hover {
	filter: drop-shadow(1px 1px  3px #b9c4ed);
	cursor: pointer;
	transition: .1s;
}

.links i {
	margin: 6px;
	padding-left: 6px;
}

.links .flexContainer{
	justify-content: flex-start;
}

.links li{
	margin: 6px;
}


.mark {
	width: 32px;
	height: 32px;
	margin: 6px;
}

.marks {
	display:inline-block;
}

.margin60 {
	margin: 60px 0px;
}

.skillBox {
	width: 190px;
}

@media screen and (max-width:480px) {
  /*画面幅が480pxまでの時*/
  .display-none{
      display:none;
  }
}

.alignEnd{
	align-items: flex-end
}

</style>
