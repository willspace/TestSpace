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
    'pro/page/components/input/mobileInput/mobileInput',
    'pro/page/components/input/capInput/capInput',
    'pro/page/components/notify/notify',
    'pro/page/requestProxy',
    'pro/page/contents'
],function(_k,_e,_v,_ut,_mi,_ci,_notify,_j,_ct,_p){
    var _pro;
    _p._$$Step = _k._$klass();
    _pro = _p._$$Step._$extend(_ut._$$EventTarget);

    _pro.__init = function(_options){
        this.__super(_options);
        this.__opr = _e._$get('m-opr');
        this.__form = _e._$get('form-changephone');
        this.__nextBtn = _e._$getByClassName(this.__opr,'j-next')[0];
        this.__mobileInput = new _mi({data:{placeholder:'请输入当前手机号码'}});
        this.__capInput = new _ci();
        this.__mobileInput.$inject(this.__form);
        this.__capInput.$inject(this.__form);
        _v._$addEvent(this.__nextBtn,'click',this.__doNext._$bind(this));
    };

    _pro.__destroy = function(_options){
        this.__destroy(_options);
    };

    _pro.__doNext = function(){
        this.__mobileInput.$emit('checkState');
        if (this.__mobileInput.data.state==1 ){
            // doNext
            var _url = '/web/mobchgoff/check_mob';
            var _data = {
                mobile    : this.__mobileInput.data.value,
                checkcode : this.__capInput.data.value
            };
            _j._$request(_url,{
                method:'POST',
                data:_data,
                onsuccess:this.__onSuccess._$bind(this),
                onwarn:this.__onWarn._$bind(this)
            })
        }
    };

    _pro.__onSuccess = function(_json){
        var _code = _json.result || "";
        var _nextStep = _json.nextStep ||"";
        if(_code == "201" || !!_nextStep){
            window.location.href = _nextStep;
        }else{
            this.__onWarn(_json);
        }
    };

    _pro.__onWarn = function(_json){
        var _code = _json.result || "";
        if(!!_json){
            var _txt = _ct[_code] || '未知错误，请你稍后再试';
            if(_code == "303" ||_code == "420" ||_code == "601"){
                this.__mobileInput.showError(_txt);
            }else if(_code == "304"){
                this.__capInput.showError(_txt);
            }else{
                _$notify.show(_txt);
            }
            this.__capInput.onGetCap();
        }
    };
    _p._$$Step._$allocate({});
});