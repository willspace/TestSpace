/**
 * Created by JokerWILL on 2016/10/17.
 */
var User = require('../models/user');


//signup
exports.signup =function(req,res){
    var _user = req.body.user;
    var user = new User(_user);
    user.save(function(err,user){
        if(err){
            console.log(err);
        }
        //console.log(user);
        return res.redirect('/admin/user/list');
    })

};

//signin
exports.signin = function(req,res){
    var _user = req.body.user;
    var _name = _user.name;
    var _pwd = _user.password;
    User.findOne({name:_name},function(err,user){
        if(err){
            console.log(err);
        }
        if(!user){
            console.log("user is wrong");
            return res.redirect("/");
        }
        user.comparePassword(_pwd,function(err,isMatch){
            if(err){
                console.log(err);
            }
            if(isMatch){
                req.session.user = user;
                console.log("Password is matched");
            }else{
                console.log("Password is not matched");
            }
            return res.redirect('/');
        })
    })

};

//logout
exports.logout = function(req,res){

    delete req.session.user;
    //delete app.locals.user;

    return res.redirect('/');
};


//list page
exports.list = function(req,res){
    User.fetch(function (err, users) {
        if (err) {
            console.log(err);
        }
        res.render('userlist', {
            title: "ik007 用户列表页",
            users: users
        })
    })

};


//userlists delete
exports.del = function(req,res){
    var id = req.query.id;
    if(!!id){
        User.remove({_id:id},function(err,user){
            if(err){
                console.log(err);
            }else{
                res.json({success:1});
            }
        })
    }
};

//midware for user
exports.signinRequired = function(req,res,next){
    var _user = req.session.user;
    if(!_user){
        return res.redirect("/");
    }
    next();
};
exports.adminRequired = function(req,res,next){
    var _user = req.session.user;
    if(_user.role<=10){
        return res.redirect("/");
    }
    next();
};