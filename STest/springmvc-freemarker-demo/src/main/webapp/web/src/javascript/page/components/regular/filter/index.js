/**
 * filter
 * author
 */

NEJ.define([
    'base/util'
], function(_u,_p){
    // common filter
    _p.format = function(date, format){
        return _u._$format(date, format || "yyyy-MM-dd")
    }

    _p.escape = _u._$escape;

    _p.status = (function(){
        var maps = {
            '0': '未处理',
            '1': '处理中',
            '2': '已处理',
            '3': '已关闭'
        };
        return function(value) {
            return maps[value] || value;
        }
    })();

    _p.service = (function(){
        var maps = {
            'nvs': '云主机',
            'nbs': '云硬盘',
            'nos': '对象存储',
            'rds': '关系型数据库',
            'ddb': '分布式数据库',
            'mon': '云监控',
            'ncs': '云搜索',
            'nqs': '云队列',
            'nts': '云转码',
            'nlb': '负载均衡',
            'nce': '容器服务',
            'ncr': '云Redis'
        };
        return function(value) {
            return maps[value] || value;
        }
    })();

      _p.level = (function(){
        var maps = {
            '0': '低',
            '1': '中',
            '2': '高'
        };
        return function(value) {
            return maps[value] || value;
        }
    })();

    return _p;
});