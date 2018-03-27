<template>
<el-form ref="form"  :label-width="dataOptions.width" :label-position="dataOptions.position" :ref="this.$attrs.id">
  <el-row :gutter="20">
   <template v-for="item in dataOptions.fields">
    <el-col :span="item.span">
     <!-- 按钮 -->
     <template v-if="item.fldType=='B'">
      <el-form-item >
        <template v-if="item.dataSource==null">
        <el-button >{{item.fldDesc}}</el-button>
        </template>
        <template v-else>
        <el-button v-for="btnitem in item.dataSource" @click="btnitem.BtnEvent">{{btnitem.BtnName}}</el-button>
        </template>
      </el-form-item>
     </template>
     <!-- 下拉框 -->
     <template v-else-if="item.fldType=='LC'">
      <el-form-item :label="item.fldDesc">
        <el-select v-model="dataOptions.dataSource[item.fldName]" placeholder="请选择">
            <el-option v-for="selectitem in item.dataSource" :label="selectitem.Name" :value="selectitem.Value"></el-option>
        </el-select>
      </el-form-item>
     </template>
     <!-- 输入框 -->
     <template v-else>
     <el-form-item :label="item.fldDesc">
      <el-input v-model="dataOptions.dataSource[item.fldName]"></el-input>
     </el-form-item>
     </template>
    </el-col>
   </template>
  </el-row>
</el-form>
</template>
<script>
export default {
  props:['data-options'],
  created() {
    //计算24分栏,最多支持6列
    let col = this.dataOptions.col;
    let data = this.dataOptions.fields;
    let datalength = data.length;
    for (let i = 0; i < datalength; i++) {
      let colspan = data[i].colspan == null ? 1 : data[i].colspan;
      data[i].span = 24 * colspan / col;
    }
  }
};
</script>
<style>
.el-form {
  margin: 10px 0px 0px 10px;
} 
</style>


