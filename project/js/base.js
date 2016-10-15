
//获取样式兼容解决
function getStyleAttr(obj){
	if(obj.currentStyle){
		return obj.currentStyle.opacity;
	}else{
		return getComputedStyle(obj).opacity;
	}
}

// 图片淡出
function opacityOut(obj,taget){

	clearInterval(obj.timer);

	obj.timer = setInterval(function(){

		//取得当前值
		var current = getStyleAttr(obj) * 100;

		// 设置速度
		var speed = (taget - current) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		//判断结束
		if(speed > 0 ? current >= taget : current <= taget){
			clearInterval(obj.timer);
		}

		//运动
		obj.style.opacity = (current + speed) / 100;
		obj.style.filter = "alpha(opacity" + "="  + (current + speed) / 100 + ")";
	},30);
	
}