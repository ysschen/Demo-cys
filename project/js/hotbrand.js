
$(function(){

	//显示回到顶部
	$(window).scroll(function(){
		if($(this).scrollTop() >= 200){
			$(".backtop").show();
		}else{
			$(".backtop").hide();
		}
	});
	$(".backtop").click(function(){
		$("html body").animate({"scrollTop":0},300);
	});

	//商品分类
	$('.tsort').mouseenter(function(){

		$('.detailnav').show();
	});
	$('.tsort').mouseout(function(){

		$('.detailnav').hide();
	});

	//鼠标放上隐藏的一级分类
	$('.dNavDl').mouseover(function(){
		
		$('.detailnav').show();
		$(this).find('.sign').html("");
		$(this).find('#secondmenu').show();
		$(this).siblings().find('#secondmenu').hide();
	});
	$('.dNavDl').mouseout(function(){

		$(this).find('.sign').html("&gt;");
		$(this).find('#secondmenu').hide();
		$(this).siblings().find('#secondmenu').hide();
	});

	//鼠标离开隐藏detailnav
	$('.detailnav').mouseenter(function(){

		$(this).show();
	});
	$('.detailnav').mouseleave(function(){

		$(this).hide();
	});

	// 鼠标离开隐藏的二级菜单
	$('#secondmenu').mouseleave(function(){
		$(this).hide();
	});

	//隐藏的二级的标题颜色变化
	$('.secondmenuL dl dt a').mouseover(function(){

		$(this).css('color','#f00');
	});
	$('.secondmenuL dl dt a').mouseleave(function(){

		$(this).css('color','#000');
	});

	// 手机邦购 更优惠！

	var arr = ['','手','机','邦','购',':','更','优','惠','!'];
	onebyone(arr);
})