# dbgenerationtool by Nyberg
### SQL server, MySQL database statement generation tool, mainly used in building tables and fields modification.

Related technology stack：
- .NET WebApi
- VUEJS 2
- Web Single page application
- ES6
- ElementUI
<br>
&nbsp;&nbsp;&nbsp;&nbsp; Based on ElementUI, I have carried out some simple component encapsulation.
You can find some simple encapsulation of the from form components and lists under the common file to ensure that we only need to configure the components to render the components, and do not need to write duplicate code.

## SysList usage description
#### sysList components attribute description:
|Attribute           |Describe      |Type    |Must    |Remarks
---------------------|--------------|--------|--------|--------
primaryKey           |primaryKey    |string  |yes     |Data primary key must be kept only convenient and subsequent operation.
dataSource           |dataSource    |array   |yes     |List data sources for two-way bindings
style                |style         |string  |no      |custom style
size                 |size          |string  |no      |According to the three size attributes provided by elementui, medium, small and mini are set up.
columns              |columns       |array   |yes     |Interface rendering field definition

### sysList columns attribute description
|Attribute           |Describe      |Type    |Must    |Remarks
---------------------|--------------|--------|--------|--------
fldName              |name          |string  |yes     |The data name is used for binding with list binding and matching each other.
fldType              |type          |string  |yes     |A column that determines which style to be rendered
fldDesc              |desc          |string  |yes     |Header display column names
width                |width         |string  |yes     |The size of the column
dataSource           |data          |array   |no      |LC type using the bound data source, format must be "[{Name:" int "Value:" int "}] storage," this array form

### sysList fldType support type
|Attribute     |data type     |control type    |Remarks
---------------|--------------|----------------|--------
I              |number        |number          |&nbsp;     
S              |string        |text            |&nbsp;    
D              |data          |data            |&nbsp;     
C              |boolen        |checkbox        |&nbsp;     
LC             |array         |dropdown box    |Must be used dataSource

## SysTab usage description
#### systab components attribute description:
|Attribute           |Describe      |Type    |Must    |Remarks
---------------------|--------------|--------|--------|--------
fields               |fields        |array   |yes     |Interface rendering configuration
col                  |col           |int     |yes     |Account for the number, starting from 1;Here we use the 24 occupation system of elementui, which supports 6 columns at most
dataSource           |dataSource    |array   |yes     |Tab data sources for two-way bindings
width                |width         |string  |yes     |Tab width
position             |position      |string  |no      |The label-position attribute in elementui is divided into right, left and top.

### systab columns attribute description
|Attribute           |Describe      |Type    |Must    |Remarks
---------------------|--------------|--------|--------|--------
fldName              |name          |string  |yes     |The data name is used for binding with tab binding and matching each other.
fldType              |type          |string  |yes     |Render the type of the control
fldDesc              |desc          |string  |yes     |The label of the component
colspan              |col           |int     |no      |The cell in the form in which the cell is located
dataSource           |dataSource    |array   |no      |B type and LC type use

### systab fldType support type
|Attribute     |data type     |control type    |Remarks
---------------|--------------|----------------|--------
B              |array         |button          |If dataSource is used, it's a button group, otherwise it's a single button.  
LC             |array         |dropdown box    |Must be used dataSource    
S              |string        |dropdown box    |&nbsp;     

## Above is the general idea of systab and syslist. There are still many extensions.
