/**
 * 错误页面
 * @author Zhang Wei(wei.zhangwei@corp.netease.com)
 * @time 2016-08-09
 */

NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/event',
    'pro/page/components/alert/msgAlert/msgAlert'
],function(_k,_e,_v,_ut,_msgalert,_p){
    var _pro;
    _p._$$Step = _k._$klass();
    _pro = _p._$$Step._$extend(_ut._$$EventTarget);

    _pro.__init = function(_options){
        this.__super(_options);
        this.__opr = _e._$get('m-opr');
        this.__appealBtn = _e._$getByClassName(this.__opr,'j-appeal')[0];
        if(!!this.__appealBtn){
            this.__msgAlert = new _msgalert({data:{title:"扫码申诉",page:"mob-p"}});
            this.__msgAlert.$inject("body");
            _v._$addEvent(this.__appealBtn,'click',this.__onAppealClick._$bind(this));
        }
    };

    _pro.__destroy = function(_options){
        this.__destroy(_options);
    };

    _pro.__onAppealClick = function () {
        this.__msgAlert.showAlert();
    };

    _p._$$Step._$allocate({});
});