// 搭建一个最简单的服务器
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// 创建服务器
http.createServer(function(request,response){
	// 解析前端传过来的请求
	var pathname = url.parse(request.url).pathname;
	// 请求的参数
	var paramStr = url.parse(request.url).query;
	// 处理请求参数化为对象
	var param = querystring.parse(paramStr);
	// 输出请求的文件名字
	console.log('Request for::' + pathname + 'received.');
	console.log('paramStr is::' + paramStr + 'received.');
	console.log('paramStr OBJ is::' + param + 'received.');
	// 传回的数据
	var obj = [
	{
		main1 : '酒店',
		main2:'海外酒店',
		main21:'特价酒店',
		main3:'团购',
		main31:'民宿·客栈'
	},
	{
		main1:'酒店',
		main2:'海外酒店',
		main21:'特价酒店',
		main3:'团购',
		main31:'民宿·客栈'
	},
	];
	// 返回请求 格式为json格式  jsonp请求
	response.end(param.callback + '(' + JSON.stringify(obj) + ')');
}).listen(8081);