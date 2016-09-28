var app = angular.module('app',['ngRoute']);
// 配置路由
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/index',{
		templateUrl : 'template/index.html',
		controller : 'indexCtrl',
	}).when('/detail',{
		templateUrl : 'template/detail.html',
		controller : 'detailCtrl',
	}).otherwise({
		redirectTo : '/index',
	});
}]);
// indexCtrl 控制器
app.controller('indexCtrl',['$scope','$http','$window','change',function($scope,$http,$window,change){
	// $routeParams是用于获取
	// 初始化offset值为10
	$scope.offset = 10;
	$scope.offsetP = 1;
	$scope.arrs = [];
	$http.jsonp('php/joke.php',{
		params : {

		/*
			**查看更多法一
			使用pagesize : $scope.offset,
			$window.location.href = '#/detail/?id=' + id + '&pagesize=' + $scope.offset;
			**查看更多法二
			使用page(常用这种)

		*/
			callback : 'JSON_CALLBACK',
			pagesize : $scope.offset,
			page : $scope.offsetP,
		}
	}).success(function(data){
		$scope.datas = data.result.data;
		$scope.arrs = data.result.data;
	});
	$scope.click = function(id){
		// 点击对应的标题时间顺便记录下表index，然后可以用于进去下一个页面时显示对应的标题数据
		/*
			**法一
			使用$rootscope 但是会在全局变量容易发生混乱
			**法二
			change.indexId = id;
			$window.location.href = '#/detail;
			在detailCtrl中：
			$scope.datas = data.result.data[change.indexId].content;
		*/

		// 判断页数
		$scope.num = 1;
		var tot = id;
		while(tot >= 10){
			tot = tot%10;
			$scope.num++;
		}
		$window.location.href = '#/detail/?id=' + id + '&pagesize=' + $scope.offset + '&page=' + $scope.num;
		 //在url后面加上参数,id是对应的详情的第id个
	};
	$scope.loadMore = function(){

		// 每次点击加载更多时就把offset+10
		// $scope.offset += 10;
		// 每次点击加载更多时就把offset+1
		$scope.offsetP += 1;
		// 重新请求数据
		$http.jsonp('php/joke.php',{
			params : {
				pagesize : $scope.offset,
				callback : 'JSON_CALLBACK',
				page : $scope.offsetP,
			}
		}).success(function(data){
			
			$scope.arrs = $scope.arrs.concat(data.result.data);
			console.log($scope.arrs);
			$scope.datas = $scope.arrs;
		});
	}
}]);
// detailCtrl 控制器
app.controller('detailCtrl',['$scope','$http','change','$routeParams',function($scope,$http,change,$routeParams){

	// 初始化一个数组用于拼接数据
	$scope.arrsD = [];

	$http.jsonp('php/joke.php',{
		params : {
			callback : 'JSON_CALLBACK',
			pagesize : $routeParams.pagesize,
			page : $routeParams.page,
		}
	}).success(function(data){
	console.log(data);
		$scope.result = data.result.data[$routeParams.id%10];
		
	});
}]);
// change方法==>用于传递数据
app.service('change',function(){
	// 用服务器在控制器之间传递数据的时候，可以先定义一个对象，然后把这个对象注入到需要传递数据的两个控制器里面
	// 然后我们在服务这个单例对象中定义一个用于交换的属性，然后给他赋值，然后我们在另外一个控制器里面可以直接使用
	return {}
});