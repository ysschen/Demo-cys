
function onebyone(arr){

	var str = "";
	var i = 0;
	setInterval(function(){
		$('.phoneshake').html(str);
		if(i == arr.length){
			str = "";
			i = 0;
		}else if(arr[i] == " "){
			str += " ";
			i++;
		}
		str += arr[i++];
		
	},500);
}