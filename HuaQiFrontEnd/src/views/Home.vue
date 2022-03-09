<template>
  <div class="homeBox">
    <div style="text-align: center;">
      <div class="textCenterDiv">
        <img src="../assets/YesClientele.jpg" width="320px" height="200px">
      </div><br>
      <div class="textCenterDiv">
        <router-link to="user-agreement"><a>《 用 户 协 议 》</a></router-link>
        <router-link to="user-notice"><a>《 用 户 须 知 》</a></router-link>
      </div><br>
      <div class="textCenterDiv">
        <el-checkbox v-model="agree" label="我已阅读并同意"></el-checkbox>
        <el-button type="warning" @click="enter">开 始 使 用</el-button>
      </div>
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name='websiteFeatures'>
        <template slot="title">
          <i class="el-icon-discover"></i>
          <i>网站特色</i>
          <i>Our Features</i>
        </template>
        <website-features/>
      </el-collapse-item>
      <el-collapse-item name='BeltAndRoad'>
        <template slot="title">
          <i class="el-icon-view"></i>
          <i>一带一路</i>
          <i>Belt and Road Initiative</i>
        </template>
        <belt-and-road/>
      </el-collapse-item>
      <el-collapse-item name='technicalSupport'>
        <template slot="title">
          <i class="el-icon-cpu"></i>
          <i>技术支持</i>
          <i>Technical Suppoert</i>
        </template>
        <technical-support/>
      </el-collapse-item>
    </el-collapse>
    <about-us/>
  </div>
</template>

<script>
import AboutUs from '../components/AboutUs.vue'
import BeltAndRoad from '../components/BeltAndRoad.vue'
import WebsiteFeatures from '../components/WebsiteFeatures.vue'
import TechnicalSupport from '../components/TechnicalSupport.vue'
export default {
  name: 'Home',
  components: {
    AboutUs,
    BeltAndRoad,
    TechnicalSupport,
    WebsiteFeatures
  },
  data () {
    var isLogin = sessionStorage.getItem('isLogin')
    return {
      agree: isLogin !== null,
      activeNames: [
        'websiteFeatures',
        'BeltAndRoad',
        'technicalSupport'
      ]
    }
  },
  methods: {
    enter () {
      if (this.agree) {
        this.$router.push('/login')
      } else {
        this.$message({
          type: 'warning',
          message: '请先勾选同意《用户须知》和《用户协议》'
        })
      }
    }
  }
}
</script>

<style>
.homeBox {
  width: 90%;
  margin: 30px 70px;
}
.homeBox .el-collapse-item__header {
  background-color: #303133;
  color: #ffd04b;
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding: 15px;
  font-size: 20px;
}
.homeBox .textCenterDiv {
  text-align: center;
  margin: 10px 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c2c2c2;
  width: 400px;
  display: inline-block;
}
.homeBox .el-checkbox {
  margin-right: 20px;
}
.homeBox .el-checkbox__label {
  letter-spacing: 1px;
}
.homeBox .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #ff9100;
}
.homeBox .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ff9100;
  border-color: #ff9100;
}
.homeBox .el-checkbox__input .el-checkbox__inner {
  border-color: #ff9100;
}
.homeBox a {
  color: #303133;
  text-decoration: none;
}
.homeBox a:hover {
  color: #ff9100;
}
.homeBox i {
  margin-left: 20px;
}
.homeBox .el-collapse {
  margin-bottom: 20px;
}
.homeBox .el-collapse-item__wrap {
  border-bottom: 0px;
}
</style>
