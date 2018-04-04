    import columndata from './sysfldcolumndata'
    //基础字段列表配置
    let sysListBaseOptions ={
        primaryKey:"id",
        dataSource: [],
        style: "width:100%",
        size: "mini",
        columns: columndata
      };

    //业务字段列表配置
    let sysListBusinessOptions= {
        primaryKey:"id",
        dataSource: [],
        style: "width:100%",
        size: "mini",
        columns: columndata
      };

      export {sysListBaseOptions,sysListBusinessOptions}