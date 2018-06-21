$(document).ready(function() {
	page_init();
});

function page_init() {

	var columns_schema = [ {
		field : 'ck',
		checkbox : true
	}, {
		field : 'id',
		title : 'ID',
		align : 'center',
		width : 40,
		sortable : true
	}, {
		field : 'name',
		title : 'name',
		align : 'center',
		width : 100,
		sortable : true
	}, {
		field : 'age',
		title : 'age',
		align : 'center',
		width : 100,
	} ];

	var datagrid_data = [ {
		id : 1,
		name : 'tom1',
		age : 19
	}, {
		id : 2,
		name : 'tom2',
		age : 20
	} ];
	// 存在两种方式创建UI组件，1、css+div 2、javascript创建组件
	// 我们选择js方式
	var dg = $('#datagrid_node').datagrid({
		height : 340,
		idField : 'id',
		rownumbers : true,
		nowrap : false,
		remoteSort : false, // 如果希望sortable生效，远程数据排序属性必须设为false
		fitColumns : true,// column宽度自适应，也可一在column_schema中定义width
		singleSelect : true, // 只允许单选行，默认是false
		pagination : false,// 分页控件比较复杂,分页可以先不做
		pagePosition : "bottom",
		pageNumber : 1,
		pageSize : 10,
		pageList : [ 10, 20, 30, 40, 50 ],

		columns : [ columns_schema ],
		toolbar : [ {
			iconCls : 'icon-edit',
			id : 'edit',
			text : '编辑',
			handler : editHandler
		}, '-', {
			iconCls : 'icon-help',
			id : 'help',
			text : '帮助',
			handler : helpHandler
		} ]
	});

	// 动态绑定数据
	$(dg).datagrid("loadData", datagrid_data);
}

function helpHandler() {
	alert("help");
}

function editHandler() {
	var rows = $('#datagrid_node').datagrid('getSelections');
	console.log(rows);
	alert("当前选择：" + rows.length + "行，打开debug控制台查看数据");
}