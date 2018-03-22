<template>
<el-container style="height:100%">
<el-main>
  <el-header>
     <sys-header></sys-header>
       </el-header>
  <sys-main :data-options='sysMaindataOptions'></sys-main>
  <div :class="isCollapse==true?iconclass.circleicon:iconclass.removeicon" @click="f_toggle"></div>
</el-main>
  <el-menu  :collapse="isCollapse">
   <sys-aside></sys-aside>
  </el-menu>
</el-container>
</template>

<script>
import SysHeader from "./components/header/SysHeader";
import SysMain from "./components/main/SysMain";
import SysAside from "./components/aside/SysAside";
import SysData from "./data";

export default {
  data() {
    return {
      sysMaindataOptions: SysData,
      isCollapse: true,
      iconclass: {
        circleicon: "el-icon-circle-plus-outline el-icon-style",
        removeicon: "el-icon-remove-outline el-icon-style"
      }
    };
  },
  methods: {
    f_toggle() {
      this.isCollapse = !this.isCollapse;
    }
  },
  components: {
    "sys-header": SysHeader,
    "sys-main": SysMain,
    "sys-aside": SysAside
  },
  mounted() {
    for (let i = 0; i <= 4; i++) {
      let data = {
        id: i + 1,
        Fieldname: "",
        Pk: false,
        Constraint: "Null",
        Type: "int",
        Default: "",
        Remark: ""
      };
      this.sysMaindataOptions.sysListBusinessOptions.dataSource.push(data);
    }
  }
};
</script>

<style>
.el-main {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  height: 100%;
  position: relative;
}
.el-header {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  height: 150px !important;
}
.el-menu--collapse {
  width: 0px;
}
.el-icon-style {
  z-index: 9999;
  position: absolute;
  right: 0;
  top: 50%;
  cursor: pointer;
}
body {
  height: 95%;
  overflow: hidden;
}
html {
  height: 100%;
  overflow: hidden;
}
</style>
