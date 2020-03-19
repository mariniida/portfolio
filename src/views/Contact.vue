<template>
  <div class="page width80">

    <div class="section flexContainer noAlign width80">

      <div class="flexItem half">
        <div class="section">
          <h1>Contacts</h1>
          <h3>{{contactDetail.detail}}</h3>
        </div>
			</div>
      <div class="flexItem half">
        <h1>Links</h1>
          <li v-for="(link, index) in links">
            <a target="_blank"
            rel="noopener noreferrer"
            :href="link.url">
            <el-button class="button">
              <i :class="link.icon"></i>
            	{{link.name}}
            </el-button>
            </a>
          </li>

					<a target="_blank"
					rel="noopener noreferrer"
					:href="Github.url">
					<el-button class="button">
						<img class="icon" :src="Github.icon">
						{{Github.name}}
					</el-button>
					</a>

      </div>
    </div>
<!--
      <div class="flexItem half">
        <h1>Form</h1>
				<form class="formrun" action="https://form.run/api/v1/r/99geppst41wljcxbwbyen71t" method="post" data-formrun-saving="true">
					<div class="formItem alignLeft">
						<label>Name</label>
					  <input class="text" data-formrun-required type="text" name="Name">
					</div>

					<div class="formItem alignLeft">
						  <label>Email Address</label>
						  <input data-formrun-type="email" data-formrun-required name="Email address" class="text">
					</div>

					<div class="formItem alignLeft">
					  <label>Message</label>
					  <textarea data-formrun-required name="Message" minlength="10" class="textarea"></textarea>
					</div>

				  <button type="submit" class="button round" data-formrun-error-text="Cannot submit"data-formrun-submitting-text="Sending...">Submit
				</button>
				<p>Coming soon!</p>
				</form>

				<div style="width:100%;height:600px;overflow:auto;-webkit-overflow-scrolling:touch;"><iframe src="https://tayori.com/form/b5b249a3caed9b15e6da06ea99c3970ecad91ba7" width="100%" height="100%"></iframe></div>-->

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Contact',
  data () {
    return {
      contactDetail:{
        type: 'emailAddress',
        detail: 'mariniida114@gmail.com',
        icon: 'el-icon-message',
      },
      links:[
        {
          name:'Wantedly',
          icon:'el-icon-user',
          url:'https://www.wantedly.com/secret_profiles/1h8Wm5W3Bo-i1Ok2u_aFIV_b2uy1eFz9'
        },
        {
          name:'indeed Resume',
          icon:'el-icon-download',
          url:'https://my.indeed.com/p/69cw2g1'
      	}],
				Github:{
						name:'Github',
						icon:require("../assets/GitHub-Mark-32px.png"),
						url:'https://github.com/mariniida'
				}
  	}
	}
}
</script>

<style>
.formrun {
  width: 100%;
  margin: 0 auto;
}

.noAlign {
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
}

.formItem {
	margin-bottom: 10px;
}

.formItem label {
  line-height: 30px;
	font-size: 1.5em;
}

.formItem .text {
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.formItem .textarea {
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.round {
	border-radius: 20px;
}

.icon{
	width: 14px;
	height: 14px;
	 display: inline-block;
}

.el-button {
	margin: 5px !important;
	border: 1px solid #3550B2 !important;
	color: #3550B2 !important;
}

.el-button:hover {
	border: 1px solid #3550B2 !important;
	color: white !important;
	background: #3550B2 !important;
	cursor: pointer;
}

</style>
