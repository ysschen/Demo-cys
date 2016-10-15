//显示回到顶部
$(function(){

	$(window).scroll(function(){
		if($(window).scrollTop() >= 200){
			$(".backtop").show();
		}else{
			$(".backtop").hide();
		}
	});
	$(".backtop").click(function(){
		// var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		$("body,html").animate({"scrollTop":0},300);
	});
})
