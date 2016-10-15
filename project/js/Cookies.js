

// function setCookies(name,value){

// 	var oDate = new Date();
// 	oDate.setDate(oDate.getDate() + 365);
// 	document.cookie = "" + name + "=" value + "; expires = " + oDate;
// }

// 封装设置cookie的函数
function setCookie(name,valName,iday,doMain = '10.3.133.22'){
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iday);
	document.cookie = "" + name + "=" + valName + "; expires = " + oDate + ";domain=" + doMain + ";Path=/";
}

function getCookies(searchname){
// username=cys;password=123;
	var str = document.cookie;
	var arr0 = str.split("; ");
	for(var i = 0;i < arr0.length;i++){
		var arr1 = arr0[i].split("=");
		var name = arr1[0];
		var value = arr1[1];

		if(name == searchname){
			return value;
		}
	}

	return "";
}


//删除cookie
function deleatCookie(delname,doMain = '10.3.133.22'){

	// setCookie(delname," ",-7);

	var oDate = new Date();
	oDate.setDate(oDate.getDate() - 1);
	document.cookie = "" + delname + "=" + " " + ";expires=" + oDate + ";domain=" + doMain + ";Path=/";
}


// function getCookie(name) {
//     var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
//         val = document.cookie.match(reg);
//     return val ? (val[2] ? unescape(val[2]) : "") : null;
// }

// function setCookie(name, value, expires, path, domain, secure) {
//     var exp = new Date(),
//         expires = arguments[2] || null,
//         path = arguments[3] || "/",
//         domain = arguments[4] || null,
//         secure = arguments[5] || false;
//     expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
//     document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
// }

// function delCookie(name, path, domain, secure) {
//     var value = $getCookie(name);
//     if (value != null) {
//         var exp = new Date();
//         exp.setMinutes(exp.getMinutes() - 1000);
//         path = path || "/";
//         document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
//     }
// }
