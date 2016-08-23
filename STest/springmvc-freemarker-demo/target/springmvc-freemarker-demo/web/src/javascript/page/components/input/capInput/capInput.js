/**
 * 验证码输入框基础控件
 * @author ZhangWei(wei.zhangwei@corp.netease.com)
 * pro/page/components/input/capInput/capInput
 */
NEJ.define([
    'base/event',
    'base/util',
    'pro/page/components/input/input',
    'pro/page/util',
    'pro/page/requestProxy',
    'text!./capInput.html'
],function(_e,_util,_i,_u,_j,_tmp,_p,_o,_f,_r){
    var CapInput = _i.extend({
        template:_tmp,
        config:function(_data){
            _util._$merge(this.data,_data||{});
            this.supr();
            this.$on('checkState',this.onCheckState);
        },
        init:function(_data){
            this.supr(_data);
            this.onGetCap();
        },
        onBlur:function(_event){
            this.supr(_event);
        },
        onClear:function(_event){
            this.supr(_event);
            this.$emit('capok',0);
        },
        showState:function(_value){
            if (_u._$isCap(_value)){
                this.data.state = 1;
                this.$emit('capok',1);
            }else{
                this.showError('验证码格式错误');
                this.$emit('capok',0);
            }
            this.$update();
        },
        onGetCap:function(){
            this.onEmpty();
            this.data.imgcap = '/web/comn/get_cap_img?t'+ new Date().getTime();
            this.$emit('capok',0);
            //var __onSuccess = function(_json) {
            //    if(!!_json.capId) {
            //        this.data.imgcap = '/web/comn/get_cap_img?capid=' + _json.capId + "&" + new Date().getTime();
            //        this.$update();
            //    }else{
            //        __onWarn();
            //    }
            //};
            //var __onWarn = function(){
            //    this.showError('图片验证码获取失败，请稍后再试。');
            //    this.$update();
            //    this.$emit('capok',0);
            //};
            //var _url = '/web/comn/get_cap_id';
            //_j._$request(_url,{
            //    method:'GET',
            //    onsuccess:__onSuccess._$bind(this),
            //    onwarn:__onWarn._$bind(this)
            //});
            this.$update();
        }
    });
    return CapInput;
})