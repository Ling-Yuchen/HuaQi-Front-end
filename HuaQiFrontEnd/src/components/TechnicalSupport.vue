<template>
  <div class="technicalSupportBox">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="feature1">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 权威可信的资料来源
        </template>
        <div class="message">
          国家统计局、东方财富网…… 批量获取权威可信的信息、资讯，为数据库的建设提供强有力的支撑。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature2">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 精密合理的核心算法
        </template>
        <div class="message">
          BRF 神经网络模型、Jorion 风险评估模型，量化的评估为结论的生成带来有效的保障。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature3">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 美观专业的网页设计
        </template>
        <div class="message">
          醒目的主题、强大的功能，网页设计技术为想法的最终呈现增光添彩。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'TechnicalSupport',
  data () {
    return {
      activeNames: []
    }
  }
}
</script>

<style>
.technicalSupportBox {
  width: 100%;
}
.technicalSupportBox .el-collapse-item__header {
  border-bottom: 2px solid #303133;
  border-top: 1px solid #303133;
  background-color: #797979;
  letter-spacing: 1px;
  color: #fff;
  padding: 10px;
  font-size: 17px;
}
.technicalSupportBox .el-collapse-item__header:hover {
  color: #ffd04b;
}
.technicalSupportBox i {
  margin-right: 10px;
  margin-left: 4px;
}
.technicalSupportBox .message {
  padding: 15px;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 2px;
}
</style>
