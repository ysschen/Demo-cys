
function judgeCode(str){

	var resultstr = '';
	var arr = str.split(' ');
	for(var i = 0;i < arr.length;i++){
		if(arr[i] == ' '){
			resultstr += '';
		}else{
			resultstr += arr[i];
		}
	}
	return resultstr;
}