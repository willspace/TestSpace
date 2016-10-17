/**
 * Created by JokerWILL on 2016/10/17.
 */

//依赖模型
var Index = require('../app/controllers/index');
var User = require('../app/controllers/user');
var Movie = require('../app/controllers/movie');

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
    app.post('/admin/movie/save',User.signinRequired,User.adminRequired,Movie.save);
    app.get('/admin/movie/list',User.signinRequired,User.adminRequired,Movie.list);
    app.delete('/admin/movie/list',User.signinRequired,User.adminRequired,Movie.del);

};