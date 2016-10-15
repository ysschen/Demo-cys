

$(function(){

	// 点击使用新地址按钮
	$('.order-add-adds-newAdd input').click(function(){

		$(this).prop('checked',true);
		$('.order-add-adds div table').css('display','block');
		
	});

	//点击收货地址确定按钮
	$('.order-add-adds-btn').click(function(){

		$('.order-add-adds div table').css('display','none');
	});

	// 输入使用邦购币数量
	$('.order-bgcash-cont-msg input').focus(function(){

		countPrice.judgebg();
	});

	//计算金额
	countPrice.init();

	//邦购币使用点击按钮
	$('.order-bgcash-cont-btn').click(function(){

		countPrice.judgebgcash();
		countPrice.sumbgcash();
		countPrice.sumtotalPrice();
	});

	//计算金额
	countPrice.init();

	// 点击提交
	$('.order-submit-btn').click(function(){

		countPrice.saveTotal();
		window.location.href = "../html/payment.html";
	});

})

// 计算金额
var countPrice = {

	dom : {},
	len : 0,
	gpprice : 0,
	bgprice : 0,
	totalprice : 0,
	cookie : "",
	bg_haveuse : 0,
	maxNum : 0,

	init : function(){

		this.getData();
		this.initDom();
		
		this.sumgoodPrice();
		this.sumtotalPrice();
		
	},
	initDom : function(){

		var dom = this.dom;
		dom.goodPrice = $('.order-submit-goodP');//商品金额
		dom.freight = $('.order-submit-freight');//运费
		dom.bgcash = $('.order-submit-bgcash');//邦购金额
		dom.totalPrice = $('.order-submit-freight-total');//总价
		dom.bgbtn = $('.order-bgcash-cont-btn');//邦购币使用按钮
		dom.bgnumber = $('.order-bgcash-cont-msg input');//使用的邦购币
		dom.allGoodList = $('.order-list .order-list-detail');//商品列表
		dom.bgcashMax = $('.order-bgcash-cont-sum span');//邦购币的最大数
		len = dom.allGoodList.size();
		dom.havedbg = $('.order-bgcash-cont-msg input');
		maxNum = parseInt(dom.bgcashMax.html());//邦购币剩余量
	},
	sumgoodPrice : function(){//商品金额

		var dom = this.dom;
		var obj = this;
		for(var i = 0;i < len;i++){
			// 取出每一行的小计
			this.gpprice += parseInt(dom.allGoodList.eq(i).find('.order-list-detail-li5').children().eq(1).html());
		}
		// 商品金额
		dom.goodPrice.children().eq(1).html(this.gpprice);
	},
	// 判断原先有没有邦购币
	judgebg : function(){

		var dom = this.dom;
		var obj = this;
		this.bg_haveuse = dom.bgnumber.val();
		if(this.bg_haveuse == ''){
			this.bg_haveuse = parseInt(0);
		}else{
			this.bg_haveuse = parseInt(this.bg_haveuse);
		}
		
	},
	sumbgcash : function(){//点击使用才触发

		var dom = this.dom;
		var obj = this;		
		if(dom.bgbtn.is('.btncolor')){
			this.bgprice =  parseInt(dom.bgnumber.val());
			dom.bgcash.children().eq(1).html(this.bgprice);
		}
	},
	sumtotalPrice : function(){//总价

		var dom = this.dom;
		var obj = this;
		this.totalprice = parseInt(dom.goodPrice.children().eq(1).html()) + parseInt(dom.freight.children().eq(1).html()) - parseInt(dom.bgcash.children().eq(1).html()); 
		dom.totalPrice.children().eq(1).html(this.totalprice);

	},
	judgebgcash : function(){//使用邦购币

		var dom = this.dom;
		var obj = this;

		var num = parseInt(dom.bgnumber.val());//现在的邦购币总使用量
		var priceMax = dom.goodPrice.children().eq(1).html();//商品总额
		// 需要判断使用的个数有没有超过当前可用的邦购币
		if(num <= maxNum){

			//判断使用是不能超过商品金额
			 if(num > priceMax){
			 	dom.bgnumber.val(priceMax + this.bg_haveuse);
			}else{
				dom.bgnumber.val(num + this.bg_haveuse);
			}
			dom.bgbtn.removeClass('unbtncolor');
			dom.bgbtn.addClass('btncolor');
			var used = num + this.bg_haveuse;
			maxNum = maxNum - num;//计算邦购币剩余量
			dom.bgcashMax.html(maxNum);//改变页面值
			
			
		}else{
			dom.bgnumber.val(this.bg_haveuse);
		}		
	},
	// 获取cookies取到商品
	getData : function(){

		var dom = this.dom;
		this.cookie = getCookies("str");//cookies中的数据
		var arrData = JSON.parse(this.cookie);//将cookies数据转化为数组

		html = '<p class="order-list-tit tit">商品清单</p> <ul class="order-list-goodtit">'+
				'<li class="">商品名称</li> <li class="">颜色尺码</li> <li class="">单价(元)</li>'+
				'<li class="">数量</li> <li class="">小计</li> </ul>';
		for(var i = 0; i < arrData.length; i++){

			if(arrData[i].checked ){

				html = html + '<ul class="order-list-detail" > <li class="order-list-detail-li1">' +
		                  '<dl class="order-list-detail-li1-dl"> <dt class="fl db">' +
						  '<span class="order-list-detail-li1-img db"><img src="' + arrData[i].img + '" alt=""></span>' +
						  '</dt> <dd id="goods_name" class="order-list-detail-li1-name mt4">'+
						  arrData[i].name +'</dd> </dl> </li> <li class="order-list-detail-li2">'+
					      '<dl class="order-list-detail-li2-dl"> <dd class="mt10">颜色：<span>' + arrData[i].color + '</span></dd>'+
						  '<dd>尺码：<span>' + arrData[i].rule + '</span></dd> </dl> </li> <li class="order-list-detail-li3">'+
					      '<em>¥</em><span class="unit-cost">'+ arrData[i].price +'</span> </li> <li class="order-list-detail-li4">'+
					      '<span>'+ arrData[i].num +'</span> </li> <li class="order-list-detail-li5"><em>¥</em><span>' + arrData[i].total + '</span></li>'+
			              '</ul>';
			}
			$('.order-list').html(html);
		}
		
	},
	// 存储总价
	saveTotal : function(){

		var dom = this.dom;
		setCookie('allTotal',this.totalprice,100);
	}
};