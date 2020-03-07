<template>
  <div class="page width80">
    <div class="flexContainer noAlign width80">
      <div class="flexItem half">
        <div class="section">
          <h1>Contacts</h1>
            <h3>{{contactDetail.detail}}</h3>
        </div>
        <div class="section">
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
        </div>
      </div>
      <div class="flexItem half">
        <h1>Form</h1>

				<form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdY5f9Fd-9G0cE-wY1FMFNMcJoQbBJE_9T7_sYeSWAoMLH6hg/formResponse" class="form">
					<div class="formItem alignLeft">
						<label for="name">Name</label>
					  <input required id="name" type="text" name="entry.295529443" >
					</div>

					<div class="formItem alignLeft">
						  <label for="email">Email Address</label>
						  <input required id="email" type="email" name="entry.541181946">
					</div>

					<div class="formItem alignLeft">
					  <label for="message">Message</label>
					  <textarea required id="message" name="entry.1306209770" minlength="10"></textarea>
					</div>

				  <button type="submit" name="button" value="Submit" class="button" @click="submitForm()">Submit</button>
				</form>

				<div
					class="formrun-embed"
					data-formrun-form="@mariniida"
					data-formrun-redirect="true">
				</div>



      </div>
    </div>
  </div>
</template>
				<script src="https://sdk.form.run/js/v2/embed.js"></script>

<script>

export default {
  name: 'Contact',
  data () {
    return {
			success:false,
			error:false,
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
      rules: {
        name: [
          { required: true, message: "What's your name", trigger: 'blur' },
        ],
        email:[
          { required: true, message: "What's your email address", trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        message:[
          { required: true, message: "What do you wanna tell me?", trigger: 'blur' },
          { min: 3, max: 2000, message: 'Length should be 3 to 2000', trigger: 'blur' }
        ]
      },
  }
},

}
</script>

<style>
.form {
  width: 100%;
  margin: 0 auto;
}

.alignLeft {
  text-align: left;
}

.noAlign {
  align-items: flex-start;
  flex-wrap:wrap;
  justify-content: space-around;
}
.formItem{
	margin-bottom: 10px;
}

.formItem label{
  line-height: 30px;
	font-size: 1.5em;
}

.formItem input[type='text'] {
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.formItem input[type='email'] {
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.formItem textarea{
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}


.button{
	border-radius: 20px;
	padding: 12px 23px;
	font-size: 14px;
	border: 1px solid #3550B2;
	color: #3550B2;
	background: white;
	line-height: 1;
	transition: .1s;
}

.button:hover{
	border-radius: 20px;
	padding: 12px 23px;
	font-size: 14px;
	border: 1px solid #3550B2;
	color: white;
	background: #3550B2;
	cursor: pointer;
}
</style>
