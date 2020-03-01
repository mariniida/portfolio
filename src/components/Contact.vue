<template>
  <div class="page">
    <div class="flexContainer noAlign">
      <div class="flexItem half">
      <h1>Form</h1>
      <el-form
      label-position="top"
      :model="contactForm"
      :rules="rules"
      status-icon
      ref="contactForm"
      label-width="120px"
      @submit.native.prevent>
        <div class="alignLeft">
        <el-form-item label="Name" prop="name">
          <el-input v-model="contactForm.name"></el-input>
        </el-form-item>

        <el-form-item label="Email address" prop="email">
          <el-input v-model="contactForm.email"></el-input>
        </el-form-item>

        <el-form-item label="Form" prop="message">
          <el-input type="textarea" v-model="contactForm.message"></el-input>
        </el-form-item>
      </div>

        <el-form-item>
          <el-button round type="primary" @click="submitForm('contactForm')">
          Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
      <div class="flexItem half">
        <h1>Links</h1>
        <h2>Coming soon!</h2>
        <!--
        List links

        <li v-for="(link, index) in links">
            {{link.name}}
        </li>

        -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      links:[
        {name:'Redesigner',link:''},
      ],
      contactForm: {
          name: '',
          email:'',
          message: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input your name', trigger: 'blur' },
        ],
        email:[
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        message:[
          { required: true, message: 'Please input your message', trigger: 'blur' },
          { min: 3, max: 2000, message: 'Length should be 3 to 2000', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
}
}
</script>

<style>

.el-form{
  width: 100%;
  margin: 0 auto;
}

.alignLeft{
  text-align: left;
}

.el-form--label-top .el-form-item__label{
  padding: 0px;
  line-height: 30px;
}

.noAlign{
  align-items: flex-start;
  flex-wrap:wrap;
  justify-content: space-around;
}

.half{
  width: 40%;
}


</style>
