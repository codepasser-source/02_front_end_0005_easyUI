var Address = [ {
	"value" : "1",
	"text" : "CHINA"
}, {
	"value" : "2",
	"text" : "USA"
}, {
	"value" : "3",
	"text" : "Koren"
} ];

$(document).ready(function() {
	GetTable();
});

function handler(rowIndex) {
	console.log(rowIndex);
}

function GetTable() {

	$("#datagrid_node").datagrid(
			{
				height : 300,
				width : 450,
				title : '学生表',
				collapsible : true,
				singleSelect : true,
				idField : 'id',
				columns : [ [
						{
							field : 'id',
							title : 'id',
							width : 100,
							align : 'center'
						},
						{
							field : 'name',
							title : '姓名',
							width : 100,
							align : 'center'
						},
						{
							field : 'age',
							title : '年龄',
							width : 100,
							align : 'center'
						},
						{
							field : 'action',
							title : '操作',
							width : 100,
							align : 'center',
							formatter : function(value, row, index) {
								console.log(value);
								console.log(row);
								console.log(index);
								var d = "<a href='#' onclick='handler(" + index
										+ ")'>Delete</a>";
								return d;
							}
						} ] ]

			});

	// 动态绑定数据
	var datagrid_data = [ {
		"id" : "00001",
		"name" : "tom1",
		"age" : 19,
		"action" : "000001"
	}, {
		"id" : 2,
		"name" : "tom2",
		"age" : 23,
		"action" : "00002"
	} ];
	$("#datagrid_node").datagrid("loadData", datagrid_data);
}