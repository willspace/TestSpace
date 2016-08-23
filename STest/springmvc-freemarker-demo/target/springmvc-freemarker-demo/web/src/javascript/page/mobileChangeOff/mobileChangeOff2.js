/**
 * 更换手机：第一步，确认当恰帐号
 * @author Zhang Wei(wei.zhangwei@corp.netease.com)
 * @time 2016-07-13
 */

NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/event',
    'pro/page/requestProxy',
    'pro/page/contents',
    'pro/page/components/alert/msgAlert/msgAlert',
    'pro/page/components/notify/notify'
],function(_k,_e,_v,_ut,_j,_ct,_msgalert,_,_p){
    var _pro;
    _p._$$Step = _k._$klass();
    _pro = _p._$$Step._$extend(_ut._$$EventTarget);

    _pro.__init = function(_options){
        this.__super(_options);
        this.__opr = _e._$get('m-opr');
        this.__btnSafemail = _e._$getByClassName(this.__opr,'j-safe-email')[0];
        if(!!this.__btnSafemail) {
            _v._$addEvent(this.__btnSafemail, 'click', this.__doNext._$bind(this));
        }
        this.__msgAlert = new _msgalert({data:{title:"扫码申诉",page:"mob-p"}});
        this.__msgAlert.$inject("body");
        this.__appealBtn = _e._$getByClassName(this.__opr,'j-appeal')[0];
        _v._$addEvent(this.__appealBtn,'click',this.__onAppealClick._$bind(this));
    };

    _pro.__destroy = function(_options){
        this.__destroy(_options);
    };

    _pro.__doNext = function(){
            //// doNext
            var _url = '/web/mobchgoff/send_email';
            _j._$request(_url,{
                method:'POST',
                data:{},
                onsuccess:this.__onSuccess._$bind(this),
                onwarn:this.__onWarn._$bind(this)
            });
    };

    _pro.__onSuccess = function(_json){
        var _code = _json.result || "";
        if(_code == "201" ){
            if(!!_json.nextStep) {
                window.location.href = _json.nextStep;
            }else{
                _$notify.show('未知错误，请你稍后再试');
            }
        }else{
            this.__onWarn(_json);
        }
    };

    _pro.__onWarn = function(_json){
        var _code = _json.result || "";
        if(!!_json){
            var _txt = _ct[_code] || '未知错误，请你稍后再试';
            _$notify.show(_txt);
        }
    };

    _pro.__onAppealClick = function () {
        this.__msgAlert.showAlert();
    };

    _p._$$Step._$allocate({});
});