var Movie = require('../models/movie');
var Category = require('../models/category');

//index page
exports.index = function(req,res){
    Category
        .find({})
        .populate({path:'movies',options:{limit:6}})
        .exec(function(err,categories){
            if(err){
                console.log(err);
            }
            res.render('index',{
                title:"ik007 首页",
                categories:categories
            })
        })
};

//search
exports.search = function(req,res){
    var catId = req.query.cat;
    var q = req.query.q;
    var page = parseInt(req.query.p,10) || 0;
    var _pageSize = 2;
    var index = page * _pageSize;
    if(catId) {
        Category
            .find({_id: catId})
            .populate({
                path: 'movies',
                select: 'title poster'
            })
            .exec(function (err, categories) {
                if (err) {
                    console.log(err);
                }
                var category = categories[0] || {};
                var movies = category.movies || [];
                var results = movies.slice(index, index + _pageSize);
                res.render('results', {
                    title: "ik007 结果列表",
                    keyword: category.name,
                    currentPage: page + 1,
                    query: "cat=" + catId,
                    totalPage: Math.ceil(movies.length / _pageSize),
                    movies: results
                })
            })
    }else{
        Movie
            .find({title:new RegExp(q+".*",'i')})
            .exec(function (err, movies) {
                if (err) {
                    console.log(err);
                }
                var results = movies.slice(index, index + _pageSize);
                res.render('results', {
                    title: "ik007 结果列表",
                    keyword: q,
                    currentPage: page + 1,
                    query: "cat=" + catId,
                    totalPage: Math.ceil(movies.length / _pageSize),
                    movies: results
                })
            })
    }
};
