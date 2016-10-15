

$(function(){

	// 判断用户(自动登录)
	var str = getCookies("username");
	if(str != ""){
		$(".rooful .rli1 a").html(str);
		$(".rooful .rli2 a").html("退出"); 
	}

	// 判断用户
	var str1 = getCookies("change_name");
	if(str1 != ""){
		$(".rooful .rli1 a").html(str1);
		$(".rooful .rli2 a").html("退出"); 
	}

	// 退出按钮
	$('.rooful .rli2 a').click(function(){

		var str2 = $(this).html();
		if(str2 == "退出"){
			deleatCookie("username");
			deleatCookie("change_name");
			// var str2 = getCookies("username");
			$(".rooful .rli1 a").html("登录");
			$(this).html("注册").attr('href','#');
			setTimeout(function(){
				$(this).html("注册").attr('href','../html/regist.html');
			},300);
			window.location.href = "../html/login.html";
		}else if(str2 == "注册"){
			window.location.href = "../html/regist.html";
		}
	});

	// 登录鼠标放上
	$(".rli1").mouseover(function(){
		$("#login").show();
		$("#login a").css("color","#000");
		$(this).css("border-left-color","#b5b5b5");
		$(this).css("border-right-color","#b5b5b5");
		$(".rli1 a").css("color","#000");

		$("#login").mouseover(function(){
			$(this).show();
			$("#login a").css("color","#000");
			$(".rli1").css("border-left-color","#b5b5b5");
			$(".rli1").css("border-right-color","#b5b5b5");
			$(".rli1 a").css("color","#000");
		});

		$("#login").mouseout(function(){
			$(this).hide();
			$("#login a").css("color","#999");
			$(".rli1").css("border-left-color","#fff");
			$(".rli1").css("border-right-color","#fff");
			$(".rli1 a").css("color","#999");
		});

	});	
	// 登录鼠标离开
	$(".rli1").mouseout(function(){
		$("#login").hide();
		$("#login a").css("color","#999");
		$(this).css("border-left-color","#fff");
		$(this).css("border-right-color","#fff");
		$(this).css("background","#fff");
		$(".rli1 a").css("color","#999");
	});

	// 我的邦购鼠标放上
	$(".rli3").mouseover(function(){
		$("#mybg").show();
		$(this).css("border-left-color","#b5b5b5");
		$(this).css("border-right-color","#b5b5b5");

		$("#mybg").mouseover(function(){
			$(this).show();
			$(".rli3").css("border-left-color","#b5b5b5");
			$(".rli3").css("border-right-color","#b5b5b5");
		});
		$("#mybg").mouseout(function(){
			$(this).hide();
			$(".rli3").css("border-left-color","#fff");
			$(".rli3").css("border-right-color","#fff");
		});
	});
	// 我的邦购鼠标离开
	$(".rli3").mouseout(function(){
		$("#mybg").hide();
		$(this).css("border-left-color","#fff");
		$(this).css("border-right-color","#fff");
	});
	// 我的邦购鼠标放于子菜单
	$("#mybg a").mouseover(function(){
		$(this).css("color","#999");
	});
	// 我的邦购鼠标离开子菜单
	$("#mybg a").mouseout(function(){
		$(this).css("color","#000");
	});
	//下载app的鼠标放入
	$(".rli5").mouseover(function(){
		$("#app").show();
		$(this).css("border-left-color","#b5b5b5");
		$(this).css("border-right-color","#b5b5b5");
		$(".rli5 a").css("color","#000");

		$("#app").mouseover(function(){
			$(this).show();
			$(".rli5").css("border-left-color","#b5b5b5");
			$(".rli5").css("border-right-color","#b5b5b5");
			
			// 鼠标移过图片
			$("#app img").mouseover(function(){
				opacityOut(this,70);
			});
			// 鼠标离开图片
			$("#app img").mouseout(function(){
				opacityOut(this,100);
			});
		});
		$("#app").mouseout(function(){
			$(this).hide();
			$(".rli5").css("border-left-color","#fff");
			$(".rli5").css("border-right-color","#fff");
		});
	});
	//下载app的鼠标放入
	$(".rli5").mouseout(function(){
		$("#app").hide();
		$(this).css("border-left-color","#fff");
		$(this).css("border-right-color","#fff");
		$(".rli5 a").css("color","#999");
	});
	// 微信鼠标放入
	$(".rli7").mouseover(function(){
		$("#wechatCode").show();
	});
	// 微信鼠标离开
	$(".rli7").mouseout(function(){
		$("#wechatCode").hide();
	});

	// 头部效果
	// logo
	$(".logo").mouseover(function(){
		opacityOut(this,70);
		$(this).css("cursor","pointer");
	});
	$(".logo").mouseout(function(){
		opacityOut(this,100);
	});
	//头部搜索框
	// 获取焦点
	$(".hunt input").focus(function(){
		var str = this.placeholder;
		if(str == "科技保暖新能量 满399送智能手环"){
			this.placeholder = "";
			$(this).val("");
		}
	});
	// 失去焦点
	$(".hunt input").blur(function(){
		var str = $(this).val();
		if(str == ""){
			this.placeholder = "科技保暖新能量 满399送智能手环";
		}
	});
	//搜索放大镜
	$(".hunt span").click(function(){
		window.location.href = "http://www.banggo.com/theme/MM20160705-1.shtml?word=";
	});
	//男长裤...鼠标滑过
	for(var i = 1;i <= $(".headt ul li").size();i++){
		$(".htli" + i + " a").mouseover(function(){
			$(this).css("color","#000");
		});
		$(".htli" + i + " a").mouseout(function(){
			$(this).css("color","#666");
		});
	}
	//购物袋
	$(".shop").mouseover(function(){
		$(this).css("color","#999");
	});
	$(".shop").mouseout(function(){
		$(this).css("color","#000");
	});
	// 点击购物袋（判断有登录账号 则进入购物车；没有登录账号 则进入登录界面）
	$('.shop').click(function(){

		var str = $('.rli1').children().html();
		if(str == '登录'){
			window.location.href = 'html/login.html';
		}else{
			window.location.href = 'html/shopbag.html';
		}
	});

	//sort
	for(var i = 1;i <= $(".sort li").size();i++){
		$(".sort .sortli" + i).mouseover(function(){;
			$(this).animate({opacity:0.7});
		});
		$(".sort .sortli" + i).mouseout(function(){;
			$(this).animate({opacity:1});
		});
	}
	
})