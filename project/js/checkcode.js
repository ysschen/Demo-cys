

// 产生验证码
function checkCode(){

	var code = "";
	var arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K'];
	for(var i = 0; i < 4;i++){

		var index = parseInt(Math.random() * 20);
		code += " " + arr[index];
	}
	return code;
}

// 产生验证码
function randomCode(size){

	var code = "";
	var arr = ['0','1','2','3','4','5','6','7','8','9'];
	for(var i = 0; i < size;i++){

		var index = parseInt(Math.random() * 10);
		code += arr[index];
	}

	return code;
}