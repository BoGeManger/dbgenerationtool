<template>
<el-container style="height:100%">
<el-main styel="height:100%">
     <el-header style="height:150px">
       <sys-header :onadd="f_Add"></sys-header>
       </el-header>
<sys-main :data-options='sysMain'></sys-main>
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

let sysLitdata = [
  {
    id: 1,
    Fieldname: "1234",
    Pk: true,
    Constraint: "Not Null",
    Type: "int",
    Default: "0",
    Remark: "主键"
  }
];

let Constraintdata = [{Name:"Not Null",Value:"Not Null"},{Name:"Null",Value:"Null"}];

let Typedata = [{Name:"int",Value:"int"},{Name:"bit",Value:"bit"}];

let Defaultdata =[{Name:"newid()",Value:"newid"},{Name:"0",Value:"0"}]

export default {
  data() {
    return {
      sysMain: {
        dataSource: sysLitdata,
        style: "width:100%",
        size: "mini",
        columns: [
          {fldName: "Fieldname",fldType: "S",fldDesc: "字段名称",width: "300"},
          { fldName: "Pk", fldType: "C", fldDesc: "是否主键", width: "80"},
          {fldName: "Constraint",fldType: "LC",fldDesc: "是否为空",width: "200",dataSource:Constraintdata},
          { fldName: "Type", fldType: "LC", fldDesc: "字段类型", width: "200",dataSource:Typedata },
          {fldName: "Default",fldType: "LC",fldDesc: "默认值",width: "200",dataSource:Defaultdata},
          { fldName: "Remark", fldType: "S", fldDesc: "备注", width: "300" }
        ]
      },
      isCollapse:true
    };
  },
  methods: {
    f_Add(){
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
.el-aside {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
.el-main {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  height:100%;
}
.el-header {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
.el-tabs {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}
body {
  height: 100%;
}
</style>
