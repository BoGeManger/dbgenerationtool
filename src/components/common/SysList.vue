<template>
    <el-table
    :data="dataOptions.dataSource"
    :style="dataOptions.style" :size="dataOptions.size">
    <template v-for="column in dataOptions.columns">
        <el-table-column v-if="column.fldType=='S'" :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format">
            <template scope="scope">
                  <el-input v-model="scope.row[column.fldName]"></el-input>
            </template>
        </el-table-column>
        <el-table-column v-if="column.fldType=='D'" :prop="column.fldName" :label="column.fldDesc" :width="column.width" :formatter="column.format">
            <template scope="scope">
                   <el-date-picker v-model="scope.row[column.fldName]" type="date" placeholder="选择日期">
                   </el-date-picker>
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