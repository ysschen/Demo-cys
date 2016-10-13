// 封装ajax函数
var ajax = {
	getDate : function(url,page,pagesize){
		var that = this;
		var xml = new XMLHttpRequest();
		xml.open('GET',url + '?page=' + page + '&pagesize=' + pagesize,true);
		xml.send();
		xml.onreadystatechange = function(){
			if(xml.status==200 && xml.readyState==4){
				that.datas = that.datas.concat(JSON.parse(xml.responseText).result.data);
			}
		}
	}
};
// 定义app组件
var app = Vue.extend({

});
// index组件
var index = Vue.extend({
	template : '#tpl',
	// 定义组件自己的定义域
	data : function(){
		return {
			datas : [],
			page:1,
			pagesize:10,
		}
	},
	ready : function(){
		this.get('php/joke.php',this.page,this.pagesize);
	},
	methods:{
		get : ajax.getDate,
		More : function(){
			this.page++;
			this.get('php/joke.php',this.page,this.pagesize);
		},
		Click : function(id){
			while(id > 10){
				id = id % 10;
			}
			// window.location.href = '#!/detail/?id=' + id + '&page=' + this.page + '&pagesize=' + this.pagesize;
			window.location.href = '#!/detail/' + id + '/' + this.page + '/' + this.pagesize;
		}
	}
});
// detail组件
var detail = Vue.extend({
	template : '#del',
	// 定义组件自己的定义域
	data:function(){
		return {
			id : 0,
			page : 0,
			pagesize : 0,
			result : {},
		}
	},
	// 获取路径传过来的参数
	route : {
		data : function(transition){
			// 采用?带参数的方法的获取参数
			// var str = transition.to.path;
			// var arr = str.split('?')[1].split('&');
			// this.id = arr[0].split('=')[1];
			// this.page = arr[1].split('=')[1];
			// this.pagesize = arr[2].split('=')[1];
			// this.$http.get('php/joke.php',{
			// 	params : {
			// 		page : this.page,
			// 		pagesize : this.pagesize,
			// 	}
			// }).then(function(data){
			// 	console.log(data.data);
			// });
			var data = transition.to.params;
			this.id = data.id;
			this.page = data.page;
			this.pagesize = data.pagesize;
			this.$http.get('php/joke.php',{
				params : {
					page : this.page,
					pagesize : this.pagesize,
				}
			}).then(function(data){
				this.result = JSON.parse(data.data).result.data[this.id];
			});
		}
	}
});
// 定义路由
var router = new VueRouter();
router.map({
	'/index':{
		component : index,
	},
	'/detail/:id/:page/:pagesize':{
		name : 'detail',
		component : detail,
	}
});
router.redirect({
	'*':'/index',
});
// 自定义指令
Vue.directive('scrollmore',{
	bind : function(){
		var that = this;
		this.el.addEventListener(this.arg,function(){
			if(this.scrollTop + this.offsetHeight >= this.scrollHeight){
				var func = that.expression.substring(0,that.expression.length-2);
				that.vm[func]();
			}
		})
	}
});
