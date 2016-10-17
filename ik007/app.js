var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan')

var port = process.env.PORT || 3000;
var app = express();
app.locals.moment = require('moment');
app.listen(port);

/**
 * 数据库连接
 * */
var dbUrl = 'mongodb://127.0.0.1:27017/data/db';
mongoose.connect(dbUrl);

/**
 * 模板引擎
 * */
app.set('views','./app/views/pages');
app.set('view engine','jade');

/**
 * 参数解析
 * */
//app.use(express.bodyParser());
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

/**
 * cookie
 * */
//app.use(express.cookieParser());
// app.use(express.session({
//secret:'imooc'
//}));
var cookieSession = require('cookie-session');
app.use(cookieSession({
	secret:'imooc'
}));

if('development' === app.get('env')){
	app.set('showStackError',true);
	app.use(morgan(':method :url :status'));
	app.locals.pretty = true;
	mongoose.set('debug',true);
}

/**
 * 接口引用
 * */
require('./config/routes')(app);


console.log('ik007.cn  started on port '+port);
