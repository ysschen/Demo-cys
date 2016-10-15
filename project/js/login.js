
$(function(){

	//自动登录
	var str_username = getCookies("username");
	if(str_username != ""){
		window.location.href = "../index.html";
	}

	// 先做记住用户名的判断
	var str_remember = getCookies('remember');
	if(str_remember != ''){
		$('.login-name input').val(str_remember);
	}

	// 登录方式选择
	$('.login-select li').click(function(){

		$(this).addClass('selectstyle');
		$(this).siblings().removeClass('selectstyle');

		// 清空输入框
		$('.login-username').next().val("");
		$('.login-userpassword').next().val("");
		$('.login-usercode').next().val("");

		// 判断选择的是哪一种
		var str_sel = $(this).html();
		if(str_sel == "账户登录"){
			$('.login-username').html("用户名：");
			$('.login-userpassword').html("登录密码：");
			$('.login-name .tip').html('请输入账户或邮箱地址');
		}else if(str_sel == "手机登录"){
			$('.login-username').html("手机号：");
			$('.login-userpassword').html("登录密码：");
			$('.login-name .tip').html('请输入手机号');
		}else{
			$('.login-username').html("卡  号：");
			$('.login-userpassword').html("卡密码：");
			$('.login-name .tip').html('请输入卡号');
		}
	});

	// 用户名输入框
	$('.login-username').next().focus(function(){

		$('.login-name .tip').html('请输入账户或邮箱地址');

	});
	$('.login-username').next().blur(function(){

		$('.login-name .tip').html('');
	
	});

	// 密码输入框
	$('.login-userpassword').next().focus(function(){

		$('.login-password .tip').html('请输入密码');
		
	});
	$('.login-userpassword').next().blur(function(){

		$('.login-password .tip').html('');
	
	});

	// 验证码输入框
	$('.login-usercode').next().focus(function(){

		$('.login-code .tip').html('请输入验证码');
		
	});
	$('.login-usercode').next().blur(function(){

		$('.login-code .tip').html('');
	
	});

	//产生验证码
	$('.num').html(checkCode());
	// 点击换一张
	$('.codebtn').click(function(e){
		e.preventDefault();
		$('.num').html(checkCode());
	});

	// 登录
	$('.login-loginbtn').click(function(){
		
		var username = $('.login-username').next().val();
		var password = $('.login-userpassword').next().val();
		var flag = $('.login-autologin').prev().prop('checked');
		var remember_flag = $('.login-mulsel').children().eq(0).prop('checked');
		var code = judgeCode($('.login-checkcode').children().eq(0).html());
		var in_code = judgeCode($('.login-usercode').next().val());

		if(username != "" && password != "" && code!= ""){

			// 判断用户是否已经注册
			var regCookie = getCookies("reg_msg");
			
			if(username != ""){
				console.log(33);
				regCookie = JSON.parse(regCookie);//获得注册得到的用户信息
				for(var i = 0; i < regCookie.length;i++){
					if(regCookie[i].reg_name == username && regCookie[i].reg_psw == password){

						if(flag){
							setCookie("username",username,7);
						}
						if(remember_flag){
							setCookie("remember",username,7);
						}else{
							deleatCookie('remember');
						}
						if(code == in_code){
							window.location.href = "../index.html";
						}else{
							$('.login-code .tip').html('请输入正确的验证码');
						}
						setCookie('change_name',regCookie[i].reg_name,1);
						return ;
					}	
				}
				window.confirm('用户名或者密码有误');
			}else{

				window.confirm('该用户没有注册');
			}
		}else if(username == "" && password == ""){
			$('.login-name .tip').html('请输入账户或邮箱地址');
			$('.login-password .tip').html('请输入密码');
		}else if(username == "" && password != ""){
			$('.login-name .tip').html('请输入账户或邮箱地址');
		}else if(username != "" && password == ""){
			$('.login-password .tip').html('请输入密码');
		}

		// 更新验证码
		$('.num').html(checkCode());
		
	});

	// 免费注册
	$('.login-freereg button').click(function(){

		window.location.href = "../html/regist.html";
	});


})