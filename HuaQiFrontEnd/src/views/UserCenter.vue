<template>
<!-- 用户中心页面，可以查看用户信息 -->
<div class="userCenterBox">
  <div class="userCenterTable">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <p>用户中心</p>
    <el-descriptions class="margin-top" :column="1" border>
      <el-descriptions-item
        :labelStyle="myLabelStyle"
        :contentStyle="myContentStyle">
        <template slot="label">
          <i class="el-icon-user"></i>
          <span>机构名称</span>
        </template>
        {{this.$store.getters.getUser.name}}
      </el-descriptions-item>
      <el-descriptions-item
        :labelStyle="myLabelStyle"
        :contentStyle="myContentStyle">
        <template slot="label">
          <i class="el-icon-message"></i>
          电子邮箱
        </template>
        {{this.$store.getters.getUser.email}}
      </el-descriptions-item>
      <el-descriptions-item
        :labelStyle="myLabelStyle"
        :contentStyle="myContentStyle">
        <template slot="label">
          <i class="el-icon-star-off"></i>
          会员信息
        </template>
        <el-switch
          v-model="isVIP"
          @change="changeVIPState"
          active-color="#ffd04b"
          inactive-color="#646464"
          disabled>
        </el-switch>
        <span v-if="this.isVIP">会员用户</span>
        <span v-else>普通用户</span>
      </el-descriptions-item>
    </el-descriptions>
    <div>
      <span  class="userCenterButtonLeft">
        <el-button type="warning" @click="becomeVIP">开通会员</el-button>
      </span>
      <span class="userCenterButtonRight">
        <el-button type="info" @click="goBack">返回</el-button>
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return {
      isVIP: this.$store.getters.getUser.isVIP === 'true',
      myLabelStyle: {
        'color': '#fff',
        'background-color': '#4a4c4e',
        'border': '1px solid #4a4c4e'
      },
      myContentStyle: {
        'color': '#000',
        'background-color': '#e4e4e4'
      }
    }
  },
  methods: {
    changeVIPState (callback) {
      this.$store.dispatch('asyncUpdateVIPState', callback)
      // this.axios({
      //   method: 'post',
      //   url: '服务器地址/updateVIPState',
      //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
      //   data: {
      //     name: this.$store.getters.getUser.name,
      //     isVIP: callback ? 'true' : 'false'
      //   },
      //   timeout: 1000
      // })
    },
    goBack () {
      this.$router.back()
    },
    becomeVIP () {
      if (this.isVIP) {
        this.$message({type: 'warning', message: '您已开通会员'})
      } else {
        this.isVIP = true
        this.changeVIPState(true)
        this.$message({type: 'success', message: '成功开通会员'})
      }
    }
  }
}
</script>

<style>
.userCenterBox .userCenterTable {
  width: 400px;
  margin: 100px auto;
  border: 1px solid #dcdfe6;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 50px #a8aaaf;
  background-color: #fff;
}
.userCenterBox p {
  float: left;
  width: 120px;
  margin: 20px 10px;
  letter-spacing: 1px;
}
.userCenterBox .el-avatar {
  float: left;
  margin: 15px 20px;
}
.userCenterBox .el-switch {
  margin-right: 10px;
}
.userCenterBox .userCenterButtonLeft .el-button {
  margin-left: 90px;
  margin-top: 20px;
  letter-spacing: 1px;
}
.userCenterBox .userCenterButtonRight .el-button {
  margin-left: 20px;
  letter-spacing: 4px;
}
.userCenterBox {
  width: 100%;
  height: 100%;
}
.userCenterBox .el-descriptions-item__label {
  letter-spacing: 1px;
}
.userCenterBox .el-descriptions-item__content {
  letter-spacing: 1px;
}
</style>
