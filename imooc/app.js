var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views','./views');
app.set('view engine','jade');
app.listen(port);

console.log('imooc started on port '+port);

//index page
app.get('/',function(req,res){
	res.render('index',{
		title:"imooc 首页"
		movies:[{
			title:"机械战警",
			_id : 1,
			poster:'http:/r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:"机械战警",
			_id : 2,
			poster:'http:/r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:"机械战警",
			_id : 3,
			poster:'http:/r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:"机械战警",
			_id : 4,
			poster:'http:/r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:"机械战警",
			_id : 5,
			poster:'http:/r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title:"机械战警",
			_id : 6,
			poster:'http:/r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})
//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:"imooc 详情页"
		movie:{
			doctor:"何塞·帕迪里亚",
			coutry:"美国",
			title:"机械战警",
			year:"2014",
			poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5",
			language:"英语",
			flash:"http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf",
			summary:"影片的故事背景与原版基本相同，故事设定在2028年的底特律，男主角亚历克斯·墨菲是一名正直的警察，被坏人安装在车上的炸弹炸成重伤，为了救他，OmniCorp公司将他改造成了生化机器人“机器战警”，代表着美国司法的未来。"
		}
	})
})
//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:"imooc 后台录入页"
		movie:{
			title:"",
			doctor:"",
			coutry:"",
			year:"",
			poster:"",
			flash:"",
			summary:"",
			language:""
		}
	})
})
//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:"imooc 列表页"
	})
})