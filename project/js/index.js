

$(function(){

	//二级显示
	$(".dNavDl").mouseenter(function(){

		$(this).find("div").show();
		//三级菜单标题
		$(".secondmenuL dt a").mouseover(function(e){
			$(this).css("color","#e95a4c");
		});	
		$(".secondmenuL dt a").mouseout(function(e){
			$(this).css("color","#000");
		});

	});
	$(".dNavDl").mouseleave(function(){
		$(this).find("div").hide();
	});

	// 轮播图
	carousel.init();

	// 图片变浅
	$("img").mouseover(function(){
		$(this).animate({"opacity":0.5});
	});
	$("img").mouseout(function(){
		$(this).animate({"opacity":1});
	});

	// altplay
	onBig.init();

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

	//倒计时
	var endtime = new Date("2016/9/2 21:25:00");
	var timer = setInterval(function(){
		// 判断已经过了倒计时时间即停止计时器
		if(endtime.getTime() <= new Date().getTime()){
			clearInterval(timer);
			return ;
		}
		$(".clock span").html(countTime(endtime));
	},1000);

	var arr = ['','手','机','邦','购',' ','更','优','惠','!'];
	onebyone(arr);
})

// 轮播图片
var carousel = {

	dom : {},
	index : 0,
	len : 0,

	init : function(){

		var obj = this;
		this.initDom();
		this.startPic();
		this.timer = setInterval(function(){
			obj.changePic();
		},2000);
		this.textPic();
		this.picOver();
		this.btnclick();
	},
	initDom : function(){

		var dom = this.dom;
		dom.piclist = $(".piclist li");
		dom.textlist = $(".textlist li");
		dom.btn = $(".carousel div");
		dom.pre = $(".carousel .preBtn");
		dom.next = $(".carousel .nextBtn");
		this.len = dom.piclist.size();
	},
	startPic : function(){

		var dom = this.dom;
		dom.piclist.eq(this.index).show();
		dom.piclist.eq(this.index).siblings().hide();
		dom.textlist.eq(this.index).css("border-top-color","#000");
		dom.textlist.eq(this.index).siblings().css("border-top-color","#fff");
		dom.textlist.eq(this.index).css("color","#000");
		dom.textlist.eq(this.index).siblings().css("color","#666");
	},
	changePic : function(){

		var dom = this.dom;
		this.index++;
		if(this.index == this.len){
			this.index = 0;
		}
		dom.piclist.eq(this.index).show();
		dom.piclist.eq(this.index).siblings().hide();
		dom.textlist.eq(this.index).css("border-top-color","#000");
		dom.textlist.eq(this.index).siblings().css("border-top-color","#fff");
		dom.textlist.eq(this.index).css("color","#000");
		dom.textlist.eq(this.index).siblings().css("color","#666");
	},
	textPic : function(){

		var obj = this;
		var dom = this.dom;

		dom.textlist.mouseover(function(){
			clearInterval(obj.timer);
			var i = $(this).index();
			dom.piclist.eq(i).show();
			dom.piclist.eq(i).siblings().hide();
			dom.textlist.eq(i).css("border-top-color","#000");
			dom.textlist.eq(i).siblings().css("border-top-color","#fff");
			dom.textlist.eq(i).css("color","#000");
			dom.textlist.eq(i).siblings().css("color","#666");
		});
		dom.textlist.mouseleave(function(){
			// console.log();
			$(this).css("color","#666");
			if($(this).index() == obj.len){
				obj.index = 0;
			}else{
				obj.index = $(this).index();
			}
			obj.timer = setInterval(function(){
				obj.changePic();
			},2000);
			

		});
	},
	// 鼠标滑过轮播图片
	picOver : function(){

		var obj = this;
		var dom = this.dom;

		dom.piclist.mouseenter(function(){
			clearInterval(obj.timer);
			dom.piclist.eq($(this).index()).animate({"opacity":0.7});
		});
		dom.piclist.mouseout(function(){

			dom.piclist.eq($(this).index()).animate({"opacity":1});
			if($(this).index() == obj.len){
				obj.index = 0;
			}else{
				obj.index = $(this).index();
			}
			obj.timer = setInterval(function(){
				obj.changePic();
			},2000);
		});
	},
	btnclick : function(){

		var obj = this;
		var dom = this.dom;

		// 上一页
		dom.pre.click(function(){

			clearInterval(obj.timer);
			var i = $(this).index();
			if(i == 0){
				obj.index = obj.len - 2;
			}else if(i == 1){
				obj.index = obj.len;
			}else{
				obj.index = i - 2;
			}
			obj.changePic();
		});
		// 下一页
		dom.next.click(function(){

			clearInterval(obj.timer);
			var i = $(this).index();
			if(i == obj.len){
				obj.index = 0;
			}
			obj.changePic();
		});
	}
}

//altpaly
var onBig = {

	dom : {},
	len : 0,

	init : function(){

		this.initDom();
		this.changeBig();

	},

	initDom : function(){

		var dom = this.dom;
		dom.imglist = $(".altplay div");
		this.len = dom.imglist.size();
	},

	changeBig : function(){

		var dom = this.dom;
		dom.imglist.mouseenter(function(){

			var index = $(this).index() + 1;
			$(this).find('img').attr('src', 'images/alt-1-1.jpg');
		});
		dom.imglist.mouseleave(function(){

			var index = $(this).index() + 1;
			$(this).find('img').attr('src', 'images/alt-' + index + '.jpg');
		});
	}
}