

$(function(){

// 校验用户名
	$(".name input").focus(function(){

		$(".name .tip").html("");
	});
	$(".name input").blur(function(){

		var str = $(this).val();
		var reg = /^.{4,20}/;
		if(str == ""){
			$(".name .tip").html("用户名不能为空");
		}else if(!reg.test(str)){
			$(".name .tip").html("用户名只能为4~20个字符,一个汉字为两个字符");
		}
	});

//显示验证码
	$('.num').html(checkCode);
// 点击换一张
	$('.num').parent().click(function(){

		$('.num').html(checkCode);
	});

// 验证码
	$(".code input").focus(function(){

		$(".code .tip").html("");
	});
	$(".code input").blur(function(){

		var str = judgeCode($(this).val());
		if(str == ""){
			$(".code .tip").html("验证码不能为空");
		}else if(($(".name .tip").html() == "" ) && ($(".phone .tip").html() == "")){
			if(str != judgeCode($('.num').html())){
				$(".code .tip").html("验证码错误");
			}
		}
	});

// 注册
	$('.reg-button').children().click(function(){
 		
 		var flag = false;

		if(/^.{4,20}/.test($('.name input').val()) != '' && $('.phone input').val() != '' && $('.code input').val() != ''){
			
			// 先获取注册用户信息，判断有没有存在用户信息，有则parse，没有则新建一个arr
			if(getCookies("reg_msg") == ""){
				var arr = [];
			}else{
				var arr = JSON.parse(decodeURIComponent(getCookies("reg_msg")));
			}

			// 判断用户是否已经被注册过
			for(var i = 0;i < arr.length;i++){
				if(arr[i].reg_name == $('.name input').val()){
					var flag1 = window.confirm('该用户名已经被注册过');
					if(flag1){
						return ;
					}
				}
			}
			// 存储用户的对象
			var obj = {};
			obj.reg_name = $('.name input').val();
			obj.reg_psw = $('.phone input').val();
			arr.push(obj);
			var str = JSON.stringify(arr);
			
			
			setCookie('reg_msg',str,10);
			var srr = decodeURIComponent(getCookies('reg_msg'));

			flag = window.confirm('注册成功');
			if(flag){
				window.location.href = "../html/login.html";
			}
		}else{
			flag = window.confirm('信息填写有误');
		}

		$('.num').html(checkCode);
		
	});
})