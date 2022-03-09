<template>
  <div class="BeltAndRoadBox">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="feature1">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 一带一路业务的重要性
        </template>
        <div class="message">
          在国际局势错综复杂的今天，中国的“一带一路”政策不仅顺应着把握当下、
          统筹疫情防控和经济发展的规划，更体现了推动世界经济动力转换、方式转变、结构调整、走上长期健康稳定发展轨道的决心。
          “一带一路”业务推动着各国和平共处、互利共赢，致力于让多边主义的火炬照亮人类前行之路。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature2">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 一带一路业务与金融
        </template>
        <div class="message">
          世界正在经历百年未有之大变局，如今既是大发展的时代，也是大变革的时代。
          中国将继续促进贸易和投资自由化便利化，维护全球产业链供应链顺畅稳定，推进高质量共建“一带一路”，
          推进世界贸易组织和国际金融货币体系改革，促进世界经济增长，保障发展中国家发展权益和空间。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature3">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 一带一路与外汇风险
        </template>
        <div class="message">
          “一带一路”沿线国家多为欠发达国家，汇率波动大，各国汇率制度差异大，
          在此背景下，防范、管控汇率风险也是银行及企业必须要面对的问题。
          Yes,Clientele! 数据库关注到银行业支持“一带一路”业务时存在的问题、困难和差异化监管需求，
          同时，考虑到“一带一路”沿线国家的国别风险、当地法律风险、国际关系风险等，
          为银行业跨境金融服务进行风险提示，也为企业海外项目投资建设提供参考和咨询。
        </div>
      </el-collapse-item>
      <el-collapse-item name="feature4">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i> 一带一路与花旗银行
        </template>
        <div class="message">
          持续为参与“一带一路”建设的全球跨国公司和中国龙头企业提供全方位的银行服务，
          是花旗业务取得增长的关键因素。业绩增长主要来自企业及投资银行业务、现金管理、贸易融资、外汇业务等。
          受益于客户更趋活跃、业务增多，花旗银行也相应扩大了市场份额。
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'BeltAndRoad',
  data () {
    return {
      activeNames: []
    }
  }
}
</script>

<style>
.BeltAndRoadBox {
  width: 100%;
}
.BeltAndRoadBox .el-collapse-item__header {
  border-bottom: 2px solid #303133;
  border-top: 1px solid #303133;
  background-color: #797979;
  letter-spacing: 1px;
  color: #fff;
  padding: 10px;
  font-size: 17px;
}
.BeltAndRoadBox .el-collapse-item__header:hover {
  color: #ffd04b;
}
.BeltAndRoadBox i {
  margin-right: 10px;
  margin-left: 4px;
}
.BeltAndRoadBox .message {
  padding: 15px;
  font-size: 14px;
  line-height: 40px;
  letter-spacing: 2px;
}
</style>
