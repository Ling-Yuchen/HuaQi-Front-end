<template>
  <el-container>
  <el-header>
  </el-header>
  <el-main>
    <el-col :span="8" class="center">
        <el-input
          placeholder="请输入公司名称"
          v-model="input"
          clearable>
          <el-button slot="append" icon="el-icon-search" id="search" @click="handleSearch"></el-button>
        </el-input>
    </el-col>
  <el-col style="margin-left: 50px; margin-right: 50px;">
  <el-table class="mytable"
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 70%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="company_name"
      label="机构名称"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="地址"
      width="120">
    </el-table-column>
    <el-table-column
      property="contact"
      label="联系方式"
      width="200">
    </el-table-column>
  </el-table>
  </el-col>
  </el-main>
  <el-footer>
  </el-footer>
    <div> current Row : {{currentRow}} </div>
    <div> input: {{input}} </div>
  </el-container>
</template>

<script>
export default {
  name: 'Search',
  components: {
  },
  data () {
    return {
      currentRow: null,
      input: null, // 搜索框中输入的内容
      debug: 'fdsd',
      tableData: [{
        company_name: 'Apple Inc.',
        address: 'Califonia',
        contact: 'blablabla'
      }, {
        company_name: 'Microsoft',
        address: 'Seattle',
        contact: 'hhhhhh'
      }, {
        company_name: '腾讯',
        address: '深圳',
        contact: 'fdsfdsfsd'
      }, {
        company_name: '阿里巴巴',
        address: '杭州',
        contact: 'gdsvsdvdsvsd'
      }]
    }
  },
  methods: {
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      this.currentRow = val
    },
    handleSearch () {
    }
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.hh {
  background: #99a9bf;
}
.center {
  margin-top: 15px;
  margin-left: 300px;
}
.mytable {
  margin-top: 15px;
  margin-left: 170px;
}
#search {
  background-color: #002c83;
  border-radius: 0%;
}
.el-main {
  margin-left: 250px;
  margin-right: 250px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, .22), 0 0 6px rgba(0, 0, 0, .14);
  overflow: hidden;
}
</style>
