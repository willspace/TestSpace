/**
 * Created by JokerWILL on 2016/10/17.
 */
var _ = require('underscore');
var Movie = require('../models/movie');
var Category = require('../models/category');
var fs = require('fs');
var path = require('path');

//detail page
exports.detail = function(req,res){
    var id= req.params.id;
    Movie.findById(id,function(err,movie){
        Movie.update({_id:id},{$inc:{pv:1}},function(err){
            if(err){
                console.log(err);
            }
        })
        res.render('detail',{
            title:movie.title,
            movie:movie
        })
    })
};

//admin poster

exports.savePoster = function(req,res,next){
    var posterData = req.files.uploadPoster;
    var filePath = posterData.path;
    var originalFilename = posterData.originalFilename;
    if(originalFilename){
        fs.readFile(filePath,function(err,data){
            var timetamp = Date.now();
            var type = posterData.type.split('/')[1];
            var poster = timetamp+"."+type;
            var newPath = path.join(__dirname,'../../','/public/upload/'+poster);
            fs.writeFile(newPath,data,function(err){
                req.poster = poster;
                next();
            })
        });
    }else{
        next();
    }
};

//admin page
exports.new = function(req,res){
    Category.find({},function(err,categories){
        res.render('mv_edit',{
            title:"ik007 后台录入",
            categories:categories,
            movie:{}
        })
    })
};


//admin post movie
exports.save = function(req,res){
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;

    //如果有上次海报
    if(req.poster){
        movieObj.poster = req.poster;
    }
    if( !!id){
        Movie.findById(id,function(err,movie){
            if(err){
                console.log(err);
            }
            _movie = _.extend(movie,movieObj);
            _movie.save(function(err,movie){
                if(err){
                    console.log(err);
                }
                return res.redirect('/movie/'+movie._id);
            })
        })
    }else{
        _movie = new Movie({
            category:movieObj.category,
            doctor:movieObj.doctor,
            title:movieObj.title,
            country:movieObj.country,
            language:movieObj.language,
            year:movieObj.year,
            poster:movieObj.poster,
            summary:movieObj.summary,
            flash:movieObj.flash
        });
        var categoryId = _movie.category;
        _movie.save(function(err,movie){
            if(err){
                console.log(err);
            }
            Category.findById(categoryId,function(err,category){
                category.movies.push(movie._id);
                category.save(function(err,cat){
                    return res.redirect('/movie/'+movie._id);
                })
            })
        })
    }
};

//admin update movie
exports.update = function(req,res){
    var id= req.params.id;

    if(id){
        Category.find({},function(err,categories){
            Movie.findById(id,function(err,movie){
                res.render('mv_edit',{
                    title:'ik007 后台更新页',
                    movie:movie,
                    categories:categories
                })
            })
        })
    }
};

//list page
exports.list = function(req,res){
    Movie.fetch(function(err,movies){
        if(err){
            console.log(err);
        }
        res.render('list',{
            title:"ik007 列表页",
            movies:movies
        })
    })
};

//lists delete
exports.del = function(req,res){
    var id = req.query.id;
    if(!!id){
        Movie.remove({_id:id},function(err,movie){
            if(err){
                console.log(err);
            }else{
                res.json({success:1});
            }
        })
    }
};


