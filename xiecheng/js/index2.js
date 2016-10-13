var http = require('http');
var url = require('url');
var querystring = require('querystring');
var app = http.createServer((request,response)=>{
	var paramStr = url.parse(request.url).query;
	var param = querystring.parse(paramStr);
	var obj = ['自由行','主题游','一日游','顶级游','酒店+景点','亲子.游学','外币兑换','更多'];
	response.end(param.callback + '('+ JSON.stringify(obj) +')');
}); 
// 开启服务器
app.listen('8888');
console.log('启动服务器');