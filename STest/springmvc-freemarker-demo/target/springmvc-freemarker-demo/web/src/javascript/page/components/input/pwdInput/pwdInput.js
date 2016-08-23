/**
 * 密码输入框基础控件
 * @author ZhangWei(wei.zhangwei@corp.netease.com)
 * pro/page/components/input/pwdInput/pwdInput
 */
NEJ.define([
    'base/event',
    'base/element',
    'base/util',
    'pro/page/components/input/input',
    'pro/page/util',
    'text!./pwdInput.html'
],function(_e,_em,_util,_i,_u,_tmp,_p,_o,_f,_r){
    var PwdInput = _i.extend({
        template:_tmp,
        data:{
            id               : '',                     //输入框自定义ID
            placeholdertxt   : "请输入密码",           //placehoder输入提示
            bind             : null,                  //组合密码输入框ID
            mainPwd          :  0,                     //需要使用密码的安全等级功能
            pwdlv            :  0                      //密码等级仅当值为1，2，3时显示，其他不显示
        },
        config:function(_data){
            _util._$merge(this.data,_data||{});
            this.supr(_data);
            this.data.canGet = 0;
            this.data.pwdlock = 0;
            this._bindPwd = this.data.bind || null;
            this.$on('checkState',this.onCheckState);
        },
        init:function(_data){
            this.supr(_data);
        },
        onFocus: function (_event) {
            this.supr(_event);
            var _target = _event.target,
                _value = _target.value.trim();
        },
        onBlur:function(_event){
            this.supr(_event);
        },
        onInput:function(_event){
            this.supr(_event);
            var _target = _event.target,
                _value = _target.value.trim();
            if(this.data.mainPwd){
                var _lv = _u._$checkPwdLv(_value);
                if(_lv>0&&_lv<4){
                    this.data.pwdlv = _lv;
                }else{
                    this.data.pwdlv = 0;
                }

            }
        },
        onClear: function (_event) {
            this.supr(_event);
            this.data.pwdlv = 0;

        },
        showState:function(_value){
            if(_value == ""){
                this.data.state = 2;
                this.data.errcontent = '请先输入新密码';
                this.$update();
                return;
            }
            this.data.state = 1;
            if(this.data.mainPwd){
                if(this.data.pwdlv>0){
                    this.data.state = 1;
                }else if(_value.length >= 6){
                    this.data.state = 1;
                }else{
                    this.data.state = 2;
                    this.data.errcontent = '请输入正确的密码';
                }
                var _checkResult=_u._$checkPwdSafe(_value);
                if(!!_checkResult || this.data.pwdlv == 1){
                    this.data.state = 2;
                    this.data.errcontent = _checkResult || "该密码强度过弱，试试字母、数字或符号混搭吧";
                }
            }else if(!!this._bindPwd){
                if(this._bindPwd.data.value!=this.data.value){
                    this.data.state = 2;
                    this.data.errcontent = '密码输入不一致';
                }
            }else{
                this.data.state = 1;
            }
            this.$update();
        }
    });
    return PwdInput;
})