<template>
  <div>
    <el-button type="warning" @click="search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    search () {
      this.$router.push('/search-result')
    }
  }
}
</script>
