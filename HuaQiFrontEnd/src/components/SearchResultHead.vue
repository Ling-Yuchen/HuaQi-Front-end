<template>
  <div class="page-header">
    <span
      class="go-back"
      :style="{'color': activeColor}"
      @click="goBack"
      @mouseenter="changeColor"
      @mouseleave="changeColor">
      <i class="el-icon-back"></i>
      返回
    </span>
    <span class="search-result">搜索结果</span>
  </div>
</template>

<script>
export default {
  name: 'SearchResultHead',
  data () {
    return {
      activeColor: '#fff'
    }
  },
  methods: {
    goBack () {
      this.$router.push('/user')
    },
    changeColor () {
      this.activeColor = this.activeColor === '#fff' ? '#ffd04b' : '#fff'
    }
  }
}
</script>

<style scoped>
.page-header {
  line-height: 60px;
  padding-left: 10px;
  background-color: #303133;
  color: #fff;
}
.go-back {
  line-height: 40px;
  border-right: 2px solid #fff;
  padding-left: 5px;
  padding-right: 12px;
  cursor: pointer;
}
.search-result {
  padding-left: 15px;
  font-size: 20px;
  letter-spacing: 1px;
}
</style>
