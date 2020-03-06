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
              <el-button>
                <i :class="link.icon"></i>
              	{{link.name}}
              </el-button>
              </a>
            </li>
        </div>
      </div>
      <div class="flexItem half">
        <h1>Form</h1>



        <el-form label-position="top"
        :model="contactForm" :rules="rules"
        status-icon ref="contactForm"
        label-width="120px" @submit.native.prevent
				id="mG61Hd"
				action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdY5f9Fd-9G0cE-wY1FMFNMcJoQbBJE_9T7_sYeSWAoMLH6hg/formResponse" method="post">
          <div class="alignLeft">
            <el-form-item label="Name" prop="name" >
              <el-input v-model="contactForm.name" name="entry.295529443"></el-input>
            </el-form-item>
            <el-form-item label="Email address" prop="email">
              <el-input v-model="contactForm.email" name="entry.541181946"></el-input>
            </el-form-item>
            <el-form-item label="Form" prop="message">
              <el-input type="textarea" v-model="contactForm.message" name="entry.1306209770"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
						<el-alert v-if="success" title="Sent"
					    type="success" show-icon>
					  </el-alert>
						<el-alert v-if="error" title="Error" type="error"
							show-icon>
							</el-alert>
							<input class="button" type="submit" value="Submit">
          </el-form-item>
        </el-form>
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
        contactForm: {
            name: '',
            email:'',
            message: ''
        },
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
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						this.success=true;
          } else {
						this.error=true;
          }
        });
      }
    }
}
</script>

<style>
.el-form {
  width: 100%;
  margin: 0 auto;
}

.alignLeft {
  text-align: left;
}

.el-form--label-top .el-form-item__label {
  padding: 0px;
  line-height: 30px;
}

.noAlign {
  align-items: flex-start;
  flex-wrap:wrap;
  justify-content: space-around;
}

.el-button.el-button--default{
	border:1px solid #3550B2;
	color: #3550B2;
	margin: 5px;
}

.button{
	border-radius: 20px;
	padding: 12px 23px;
	font-size: 14px;
	border: 1px solid #3550B2;
	background: white;
	color: #3550B2;
	line-height: 1;
	transition: .1s;
}

.button:hover{
	border-radius: 20px;
	padding: 12px 23px;
	font-size: 14px;
	border: 1px solid #3550B2;
	background: #3550B2;
	color: white;
	cursor: pointer;
}
</style>
