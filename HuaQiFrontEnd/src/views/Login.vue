<template>
  <div class='loginBox'>
    <el-form
      :model='loginForm'
      ref='loginForm'
      label-width='80px'
      status-icon>
      <p>用户登录</p>
      <el-form-item label='电子邮箱' prop='email'>
        <el-input
          v-model='loginForm.email'
          auto-complete='off'
          placeholder='请输入电子邮箱'>
        </el-input>
      </el-form-item>
      <el-form-item label='密码' prop='pass'>
        <el-input
          v-model='loginForm.pass'
          auto-complete='off'
          placeholder='请输入密码'
          type='password'>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type='warning'
          @click='onSubmit()'>
          登 录
        </el-button>
        <el-button
          type='info'
          @click='toRegister()'>
          注册新用户
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.loginForm.email === '') {
        this.$message({
          showClose: true,
          message: '请输入电子邮箱',
          type: 'error'
        })
      } else if (this.loginForm.pass === '') {
        this.$message({
          showClose: true,
          message: '请输入密码',
          type: 'error'
        })
      } else {
        sessionStorage.setItem('isLogin', 'true')
        this.$store.dispatch(
          'asyncUpdateUser',
          {
            name: '南京大学',
            email: this.loginForm.email,
            isVIP: 'false'
          }
        )
        this.$router.push('/user')
        // this.axios({
        //   method: 'post',
        //   url: '服务器地址/login',
        //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //   data: {
        //     email: this.loginForm.email,
        //     pass: this.loginForm.pass
        //   }
        // }).then((response) => {
        //   this.$message({
        //     message: '登陆成功',
        //     type: 'success'
        //   })
        //   setTimeout(() => {
        //     this.$router.push('/')
        //   }, 3000)
        // }).catch((error) => {
        //   this.$message({
        //     showClose: true,
        //     message: '邮箱或密码错误',
        //     type: 'error'
        //   })
        //   console.log(error)
        // })
      }
    },
    toRegister () {
      setTimeout(() => {
        this.$router.push('/register')
      }, 100)
    }
  }
}
</script>

<style>
.loginBox .el-form {
  width: 400px;
  margin: 100px auto;
  border: 2px solid #000;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 50px #000;
  background-color: #303133;
}
.loginBox .el-button {
  margin-left: 10px;
  margin-right: 20px;
  margin-top: 20px;
}
.loginBox p {
  color: #fff;
  font-size: 25px;
  font-family: "黑体";
  text-align: center;
  margin-bottom: 50px;
}
.loginBox .el-input__inner:focus {
  border: 3px solid #ffd04b;
}
.loginBox .el-input__inner {
  background-color: rgb(245, 245, 245);
}
.loginBox .el-form-item__label {
  color: #fff;
}
.loginBox {
  width: 100%;
  height: 100%;
}
</style>
