var app = angular.module('new',['ngRoute']);
// 移动端自适应宽度
app.run(function(){
	(function(doc,win){
		var docEl = doc.documentElement;
		resize = function(){
			var clientWidth = docEl.clientWidth;
			docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
		}
		win.addEventListener('resize',resize);
		win.addEventListener('DOMContentLoaded',resize);
	})(document,window);
});
// 定义切换路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/index',{
		templateUrl : 'template/index.html',
	}).when('/detail/:id/:type',{
		templateUrl : 'template/detail.html',
	}).otherwise({
		redirectTo : '/index',
	});
}]);
// index控制器
app.controller('indexCtrl',['$scope','$http','$window','retype',function($scope,$http,$window,retype){
	$scope.datas = [];
	// 初始化top类型信息
	$http.jsonp('php/http.php',{
		params : {
			type : 'top',
			callback : 'JSON_CALLBACK',
		}
	}).success(function(data){
		$scope.datas = data.result.data;
	});
	//点击事件查看详情信息
	$scope.detail = function(index,type){
		$window.location.href = '#/detail/' + index + '/' + retype[type];
	}
}]);
// detail控制器
app.controller('detailCtrl',['$scope','$routeParams','$http','$sce','$window',function($scope,$routeParams,$http,$sce,$window){
	// 获取路径中的type类型
	$scope.type = $routeParams.type;
	// 获取路径中的id
	$scope.id = $routeParams.id;
	// http访问http.php文件获取信息
	$http.jsonp('php/http.php',{
		params : {
			type : $scope.type,
			callback : 'JSON_CALLBACK',
		}
	}).success(function(data){
		// 将取回来的数据保存在data中
		$scope.data = data.result.data;
		// 获取回的数据成功后再请求对应的路径src
		$http.jsonp('php/http1.php',{
			params : {
				url :  data.result.data[$scope.id].url,
				callback : 'JSON_CALLBACK', 
			}
		}).success(function(data){
			//成功后返回的数据data是新闻的整个页面
			$scope.htmlsce = $sce.trustAsHtml(data.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
		});
	});
	// 点击返回方法
	$scope.comeback = function(){
		$window.location.href = '#index';
	}

}]);
// nav组件
app.directive('nav',function($http){
	return {
		templateUrl : 'template/nav.html',
		// 对每个li绑定事件
		link : function(scope,elm,attr){
			var oLi = angular.element(document.getElementsByTagName('li'));
			oLi.bind('click',function(){
				var turntype =  this.type;
				$http.jsonp('php/http.php',{
					params : {
						type : turntype,
						callback : 'JSON_CALLBACK',
					}
				}).success(function(data){
					scope.datas = data.result.data;
				});
			});
		}
	}
});
app.service('retype',function(){
	return{
		'头条':'top','社会':'shehui','国内':'guonei','国际':'guoji','娱乐':'yule',
		'体育':'tiyu','军事':'junshi','科技':'keji','财经':'caijing','时尚':'shishang',
	}
});