/**
 * Created by JokerWILL on 2016/10/17.
 */

//依赖模型
var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Movie = require('../app/controllers/movie');
var Category = require('../app/controllers/category');

module.exports = function(app){
    
    //预处理
    app.use(function(req,res,next){
        var _user = req.session.user;
        app.locals.user = _user;
        next();
    });

    /**
     * Index | 首页
     * */
    app.get('/',Index.index);
    //分页
    app.get('/results',Index.search);

    /**
     * User | 用户模块
     * */
    app.get('/admin/user/list',User.signinRequired,User.adminRequired,User.list);
    app.delete('/admin/user/list',User.signinRequired,User.adminRequired,User.del);
    app.post('/user/signup',User.signup);
    app.post('/user/signin',User.signin);
    app.get('/logout',User.logout);

    /**
     * Movie | 电影模块
     * */
    app.get('/movie/:id',Movie.detail);
    app.get('/admin/movie/new',User.signinRequired,User.adminRequired,Movie.new);
    app.get('/admin/movie/update/:id',User.signinRequired,User.adminRequired,Movie.update);
    app.post('/admin/movie/save',User.signinRequired,User.adminRequired,Movie.savePoster,Movie.save);
    app.get('/admin/movie/list',User.signinRequired,User.adminRequired,Movie.list);
    app.delete('/admin/movie/list',User.signinRequired,User.adminRequired,Movie.del);
    //分类
    app.get('/admin/movie/category/new',User.signinRequired,User.adminRequired,Category.new);
    app.post('/admin/movie/category/save',User.signinRequired,User.adminRequired,Category.save);
    app.get('/admin/movie/category/update/:id',User.signinRequired,User.adminRequired,Category.update);
    app.get('/admin/movie/category/list',User.signinRequired,User.adminRequired,Category.list);
    app.delete('/admin/movie/category/list',User.signinRequired,User.adminRequired,Category.del);



};