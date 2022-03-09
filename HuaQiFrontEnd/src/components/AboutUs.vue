<template>
  <div class="aboutUs">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="aboutUs"
        label="关于我们">
      </el-table-column>
      <el-table-column
        prop="contactUs"
        label="联系我们">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      tableData: [
        {
          aboutUs: '项目团队: 15名南京大学19、20级本科生组成的花旗杯参赛小组',
          contactUs: '资料组: 123456789@smail.nju.edu.cn'
        },
        {
          aboutUs: '成员结构: 商学院?人，软件学院?人，计算机科学与技术系?人',
          contactUs: '技术组(前端): 123456789@smail.nju.edu.cn'
        },
        {
          aboutUs: '项目github地址: https://github.com/YangWenTao2/huaQiBeiDemo.git',
          contactUs: '技术组(后端): 123456789@smail.nju.edu.cn'
        }
      ]
    }
  }
}
</script>

<style>
.aboutUs .el-table .el-table__cell {
  padding: 5px 0px 5px 100px;
}
.aboutUs .el-table td.el-table__cell {
  border-bottom-width: 0px;
}
</style>
