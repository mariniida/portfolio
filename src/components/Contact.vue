<template>
  <div class="page">
    <h1>Talk to me</h1>

  <div class="section">
    <h2>Links</h2>
      <li v-for="(link, index) in links">
        {{link.name}}
      </li>

  </div>

    <div class="section">
      <h2>Form</h2>
      <el-form :model="contactForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="Name" prop="name">
          <el-input v-model="contactForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Form" prop="desc">
          <el-input type="textarea" v-model="contactForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('contactForm')">Submit</el-button>
        </el-form-item>
      </el-form>
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
          desc: ''
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

</style>
