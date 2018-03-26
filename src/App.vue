<template>
<el-container>
<el-main>
  <el-header>
    <sys-header :data-options='sysHeaderdataOptions'></sys-header>
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
      sysHeaderdataOptions:{
        fields: [
          { fldName: 'Tablenameprefixed', fldType: 'S', fldDesc: '表头'},
          { fldName: 'Datasource', fldType: 'S', fldDesc: '数据库', colspan:3 },
          { fldName: 'Tablenmae', fldType: 'S', fldDesc: '表名'},
          { fldName: 'Desc', fldType: 'S', fldDesc: '备注', colspan:3 },
          { fldName: 'Selecttable', fldType: 'LC', fldDesc: '选择表',dataSource:[] },
          { fldName: 'New', fldType: 'B', fldDesc: '新建表',colspan:3,dataSource:[{BtnName:'新建表',BtnEvent:'f_Add'},{BtnName:'增加行',BtnEvent:this.f_Add},{BtnName:'删除行',BtnEvent:'f_Add'},{BtnName:'运行',BtnEvent:'f_Add'}] },
      ],
      col: 4,
      dataSource:{},
      width:'80px',
      position:'left'
      },
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
    },
    f_Add(){
      let lstlength = this.sysMaindataOptions.sysListBusinessOptions.dataSource.length;
      var newid = this.sysMaindataOptions.sysListBusinessOptions.dataSource[lstlength-1].id;
      let data = {
        id: newid + 1,
        Fieldname: "",
        Pk: false,
        Constraint: "Null",
        Type: "int",
        Default: "",
        Remark: ""
      };
      this.sysMaindataOptions.sysListBusinessOptions.dataSource.push(data);
      console.log(this);
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
.el-container{
  height: 100%;
}
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
  height: 200px !important;
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
