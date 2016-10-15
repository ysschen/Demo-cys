var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

// 创建服务器
http.createServer(function(request,response){
	// 请求
	var pathname = url.parse(request.url).pathname;
	// 参数
	var paramStr = url.parse(request.url).query;
	// 参数转为对象格式
	var param = querystring.parse(paramStr);
	console.log(param);
	http.request({
		// 请求域名
		hostname : 'www.tuling123.com',
		// 请求的端口
		port : '80',
		// 请求的路径
		path : '/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info=' + param.q,
		method : 'GET',
	},function(request){//成功的请求
		var data = '';
		// 请求开始
		request.on('data',function(chunk){
			data += chunk;
		});
		// 请求结束
		request.on('end',function(){
			//data为返回请求的数据
			console.log(data);
			response.end(param.callback + '(' + JSON.stringify(data) + ')');
		});
	}).on('error',function(){//错误的请求
		console.log(e.message);
	}).end();
}).listen(8888);