<template>
  <div class="websiteFeaturesBox">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="feature1">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 直观的数据可视化结果
        </template>
        <div class="message">
          Yes,clientele! 通过各种形式的图表，将数据可视化呈现给使用者。
          使得使用者能够从多方面更加全面、详细地了解我们所呈现的数据。
          多种形式的可视化结果在会员模式下，使用者能够自由选择下载，
          为使用者在最大程度上提供了数据查询便利和使用便捷；能够为您所需要的数据增添亮点。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature2">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 多维度的数据标准
        </template>
        <div class="message">
          Yes,Clientele! 数据库从多个评价维度出发，使得评价结果更加具有参考价值。
          不只是单方面、宏观的、固定时期的统计数据，使用者能够得到对企业多层次、多角度的数据，
          这样一来，使用者能够更加精准地根据结果作出选择和决策，
          使得客户能够对搜索目标进行整体而宏观的信息了解，
          使得搜索目标画像的细节更加清晰，降低了判断的盲目性。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature3">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 精细的模型计算
        </template>
        <div class="message">
          Yes,Clientele! 数据库运用大数据收集宏观经济数据以及公司相关信息，
          运用多种模型计算公司微观投资风险以及在国家维度下的跨境投资风险，
          力图展现出全面、精确的跨境投资风险评估。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature4">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 投资风向标
        </template>
        <div class="message">
          Yes,Clientele! 数据库拥有多维度、多层次的数据和精美的可视化的图表，
          使用者在数字中可以窥见行情的盛衰，了解当下的热点，感受机遇与挑战的到来。
          借助数据库所提供的资料，使用者基本可以预判市场的前景，
          大致掌握整个行业的动向，从而作出明智、审慎的投资选择。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'WebsiteFeatures',
  data () {
    return {
      activeNames: []
    }
  }
}
</script>

<style>
.websiteFeaturesBox {
  width: 100%;
}
.websiteFeaturesBox .el-collapse-item__header {
  border-bottom: 2px solid #303133;
  border-top: 1px solid #303133;
  background-color: #797979;
  letter-spacing: 1px;
  color: #fff;
  padding: 10px;
  font-size: 17px;
}
.websiteFeaturesBox .el-collapse-item__header:hover {
  color: #ffd04b;
}
.websiteFeaturesBox i {
  margin-right: 10px;
  margin-left: 4px;
}
.websiteFeaturesBox .message {
  padding: 30px 40px;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 2px;
}
</style>
