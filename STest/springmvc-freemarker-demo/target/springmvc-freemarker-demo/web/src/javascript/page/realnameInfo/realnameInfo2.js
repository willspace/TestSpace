/**
 * 设置实名信息：
 * @author Zhang Wei(wei.zhangwei@corp.netease.com)
 * @time 2016-08-01
 */

NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'util/event',
    'pro/page/components/input/idInput/idInput',
    'pro/page/components/input/input',
    'pro/page/components/alert/idAlert/idAlert',
    'pro/page/components/notify/notify',
    'pro/page/requestProxy',
    'pro/page/contents'
],function(_k,_e,_v,_ut,_idi,_ipt,_idalert,_notify,_j,_ct,_p){
    var _pro;
    _p._$$Step = _k._$klass();
    _pro = _p._$$Step._$extend(_ut._$$EventTarget);

    _pro.__init = function(_options){
        this.__super(_options);
        this.__opr = _e._$get('m-opr');
        this.__form = _e._$get('form-realinfo-set');
        this.__idInput = new _idi();
        this.__nameInput = new _ipt({data:{placeholder:"请输入你的姓名",txtErr:"请正确输入你的姓名"}});
        this.__idAlert = new _idalert();
        this.__idAlert.$on('onsubmit',this.__doNext._$bind(this));
        this.__idInput.$inject(this.__form);
        this.__nameInput.$inject(this.__form);
        this.__idAlert.$inject("body");
        this.__submitBtn = _e._$getByClassName(this.__opr,'j-submit')[0];
        _v._$addEvent(this.__submitBtn,'click',this.__doSubmit._$bind(this));
    };

    _pro.__destroy = function(_options){
        this.__destroy(_options);
    };

    _pro.__doSubmit = function () {
        this.__idInput.$emit('checkState');
        this.__nameInput.$emit('checkState');
        if (this.__idInput.data.state==1 && this.__nameInput.data.state==1){
            var _id = this.__idInput.data.value;
            var _name = this.__nameInput.data.value;
            this.__idAlert.showAlert(_id,_name);
        }
    };
    _pro.__doNext = function(){
            //// doNext
            var _url = '/web/realnaminfo/submit_info';
            var _data = {
                idno:this.__idInput.data.value,
                realname:this.__nameInput.data.value
            };
            _j._$request(_url,{
                method:'POST',
                data:_data,
                onsuccess:this.__onSuccess._$bind(this),
                onwarn:this.__onWarn._$bind(this)
            });

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
            if(_code == "620" || _code == "622"){
                this.__idInput.showError(_txt);
            }else if(_code == "621"){
                this.__nameInput.showError(_txt);
            }else{
                _$notify.show(_txt);
            }
        }
    };

    _p._$$Step._$allocate({});
});