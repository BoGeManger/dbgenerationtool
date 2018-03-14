<template>
<el-container style="height:100%">
<el-main>
  <el-container>
     <el-header style="height:150px">
       <sys-header :onadd="f_Add"></sys-header>
       </el-header>
    <el-main>


<sys-main :data-options='sysMain'></sys-main>

  </el-main>
  </el-container>
</el-main>
        <el-aside style="width:500px;height:100%">
  <el-tabs v-model="first" type="card" @tab-click="handleClick" style="margin:20px;height:90%">
    <el-tab-pane label="SQL" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="MySQL" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="Extra" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="All Mysql" name="fourth">定时任务补偿</el-tab-pane>
    <el-tab-pane label="All Mysql 5.5" name="fourth">定时任务补偿</el-tab-pane>
    <el-tab-pane label="视图" name="six">定时任务补偿</el-tab-pane>
    <el-tab-pane label="SQLite" name="seven">定时任务补偿</el-tab-pane>
    <el-tab-pane label="格式化" name="eight">定时任务补偿</el-tab-pane>
  </el-tabs>
  </el-aside>
</el-container>
</template>

<script>
import SysHeader from '@/components/header/SysHeader'
import SysMain from '@/components/main/SysMain'

export default {
  data() {
    return {
      sysMain:{
        dataSource:[{id:1,name: "1234",data:"2016-06-07"},{id:2,name: "4567",data:"2016-06-07"}],
        style:"width:100%",
        size:"small",
        columns:[
           { fldName: 'name', fldType:'S', fldDesc: '名称',width:'300' },
           { fldName: 'data', fldType:'D', fldDesc: '日期',width:'300' }
        ],
      },
      first: "first"
    };
  },
  methods: {
    f_Add() {
      console.log(this.sysMain.data);
      this.sysMain.data.push({
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
        region: "区域一"
      });
      alert('ok');
    }
  },
  components:{
    'sys-header':SysHeader,
    'sys-main':SysMain,
  },
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
  height: 100%;
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
