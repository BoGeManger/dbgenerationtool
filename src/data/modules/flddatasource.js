// 下拉字段数据配置
const Constraintdata = [{
    Name: "Null",
    Value: "Null"
  }, {
    Name: "Not Null",
    Value: "Not Null"
  },
  {
    Name: "Unique",
    Value: "Unique"
  }
];

const Typedata = [{
  Name: "int",
  Value: "int"
}, {
  Name: "bigint",
  Value: "bigint"
}, {
  Name: "uniqueidentifier",
  Value: "uniqueidentifier"
}, {
  Name: "datetime",
  Value: "datetime"
}, {
  Name: "nvarchar(50)",
  Value: "nvarchar(50)"
}, {
  Name: "nvarchar(100)",
  Value: "nvarchar(100)"
}, {
  Name: "nvarchar(200)",
  Value: "nvarchar(200)"
}, {
  Name: "nvarchar(500)",
  Value: "nvarchar(500)"
}, {
  Name: "nvarchar(max)",
  Value: "nvarchar(max)"
}, {
  Name: "bit",
  Value: "bit"
}, {
  Name: "decimal(18,2)",
  Value: "decimal(18,2)"
}, {
  Name: "decimal(18,4)",
  Value: "decimal(18,4)"
}, {
  Name: "image",
  Value: "image"
}, {
  Name: "varbinary(500)",
  Value: "varbinary(500)"
}, {
  Name: "smallint",
  Value: "smallint"
}, {
  Name: "tinyint",
  Value: "tinyint"
}, {
  Name: "numeric",
  Value: "numeric"
}, {
  Name: "money",
  Value: "money"
}, {
  Name: "smallmoney",
  Value: "smallmoney"
}, {
  Name: "float",
  Value: "float"
}, {
  Name: "real",
  Value: "real"
}, {
  Name: "char",
  Value: "char"
}, {
  Name: "varchar(50)",
  Value: "varchar(50)"
}, {
  Name: "varchar(100)",
  Value: "varchar(100)"
}, {
  Name: "varchar(200)",
  Value: "varchar(200)"
}, {
  Name: "varchar(500)",
  Value: "varchar(500)"
}, {
  Name: "varchar(max)",
  Value: "varchar(max)"
}, {
  Name: "nchar",
  Value: "nchar"
}, {
  Name: "text",
  Value: "text"
}, {
  Name: "ntext",
  Value: "ntext"
}]

const Defaultdata = [{
  Name: "newid()",
  Value: "newid"
}, {
  Name: "GetDate()",
  Value: "GetDate()"
}, {
  Name: "0",
  Value: "0"
}, {
  Name: "1",
  Value: "1"
}, {
  Name: "\'\'",
  Value: "\'\'"
}];

export {
  Constraintdata,
  Typedata,
  Defaultdata
}
