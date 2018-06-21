$(document).ready(function() {
	page_init();
});

function page_init() {

	var openBT = $('#openBT');

	$(openBT).on('click', openHandler);

	var dl = $('#dialog_node').dialog({
		title : 'My Dialog',
		width : 600,
		height : 400,
		closed : true,
		cache : false,
		modal : true,
		// toolbar 不使用，只是例子
		toolbar : [ {
			text : 'Edit',
			iconCls : 'icon-edit',
			handler : function() {
				alert('edit');
			}
		}, {
			text : 'Help',
			iconCls : 'icon-help',
			handler : function() {
				alert('help');
			}
		} ],
		buttons : [ {
			iconCls : 'icon-save',
			text : '保存',
			handler : saveHandler
		}, {
			iconCls : 'icon-cancel',
			text : '取消',
			handler : cancelHandler
		} ]
	});

};

function openHandler() {
	$('#dialog_node').dialog('open');
};
function closeHandler() {
	$('#dialog_node').dialog('close');
};

function saveHandler() {
	formSubmit();
	closeHandler();
};

function cancelHandler() {
	alert('cancel');
	closeHandler();
};

function formSubmit() {
	// ajax方式 表单提交 ， 依赖ajaxfileupload.js
	var uploadForm = $("#uploadForm");
	var url = uploadForm.attr('action');

	$.ajaxFileUpload({
		url : url,
		secureuri : false,
		fileElementId : 'form_file_element',
		// 提交数据
		data : {
			product_id : '0001',
			fileName : '111'
		},
		type : 'POST',
		success : function(result) {
			console.log(result);
		},
		error : function(data, status, e) {
			console.log(e);
		}
	});
}