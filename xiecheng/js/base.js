var app = angular.module('xc',["ngRoute"]);
// 搜索的组件
app.directive('seheader',function(){

	return {
		templateUrl : 'directive/seheader.html',
	}
});
// 路由配置
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/index',{
		templateUrl : 'template/index.html',
		controller : 'indexCtrl',
	}).when('/home',{
		templateUrl : 'template/home.html',
		controller : 'homeCtrl',
	}).otherwise({
		redirectTo : '/index',
	});
}]);
// run 在config之后 controller之前执行
app.run([function($rootscope){
	(function(doc,win){
		var docEl = doc.documentElement;
		resize = function(){
			var clientWidth = docEl.clientWidth;
			docEl.style.fontSize = 100 * (clientWidth/320) + 'px';
		}
		win.addEventListener('resize',resize);
		win.addEventListener('onload',resize);
	})(document,window);
}]);
//indexCtrl控制器
app.controller('indexCtrl',['$scope','swipe','$http',function($scope,swipe,$http){
	$http.jsonp('http://localhost:8888',{
		params : {
			callback : 'JSON_CALLBACK',
		}
	}).success(function(data){
		console.log(data);
		$scope.datas = data;
	});

	$http.jsonp('http://localhost:9999',{
		params : {
			callback : 'JSON_CALLBACK',
		}
	}).success(function(arrs){
		console.log(arrs);
		$scope.arrs = arrs;
	});
	swipe.ban();
}]);
//homeCtrl控制器
app.controller('homeCtrl',['scope','swipe',function($scope,swipe){

	swipe.ban();
	$scope.name = 'ysschen';
}]);
//banner方法
app.service('swipe',function(){

	return {
		ban : function(){
			var mySwiper = new Swiper ('.swiper-container', {
				loop: true,
			    
				// 如果需要分页器
				pagination: '.swiper-pagination',

			});
		}
	}
	
});
