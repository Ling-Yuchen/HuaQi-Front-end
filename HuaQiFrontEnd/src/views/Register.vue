<template>
  <div class='registerBox'>
    <el-form
      :model='registerForm'
      status-icon
      :rules='rules'
      ref='registerForm'
      label-width='80px'>
      <p>新用户注册</p>
      <el-form-item label='机构名称' prop='name'>
        <el-input
          v-model='registerForm.name'
          autocomplete='off'
          placeholder='请填写所属机构名称'>
        </el-input>
      </el-form-item>
      <el-form-item label='电子邮箱' prop='email'>
        <el-input
          v-model='registerForm.email'
          autocomplete='off'
          placeholder='请填写电子邮箱'>
        </el-input>
      </el-form-item>
      <el-form-item label='密码' prop='pass'>
        <el-input
          type='password'
          v-model='registerForm.pass'
          autocomplete='off'
          placeholder='6-18位且只能包含数字、字母和下划线'>
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type='password'
          v-model='registerForm.checkPass'
          autocomplete='off'
          placeholder='请再次输入密码'>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type='warning'
          @click='onSubmit()'>
          注 册
        </el-button>
        <el-button
          type='info'
          @click='backToLogin()'>
          返 回
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('机构名不能为空'))
      }
      setTimeout(() => {
        if (String(value).trim().length > 18) {
          callback(new Error('机构名称过长'))
        } else {
          callback()
        }
      }, 1000)
    }
    var validateEmail = (rule, value, callback) => {
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (value === '') {
        callback(new Error('电子邮箱不能为空'))
      } else if (!regEmail.test(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      var regPass = /^[\w]{6,18}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!regPass.test(value)) {
        callback(new Error('密码格式不正确'))
      } else {
        if (this.registerForm.checkPass !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.pass) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        name: '',
        email: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [{ validator: checkName, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          setTimeout(this.backToLogin(), 3000)
          // this.axios({
          //   method: 'post',
          //   url: '服务器地址/register',
          //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
          //   data: {
          //     name: this.registerForm.name,
          //     email: this.registerForm.email,
          //     pass: this.registerForm.pass
          //   }
          // }).then((response) => {
          //   this.$message({
          //     message: '注册成功',
          //     type: 'success'
          //   })
          //   setTimeout(this.backToLogin(), 3000)
          // }).catch((error) => {
          //   this.$message({
          //     showClose: true,
          //     message: '注册失败',
          //     type: 'error'
          //   })
          //   console.log(error)
          // })
        } else {
          this.$message({
            showClose: true,
            message: '注册信息格式有误',
            type: 'error'
          })
        }
      })
    },
    backToLogin () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 100)
    }
  }
}
</script>

<style>
.registerBox .el-form {
  width: 400px;
  margin: 100px auto;
  border: 2px solid #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 50px #000;
  background-color: #303133;
}
.registerBox .el-button {
  margin-left: 30px;
  margin-right: 10px;
  margin-top: 20px;
}
.registerBox p {
  color: #fff;
  font-size: 25px;
  font-family: "黑体";
  text-align: center;
  margin-bottom: 50px;
}
.registerBox .el-form-item__label {
  color: #fff;
}
.registerBox .el-input__inner:focus {
  border: 3px solid #ffd04b;
}
.registerBox .el-input__inner {
  background-color: rgb(245, 245, 245);
}
.registerBox {
  width: 100%;
  height: 100%;
}
</style>
