
$(function(){

	back.init();

	// 商品件数和总价
	var totalgoods = 0;
	var totalprice = 0;
	

	// 第一个全选按钮
	$('.shopbagMain-t-goods-msg-li1 input').click(function(){

		//判断点击的时候选择框是否勾选
		var flag = $(this).prop('checked');
		if(flag){

			// 购物车中的每个商品的件数和商品种类
			var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
			var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");

			var onegood = 0;
			var onegoodprices = 0;
			totalgoods = 0;
			totalprice = 0;
			for(var i = 0; i < len; i++){
				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				//计算总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;
			}

			$('.shopbagMain-t-goods-sel-li1 input').prop('checked',true);
			$('.shopbagMain-t-price-left-input1').prop('checked',true);
			$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
			$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);

		}else{
			$('.shopbagMain-t-goods-sel-li1 input').prop('checked',false);
			$('.shopbagMain-t-price-left-input1').prop('checked',false);
			$('.shopbagMain-t-price-right-sel').children().html("0");
			$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>'+ '0');
		}
	});	
	// 最后一个全选按钮
	$('.shopbagMain-t-price-left-input1').click(function(){

		//判断点击的时候选择框是否勾选
		var flag = $(this).prop('checked');
		if(flag){

			// 购物车中的每个商品的件数和商品种类
			var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
			var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");

			var onegood = 0;
			var onegoodprices = 0;
			totalgoods = 0;
			totalprice = 0;
			for(var i = 0; i < len; i++){
				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				//计算总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;
			}

			$('.shopbagMain-t-goods-msg-li1 input').prop('checked',true);
			$('.shopbagMain-t-goods-sel-li1 input').prop('checked',true);
			$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
			$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);
		}else{
			$('.shopbagMain-t-goods-msg-li1 input').prop('checked',false);
			$('.shopbagMain-t-goods-sel-li1 input').prop('checked',false);
			$('.shopbagMain-t-price-right-sel').children().html("0");
			$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>'+ '0');
		}
	});


	// 商品选中按钮
	$('.shopbagMain-t-goods').on('click','.shopbagMain-t-goods-sel-li1 input',function(){

		// 购物车中的每个商品的件数和商品种类
		var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");

		totalgoods = 0;
		totalprice = 0;
		var onegood = 0;
		var onegoodprices = 0;
	
		var flag = true;

		for(var i = 0;i < len; i++){

			// 判断商品的按钮是否有选中
			if(!obj.eq(i).find("input").prop('checked')){
				flag = false;
			}else{
				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				//计算总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;
			}
		}
		if(flag){
			$('.shopbagMain-t-price-left-input1').prop('checked',true);
			$('.shopbagMain-t-goods-msg-li1 input').prop('checked',true);
			$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
			$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);
		}else{
			$('.shopbagMain-t-price-left-input1').prop('checked',false);
			$('.shopbagMain-t-goods-msg-li1 input').prop('checked',false);
			$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
			$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);
		}	
	});

	// 改变商品数量
	$('.shopbagMain-t-goods').on('click','.shopbagMain-t-goods-sel-li5 input',function(){

		// 购物车中的每个商品的件数和商品种类
		var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");

		var num = $(this).val();
		var total = $(this).parent().prev().find('.unit-cost').html() * num;
		totalgoods = 0;
		totalprice = 0;
		var onegood = 0;
		var onegoodprices = 0;
		// 显示对应商品总价
		$(this).parent().next().children().eq(1).html(total);

		for(var i = 0;i < len; i++){

			// 判断商品的按钮是否有选中
			if(obj.eq(i).find("input").prop('checked')){
				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				//计算所有商品总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;

			}
		}
		// 显示商品件数
		$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
		$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);

	});
	
	//删除商品
	$('.shopbagMain-t-goods').on('click','.del-sel-goods',function(){

		var index = $(this).parent().parent().parent().index();
		var obj1 = $(this).parent().parent().parent();//ul
		var str = $(this).parent().parent().parent().attr("class");//ul的class
		var arr = str.split(" ");

		obj1.remove('.' + arr[1]);

		// 购物车中的每个商品的件数和商品种类
		var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");

		totalgoods = 0;
		totalprice = 0;
		var onegood = 0;
		var onegoodprices = 0;
		for(var i = 0;i < len; i++){

			// 判断商品的按钮是否有选中
			if(obj.eq(i).find("input").prop('checked')){
				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				console.log(totalgoods);
				//计算总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;
				console.log(totalprice);
			}		
		}
		// 显示商品件数
		$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
		$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);

	});

	// 删除选中商品
	$('.shopbagMain-t-price-left-somesel').click(function(){

		var onegood = 0;
		var onegoodprices = 0;
		totalgoods = 0;
		totalprice = 0;

		// 购物车中的每个商品的件数和商品种类
		var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");
		for(var i = 0;i < len; i++){

			if(obj.eq(i).children().prop('checked')){

				var obj1 = obj.eq(i).parent();//对应ul
				var str = obj1.attr("class");//对应ul的类名
				var arr = str.split(" ");
				obj1.remove('.' + arr[1]);
			}
		}
		// 购物车中的每个商品的件数和商品种类（删除后）
		len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");

		for(var i = 0;i < len;i++){

			//重新计算总价
			if(obj.eq(i).children().prop('checked')){

				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				//计算总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;
			}
		}

		// 显示商品件数
		$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
		$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);

	});
	
	// 加入购物车
	$('.shopbagMain-b-scan-addbag').click(function(){

		var onegood = 0;
		var onegoodprices = 0;
		totalgoods = 0;
		totalprice = 0;

		var name = $(this).parent().find('.shopbagMain-b-scan-name').html();//取得商品名称
		var price = $(this).parent().find('.shopbagMain-b-scan-nowprice').html();//取得价格
		price = parseInt(price.slice(10));

		// 购物车中的每个商品的件数和商品种类
		var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");
		var num = 0;

		// 判断该商品中是否存在该商品
		for(var i = 0;i < len;i++){
			//原本的购物车中的所有商品名称
			var prename = obj.eq(i).parent().find('.shopbagMain-t-goods-sel-li2').children().children().eq(1).html()
			if(prename == name){
				// 找到存在的话直接更改里面的数量
				num = parseInt(obj.eq(i).parent().find('.shopbagMain-t-goods-sel-li5').find('input').val()) + 1;
				obj.eq(i).parent().find('.shopbagMain-t-goods-sel-li5').find('input').val(num);
				console.log(num);
				obj.eq(i).parent().find('.shopbagMain-t-goods-sel-li6').find('span').html(price * num);
				return ;
			}
		}

		var html = '<ul class="shopbagMain-t-goods-sel ul1" > <li class="shopbagMain-t-goods-sel-li1">'+
		        '<input type="checkbox"/></li> <li class="shopbagMain-t-goods-sel-li2"> <dl> <dt class="fl db">'+
				'<span class="shopbagMain-t-goods-sel-li2-img db"><img src="../images/shopbag/shopbag-1.jpg" alt="">'+
				'</span> </dt> <dd class="mt4">男裤筒微皱干净牛仔长裤</dd> <dd>商品编号：<span>556250</span></dd>'+
				'<dd>满赠</dd> </dl> </li> <li class="shopbagMain-t-goods-sel-li3"> <dl>'+
				'<dd class="mt10">颜色：<span>灰蓝</span></dd> <dd>尺码：<span>(185/928)</span></dd>'+
				'</dl> </li> <li class="shopbagMain-t-goods-sel-li4"> <em>¥</em><span class="unit-cost">25</span>'+
				'</li> <li class="shopbagMain-t-goods-sel-li5"> <input type="number" min=0 value="1"> </li>'+
				'<li class="shopbagMain-t-goods-sel-li6"><em>¥</em><span>25</span></li>'+
				'<li class="shopbagMain-t-goods-sel-li7"> <dl> <dd class="mt10">加入收藏夹</dd>'+
				'<dd class="del-sel-goods">删除</dd> </dl> </li> </ul>';

		// 新增一条商品信息
		$('.shopbagMain-t-goods').append(html);

		// 购物车中的每个商品的件数和商品种类(点击加入购物车后)
		var len = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1").size();
		var obj = $(".shopbagMain-t-goods .shopbagMain-t-goods-sel-li1");
		//选中状态默认值为false
		obj.eq(len-1).parent().find('.shopbagMain-t-goods-sel-li1').find('input').prop('checked',false);
		// 更改名字
		obj.eq(len-1).parent().find('.shopbagMain-t-goods-sel-li2').children().children().eq(1).html(name);
		// 更改单价
		obj.eq(len-1).parent().find('.unit-cost').html(price);
		// 获取商品件数
		 num = obj.eq(len-1).parent().find('.shopbagMain-t-goods-sel-li5').find('input').val();
		// 小计		
		obj.eq(len-1).parent().find('.shopbagMain-t-goods-sel-li6').find('span').html(price * num);
		// 获取加入商品的图片信息
		var strImg = $(this).parent().children().eq(0).children().attr('src');
		// 更改图片
		obj.eq(len-1).parent().find('.shopbagMain-t-goods-sel-li2').find('img').attr('src',strImg);

		for(var i = 0;i < len;i++){

			//重新计算总价
			if(obj.eq(i).children().prop('checked')){

				// 判断每件商品的数量
				onegood = parseInt(obj.eq(i).parent().children().eq(4).children().val());
				totalgoods += onegood;
				//计算总价
				onegoodprices = parseInt(obj.eq(i).parent().children().eq(5).children().eq(1).html());
				totalprice += onegoodprices;
			}
		}

		// 显示商品件数
		$('.shopbagMain-t-price-right-sel').children().html(totalgoods);
		$('.shopbagMain-t-price-right-totalspan').html('<em>¥</em>' + totalprice);

	});

	//去结算
	$('.shopbagMain-t-price-accountbtn').click(function(){

		saveMSG.init();
		
	});

})

