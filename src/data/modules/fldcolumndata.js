     import {
       Constraintdata,
       Typedata,
       Defaultdata
     } from './flddatasource'
     // 字段配置
     const columndata = [{
         fldName: "id",
         fldType: "I",
         fldDesc: "",
         width: "30"
       },
       {
         fldName: "Fieldname",
         fldType: "S",
         fldDesc: "字段名称",
         width: "300"
       },
       {
         fldName: "Pk",
         fldType: "C",
         fldDesc: "是否主键",
         width: "70"
       },
       {
         fldName: "Constraint",
         fldType: "LC",
         fldDesc: "是否为空",
         width: "180",
         dataSource: Constraintdata
       },
       {
         fldName: "Type",
         fldType: "LC",
         fldDesc: "字段类型",
         width: "200",
         dataSource: Typedata
       },
       {
         fldName: "Default",
         fldType: "LC",
         fldDesc: "默认值",
         width: "200",
         dataSource: Defaultdata
       },
       {
         fldName: "Remark",
         fldType: "S",
         fldDesc: "备注",
         width: "300"
       }
     ];

     export default columndata
