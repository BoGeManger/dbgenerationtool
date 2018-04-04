const fields = [
    { fldName: "Tablenameprefixed", fldType: "S", fldDesc: "表头" },
    {
      fldName: "Datasource",
      fldType: "S",
      fldDesc: "数据库",
      colspan: 3
    },
    { fldName: "Tablenmae", fldType: "S", fldDesc: "表名" },
    { fldName: "Desc", fldType: "S", fldDesc: "备注", colspan: 3 },
    {
      fldName: "Selecttable",
      fldType: "LC",
      fldDesc: "选择表",
      dataSource: []
    },
    {
      fldName: "New",
      fldType: "B",
      fldDesc: "新建表",
      colspan: 3,
      dataSource: [
        { BtnName: "新建表", BtnEvent: this.f_New },
        { BtnName: "增加行", BtnEvent: this.f_Add },
        { BtnName: "删除行", BtnEvent: this.f_Del },
        { BtnName: "运行", BtnEvent: this.f_Gen }
      ]
    }
  ]

  export default fields