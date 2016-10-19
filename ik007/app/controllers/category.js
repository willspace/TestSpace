/**
 * Created by JokerWILL on 2016/10/17.
 */
var _ = require('underscore');
var Category = require('../models/category');

//admin page
exports.new = function(req,res){
    res.render('cat_edit',{
        title:"ik007 后台分类录入",
        category:{
            name:""
        }
    })
};


//admin post movie
exports.save = function(req,res){
    var id = req.body.category._id;

    var catObj = req.body.category;
    var _category;
    if( !!id){
        Category.findById(id,function(err,cat){
            if(err){
                console.log(err);
            }
            _category = _.extend(cat,catObj);
            _category.save(function(err,cat){
                if(err){
                    console.log(err);
                }
                return res.redirect('/admin/movie/category/list');
            })
        })
    }else {
        _category = new Category({
            name:catObj.name
        });
        _category.save(function (err, cat) {
            if (err) {
                console.log(err);
            }
            return res.redirect('/admin/movie/category/list/');
        })
    }

};

//admin update movie
exports.update = function(req,res){
    var id= req.params.id;

    if(id){
        Category.findById(id,function(err,cat){
            res.render('cat_edit',{
                title:'ik007 分类更新页',
                category:cat
            })
        })
    }
};

//list page
exports.list = function(req,res){
    Category.fetch(function(err,categories){
        if(err){
            console.log(err);
        }
        res.render('cat_list',{
            title:"ik007 列表页",
            categories:categories
        })
    })
};

//lists delete
exports.del = function(req,res){
    var id = req.query.id;
    if(!!id){
        Category.remove({_id:id},function(err,cat){
            if(err){
                console.log(err);
            }else{
                res.json({success:1});
            }
        })
    }
};
