/**
 * 验证码输入框基础控件
 * @author ZhangWei(wei.zhangwei@corp.netease.com)
 * pro/page/components/input/smsInput/smsInput
 */
NEJ.define([
    'base/event',
    'base/util',
    'pro/page/components/input/input',
    'pro/page/util',
    'text!./smsInput.html'
],function(_e,_util,_i,_u,_tmp,_p,_o,_f,_r){
    var SmsInput = _i.extend({
        template:_tmp,
        data:{
            lockTime:30,
            clockTime:0
        },
        config:function(_data){
            _util._$merge(this.data,_data||{});
            this.supr(_data);
            this.data.canGet = 0;
            this.data.smslock = 0;
            this.$on('checkState',this.onCheckState._$bind(this));
            this.$on('requestOk',this.onRequestOk._$bind(this))
        },
        init:function(_data){
            this.supr(_data);
        },
        onBlur:function(_event){
            this.supr(_event);
        },
        getSms:function(){
            this.onClearNoFocus();
            if (this.data.canGet && !this.data.smslock){
                this.$emit('requestSms',1);
            }else if(!this.data.canGet){
                this.$emit('requestSms',0);
            }
        },
        onRequestOk :function(){
            this.setLockState();
        },
        setLockState:function(_clock){
            this.data.smslock = 1;
            this.data.clockTime = _clock || this.data.lockTime;
            var _lockInerval = setInterval(function(){
                this.data.clockTime -= 1;
                if(this.data.clockTime <= 0){
                    clearInterval(_lockInerval);
                    this.data.smslock = 0;
                }
                this.$update();
            }._$bind(this),1000)

        },
        showSmsError : function(_smsTxt,_phoneNum){
            this.data.state = 3;
            this.data.boderclazz = 'err-clazz';
            this.data.smsTxt = _smsTxt;
            this.data.phoneNum = _phoneNum;
            this.$update();
        },
        showState:function(_value){
            if (_u._$isSmsCap(_value)){
                this.data.state = 1;
            }else{
                this.showError('验证码格式错误');
            }
            this.$update();
        }
    });
    return SmsInput;
})