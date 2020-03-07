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

				<form class="formrun" action="https://form.run/api/v1/r/99geppst41wljcxbwbyen71t" method="post">
					<div class="formItem alignLeft">
						<label for="name">Name</label>
					  <input class="text" required type="text" name="name" >
					</div>

					<div class="formItem alignLeft">
						  <label for="email">Email Address</label>
						  <input data-formrun-type="email" data-formrun-required name="email" class="text">
							 <div data-formrun-show-if-error="email">Please check your email</div>
					</div>

					<div class="formItem alignLeft">
					  <label for="message">Message</label>
					  <textarea data-formrun-required name="message" minlength="10" class="textarea"></textarea>
						<div data-formrun-show-if-error="message">お問い合わせ入力してください</div>
					</div>

					<div class="g-recaptcha" data-sitekey="6LcAct8UAAAAANRKzaeEbNFqcTUZYXR2Q-JssqCX"></div>

				  <button type="submit" class="button round" data-formrun-error-text="Cannot submit" data-formrun-submitting-text="Sending...">Submit</button>
				</form>

      </div>
    </div>
  </div>
</template>


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
	}
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

.formItem .text {
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}


.formItem .textarea{
  width:100%;
	padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.round{
	border-radius: 20px;
}

.button{
	margin: 5px;
	padding: 12px 23px;
	font-size: 14px;
	border: 1px solid #3550B2;
	color: #3550B2;
	background: white;
	line-height: 1;
	transition: .1s;
}

.button:hover{
	padding: 12px 23px;
	font-size: 14px;
	border: 1px solid #3550B2;
	color: white;
	background: #3550B2;
	cursor: pointer;
}
</style>