//将数据存储到cookie中
var saveMSG = {

	dom : {},
	len : 0,
	data : [],
	json_len : 0,

	init : function(){

		this.initDom();
		// if(this.json_len == 0){
		// 	// window.confirm('没有选中商品');
		// }else{
		// 	// window.location.href = "../html/order.html";
		// }
		this.initDom();
		this.saveData();
	},
	initDom : function(){

		var dom = this.dom;
		dom.goodlist = $('.shopbagMain-t-goods .shopbagMain-t-goods-sel');
		len = dom.goodlist.size();
		
		dom.tot = $('.shopbagMain-t-price-right-totalspan');
		dom.totalnum = $('.shopbagMain-t-price-right-sel span');
	},
	saveData : function(){
		console.log(66);
		var dom = this.dom;
		
		for(var i = 0 ;i < len;i++){
			console.log(dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li1').children().prop('checked'));
			if(dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li1').children().prop('checked')){

				this.json_len ++;
			}
		}
		if(this.json_len == 0){
			window.confirm('没有选中商品');
			return ;
		}else{
			this.data = [];
		}
		for(var i =0; i < len ; i++){

			// 判断有选择的商品才存入cookies中
			// if(dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li1').children().prop('checked')){

				var obj = {};
				var checked = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li1').children().prop('checked');
				var img = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li2').children().children().eq(0).children().children().attr('src');
				var name = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li2').children().children().eq(1).html();
				var color = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li3').children().children().eq(0).children().html();
				var rule = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li3').children().children().eq(1).children().html();
				var price = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li4').children().eq(1).html();
				var num = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li5').children().val();
				var total = dom.goodlist.eq(i).find('.shopbagMain-t-goods-sel-li6').children().eq(1).html();
				var totalmunch = dom.tot.html().slice(10);
				var totalnumber = dom.totalnum.html();
				console.log(dom.totalnum.html());
				
				obj.checked = checked;
				obj.img = img;
				obj.name = name;
				obj.color = color;
				obj.rule = rule;
				obj.price = price;
				obj.num = num;
				obj.total = total;
				// obj.totalmunch = totalmunch;

				//将对象存入数组中
				this.data.push(obj);
			// }		
		}
		var str = JSON.stringify(this.data);
		setCookie("str",str,100);
		setCookie("totalmunch",totalmunch,100);
		setCookie("totalnumber",totalnumber,100);

		window.location.href = "../html/order.html";
	}
};

// 回退时保存的购物车
var back = {

	dom : {},
	data : [],
	html : "",
	totalmunch : 0,

	init : function(){

		this.initDom();
		this.getDate();
	},
	initDom : function(){

		var dom = this.dom;
		dom.tot = $('.shopbagMain-t-price-right-totalspan');
		dom.totalnum = $('.shopbagMain-t-price-right-sel span');
	},
	getDate : function(){

		var dom = this.dom;

		if(getCookies("str") != ""){

			this.totalmunch = JSON.parse(getCookies('totalmunch'));
			this.totalnumber = JSON.parse(getCookies('totalnumber'));
			console.log(this.totalnumber);
			this.data = JSON.parse(getCookies('str'));

			for(var i = 0;i < this.data.length;i++){
				// console.log(this.data[i].checked);
				// 新增一条商品信息
				this.html = '<ul class="shopbagMain-t-goods-sel ul1" > <li class="shopbagMain-t-goods-sel-li1">'+
			        '<input type="checkbox"/></li> <li class="shopbagMain-t-goods-sel-li2"> <dl> <dt class="fl db">'+
					'<span class="shopbagMain-t-goods-sel-li2-img db"><img src="' +this.data[i].img+ '" alt="">'+
					'</span> </dt> <dd class="mt4">' + this.data[i].name + '</dd> <dd>商品编号：<span>556250</span></dd>'+
					'<dd>满赠</dd> </dl> </li> <li class="shopbagMain-t-goods-sel-li3"> <dl>'+
					'<dd class="mt10">颜色：<span>' + this.data[i].color + '</span></dd> <dd>尺码：<span>' + this.data[i].rule + '</span></dd>'+
					'</dl> </li> <li class="shopbagMain-t-goods-sel-li4"> <em>¥</em><span class="unit-cost">' + this.data[i].price + '</span>'+
					'</li> <li class="shopbagMain-t-goods-sel-li5"> <input type="number" min=0 value="' + this.data[i].num + '"> </li>'+
					'<li class="shopbagMain-t-goods-sel-li6"><em>¥</em><span>' + this.data[i].total + '</span></li>'+
					'<li class="shopbagMain-t-goods-sel-li7"> <dl> <dd class="mt10">加入收藏夹</dd>'+
					'<dd class="del-sel-goods">删除</dd> </dl> </li> </ul>';

				$('.shopbagMain-t-goods').append(this.html);
				$('.shopbagMain-t-goods .shopbagMain-t-goods-sel').eq(i).find('.shopbagMain-t-goods-sel-li1').children().prop('checked', this.data[i].checked);
			}

			dom.tot.html("<em>¥</em>" + this.totalmunch);	
			dom.totalnum.html(this.totalnumber);	
		}
	}
};