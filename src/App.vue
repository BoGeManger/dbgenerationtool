<template>
<el-container style="height:100%">
<el-main>
  <el-header>
     <sys-header></sys-header>
       </el-header>
  <sys-main :data-options='sysMain'></sys-main>
  <div :class="isCollapse==true?iconclass.circleicon:iconclass.removeicon" @click="f_toggle"></div>
</el-main>
  <el-menu  :collapse="isCollapse">
   <sys-aside></sys-aside>
  </el-menu>
</el-container>
</template>

<script>
import SysHeader from "@/components/header/SysHeader";
import SysMain from "@/components/main/SysMain";
import SysAside from "@/components/aside/SysAside";
import SysData from './data.js';

export default {
  data() {
    return {
      sysMain: {
        dataSource: SysData.sysLitdata,
        style: "width:100%",
        size: "mini",
        columns: [
          {fldName: "Fieldname",fldType: "S",fldDesc: "字段名称",width: "300"},
          { fldName: "Pk", fldType: "C", fldDesc: "是否主键", width: "80"},
          {fldName: "Constraint",fldType: "LC",fldDesc: "是否为空",width: "200",dataSource:SysData.Constraintdata},
          { fldName: "Type", fldType: "LC", fldDesc: "字段类型", width: "200",dataSource:SysData.Typedata },
          {fldName: "Default",fldType: "LC",fldDesc: "默认值",width: "200",dataSource:SysData.Defaultdata},
          { fldName: "Remark", fldType: "S", fldDesc: "备注", width: "300" }
        ]
      },
      isCollapse:true,
      iconclass:{
        circleicon:'el-icon-circle-plus-outline el-icon-style',
        removeicon:'el-icon-remove-outline el-icon-style'
      }
    };
  },
  methods: {
    f_toggle(){
      this.isCollapse=!this.isCollapse;
    }
  },
  components: {
    "sys-header": SysHeader,
    "sys-main": SysMain,
    "sys-aside":SysAside
  }
};
</script>

<style>
.el-main {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  height:100%;
  position:relative
}
.el-header {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  height:150px !important;
}
/* .el-tabs {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
} */
.el-menu--collapse {
    width: 0px;
}
.el-icon-style{
  z-index:9999;
  position:absolute;
  right:0;top:50%;
  cursor:pointer
}
body {
  height: 95%;
  overflow:hidden;
}
html{
  height:100%;
  overflow:hidden;
}
</style>
