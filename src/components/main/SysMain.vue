<template>
  <el-tabs value="base" type="card" ref="systabscard" @tab-click="handleClick">
    <el-tab-pane label="基础字段" name="base">      
      <sys-list id="sysbaselist" :data-options="dataOptions.sysListBaseOptions"></sys-list>
    </el-tab-pane>
    <el-tab-pane label="业务字段" name="business">
      <sys-list id="sysbusinesslist" :data-options="dataOptions.sysListBusinessOptions"></sys-list>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import SysList from "@/components/common/SysList";

export default {
  data() {
    return{
    tabsval: "base"
    }
  },
  props: ["data-options"],
  components: {
    "sys-list": SysList
  },
  methods: {
    handleClick(tab) {
      this.dataOptions.selecttab=tab.name;
    }
  }
};
</script>

<style>
.el-tabs {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
.el-tabs__content {
  height: 100%;
}
</style>