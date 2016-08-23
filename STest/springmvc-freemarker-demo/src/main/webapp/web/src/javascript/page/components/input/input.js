/**
 * 输入框基础控件
 * @author ZhangWei(wei.zhangwei@corp.netease.com)
 * pro/page/components/input/input
 */
NEJ.define([
    'base/element',
    'base/event',
    'base/util',
    'pro/page/components/regular/BaseComponent',
    'util/placeholder/placeholder',
    'text!./input.html'
],function(_e,_v,_util,_base,_ph,_tmp,_p,_o,_f,_r){
    var Input = _base.extend({
        template:_tmp,
        data:{
            placeholder:"请输入手机号",
            txtErr:"手机号格式错误"
        },
        config: function() {
            this.data.value = '';
            this.data.closeFlag = 0;
            this.data.state = 0;
            this.$on('checkState',this.onCheckState);
        },
        init: function() {
            _ph._$placeholder(this.$refs.input);
            if (this.data.autoFocus){
                this.$refs.input.focus();
            }
        },
        onFocus:function(_event){
            this.data.state = 0;
            this.data.boderclazz = 'act-clazz';
        },
        onBlur: function (_event) {
            this.data.boderclazz = '';
            var _value = _event.target.value;
            if(!_value)return;
            this.showState(_value);
        },
        onInput: function (_event) {

        },
        onEmpty:function(_event){
            this.data.value='';
        },
        onClear:function(_event){
            this.data.value='';
            this.data.boderclazz = '';
            this.$refs.input.focus();
            this.data.state = 0;
        },
        onClearNoFocus:function(_event){
            this.data.value='';
            this.data.boderclazz = '';
            this.data.state = 0;
        },
        showState: function (_value) {
            _value = _value.trim();
            if(!!_value){
                this.data.state = 1;
            }else{
                this.showError(this.data.txtErr);
            }
        },
        showError:function(_errStr){
            this.data.state = 2;
            this.data.boderclazz = 'err-clazz';
            this.data.errcontent = _errStr;
            this.$update();
        },
        onCheckState:function(_value){
            var _value = this.data.value;
            this.showState(_value);
        }
    })
    return Input;
})