<template>
    <el-table
    :data="dataOptions.dataSource"
    :style="dataOptions.style" :size="dataOptions.size" highlight-current-row ref='dataOptions.title'>
    <template v-for="column in dataOptions.columns">
        <!-- 数字格式 -->
        <el-table-column v-if="column.fldType=='I'" :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format" :align="column.align==null?'center':column.align">
        </el-table-column>
        <!-- 日期格式 -->
        <el-table-column v-else-if="column.fldType=='D'" :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format" :align="column.align==null?'center':column.align">
            <template scope="scope">
                   <el-date-picker v-model="scope.row[column.fldName]" type="date" placeholder="选择日期">
                   </el-date-picker>
            </template>
        </el-table-column>
        <!-- 勾选框格式 -->
        <el-table-column v-else-if="column.fldType=='C'" :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format" :align="column.align==null?'center':column.align">
            <template scope="scope">
                   <el-checkbox v-model="scope.row[column.fldName]"></el-checkbox>
            </template>
        </el-table-column>
        <!-- 下拉框格式 -->
         <el-table-column v-else-if="column.fldType=='LC'" :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format" :align="column.align==null?'center':column.align">
            <template scope="scope">
                   <el-select v-model="scope.row[column.fldName]" placeholder="请选择">
                       <el-option v-for="item in column.dataSource" :label="item.Name" :value="item.Value"></el-option>
                    </el-select>
            </template>
        </el-table-column>
        <!-- 文本格式 -->
        <el-table-column v-else :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format" :align="column.align==null?'center':column.align">
            <template scope="scope">
                  <el-input v-model="scope.row[column.fldName]"></el-input>
            </template>
        </el-table-column>
    </template>
    </el-table>
</template>
<script>
export default {
  props:['data-options'],
}
</script>