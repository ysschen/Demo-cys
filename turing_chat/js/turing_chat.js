
var app = angular.module('chat',[]);
// 发送按钮的控制器
app.controller('send',['$scope','$http','sendmsg',function($scope,$http,sendmsg){

	// $scope.send = function(){
	// 	$scope.html = angular.element(document.querySelector('.input1')).val();
	// 	// 判断文本框有内容输入并且发送到section中
	// 	if($scope.html != ''){
	// 		// 显示到section中
	// 		$scope.html = '<span>'+ '我:' + $scope.html +'</span>';
	// 		$scope.section_html = angular.element(document.querySelector('section')).html();
	// 		angular.element(document.querySelector('section')).html($scope.section_html + $scope.html);
	// 		angular.element(document.querySelector('.input1')).val('');
	// 	}
	// 	// 发送之后请求http
	// 	$http.jsonp('php/turing.php',{
	// 		params : {
	// 			abc : $scope.html,
	// 			callback : 'JSON_CALLBACK',
	// 		},
	// 	}).success(function(data){
	// 		$scope.section_html = angular.element(document.querySelector('section')).html();
	// 		angular.element(document.querySelector('section')).html($scope.section_html + '<span> 图灵:' + data.text + '</span>');
	// 	}).error(function(){
	// 		console.log('失败');
	// 	});
	// };
	$scope.click = function(){
		sendmsg.sendtext($scope,$http);
	}
	//键盘发送按钮
	$scope.fun = function(e){
		e = e || event;
		var code = e.keyCode || e.which;
		console.log(code);
		if(code == 13){
			sendmsg.sendtext($scope,$http);
		}	
	}
}]);
app.service('sendmsg',function(){

	return {
		sendtext : function($scope,$http){
			
			$scope.html = angular.element(document.querySelector('.input1')).val();
			// 判断文本框有内容输入并且发送到section中
			if($scope.html != ''){
				// 显示到section中
				$scope.html = '<span>'+ '我:' + $scope.html +'</span>';
				$scope.section_html = angular.element(document.querySelector('section')).html();
				angular.element(document.querySelector('section')).html($scope.section_html + $scope.html);
				angular.element(document.querySelector('.input1')).val('');
			}
			// 发送之后请求http
			$http.jsonp('php/turing.php',{
				params : {
					abc : $scope.html,
					callback : 'JSON_CALLBACK',
				},
			}).success(function(data){
				$scope.section_html = angular.element(document.querySelector('section')).html();
				angular.element(document.querySelector('section')).html($scope.section_html + '<span> 图灵:' + data.text + '</span>');
			}).error(function(){
				console.log('失败');
			});
		},
	}
});
