<template>

  <el-tabs value="first" type="card">
    <el-tab-pane label="基础字段" name="first">      
      <sys-list :data-options="dataOptions"></sys-list>
    </el-tab-pane>
    <el-tab-pane label="业务字段" name="second">配置管理</el-tab-pane>

  </el-tabs>

</template>

<script>
import SysList from '@/components/common/SysList'

export default {
  data() {
    return {

    }
  },
  props:['data-options'],
  components:{
    "sys-list":SysList
  }
}
</script>