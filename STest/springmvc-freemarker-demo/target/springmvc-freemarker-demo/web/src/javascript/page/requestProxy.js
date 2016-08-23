/**
 * 异步请求代理文件
 * @author cheng-lin@corp.netease.com
 * @return {Void}
 */
/* module pro/page/requestProxy */
NEJ.define([
    'base/klass',
    'base/element',
    'base/util',
    'util/ajax/xdr',
    'util/cache/cookie'
],
function(_k,_e,_u,_j,_c,_p,_o,_f,_r){
    var _indexUrl = '/security/retrievePass/index.do';

    /**
     * [_onload description]
     * @param  {[type]} options [description]
     * @param  {[type]} res     [description]
     * @return {[type]}         [description]
     */
    var _onload = function(options,res){
        if (_u._$isString(res)){
            res = JSON.parse(res);
        }
        var _code = res.result;
        if (_code == 100417){
            location.href = 'http://reg.163.com';
            return;
        }
        if (_code == 100404 || _code == 100416){
            location.href = _indexUrl + '?errorCode=' + _code;
            return;
        }
        options.onsuccess(res);
    };

    /**
     * [_onerror description]
     * @param  {[type]} options [description]
     * @param  {[type]} res     [description]
     * @return {[type]}         [description]
     */
    var _onerror = function(options,res){
        if (_u._$isString(res)){
            res = JSON.parse(res);
        }
        if (!res.result){
            res.result = 100503;
        }
        options.onwarn(res);
    };

    /**
     * [_$request description]
     * @param  {[type]} _url     [description]
     * @param  {[type]} _options [description]
     * @return {[type]}          [description]
     */
    _p._$request = function(_url,_options){
        _options.onload = _onload._$bind(null,_options);
        _options.onerror = _onerror._$bind(null,_options);
        _options.timeout = 30000;
        _options.headers = _options.headers||{'X-Requested-With':"XMLHttpRequest"};
        _j._$request(_url,_options);
    };

    return _p;
});