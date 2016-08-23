/**
 * 手机输入框
 * @author  cheng-lin(cheng-lin@corp.netease.com)
 * pro/page/components/input/mobileInput/mobileInput
 */
NEJ.define([
    'base/event',
    'base/util',
    'pro/page/components/input/input',
    'pro/page/util',
    'text!./mobileInput.html'
],function(_e,_util,_i,_u,_tmp,_p,_o,_f,_r){
    var MobileInput = _i.extend({
        template:_tmp,
        data:{
            placeholder:'请输入手机号'
        },
        config:function(_data){
            _util._$merge(this.data,_data||{});
            this.supr(_data);
            this.$on('checkState',this.onCheckState);
        },
        init:function(_data){
            this.supr(_data);
        },
        onBlur:function(_event){
            this.supr(_event);
        },
        showState:function(_value){
            _value = _value.trim();
            this.data.value =_value;
            if (_u._$isMobile(_value)){
                this.data.state = 1;
            }else{
                this.showError('手机号格式错误');
            }
            this.$update();
        }
    });
    return MobileInput;
})