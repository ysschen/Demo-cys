
$(function(){

	paymentMain.init();
});

var paymentMain = {

	dom : {},
	count : 0,
	all : 0,

	init : function(){

		var dom = this.dom;
		this.initDom();
		var obj = this;
		this.timer = setInterval(function(){
			console.log(new Date().getTime());
			console.log(dom.count);
			if(new Date().getTime() >= dom.count){
				clearInterval(obj.timer);
				return ;
			}
			obj.countdown();
		},30);
		this.num();
		this.totalPrice();
		
	},
	initDom : function(){

		var dom = this.dom;

		dom.clock = $('.paymsg-state-countdown span');
		dom.num = $('.paymsg-state-amount-num');
		dom.total = $('.paymsg-state-amount-total');
		dom.count = new Date().getTime() + 30*60*1000;

	},
	// 倒计时
	countdown : function(){

		var dom = this.dom;
		dom.clock.html(countTimeThity(dom.count));
		
	},
	// 单号
	num : function(){

		var dom = this.dom;
		dom.num.html(randomCode(12));
	},
	// 总价
	totalPrice : function(){

		var dom = this.dom;
		this.all = getCookies("allTotal");
		dom.total.html(this.all);
	}
};