/**
 * 手机输入框
 * @author  cheng-lin(cheng-lin@corp.netease.com)
 * pro/page/components/input/suggestInput/suggestInput
 */
NEJ.define([
    'base/event',
    'base/util',
    'pro/page/components/input/input',
    'pro/page/util',
    'ui/suggest/suggest',
    'text!./suggestInput.html'
],function(_e,_util,_i,_u,_ui,_tmp,_p,_o,_f,_r){
    var SuggestInput = _i.extend({
        template:_tmp,
        data:{
            placeholdertxt:"请输入邮箱帐号"
        },
        config:function(_data){
            _util._$merge(this.data,_data||{});
            this.supr(_data);
            this.$on('checkState',this.onCheckState);
        },
        init:function(_data){
            this.supr(_data);
            this.__input = this.$refs.input;
            this.initSuggest();
            if(!!_data._pvalue){
                this.data.value = _data._pvalue;
                this.$update();
            }
        },
        onBlur:function(_event){
            this.supr(_event);
        },
        showState:function(_value){
            if (_u._$isEmail(_value)){
                var _mar = _value.split("@");
                if(_value.length <= 48 && _mar[0].length <= 32 && _mar[1].length <= 32){
                    this.data.state = 1;
                }else{
                    this.data.state = 2;
                    this.data.errcontent = '邮箱格式超过限制长度，请换个邮箱再试试';
                }
            }else{
                this.data.state = 2;
                this.data.errcontent = '邮箱格式错误';
            }
            this.$update();
        },
        badNetease:function(_username){
            // var _errDesc;
            // if (!/^[a-zA-Z]/.test(_username)) {
            //     // 用户名请以字母开头
            //     _errDesc = _rt.CHECK_URS_BAD_BEGIN;
            // } else if (!/([a-zA-Z]|\d)$/.test(_username)) {
            //     // 用户名请以字母或数字结尾
            //     _errDesc = _rt.CHECK_URS_BAD_END;
            // } else if (_username.length < 6 || _username.length > 18) {
            //     // 请输入6到18个字符
            //     _errDesc = _rt.CHECK_URS_BAD_LENGTH;
            // } else {
            //     // 请输入字母、数字和下划线
            //     _errDesc = _rt.CHECK_URS_BAD_ILLEGAL;
            // }
            // this.data.errcontent = '帐号格式错误';
        },
        initSuggest:(function() {
            var _emailWord = /^[\w-\.@]*$/i;
            var _creatHTML = function(_value,_suf,_clazz){
                _clazz = _clazz ? (' ' + _clazz) : '';
                return '<div class="itm' + _clazz + '" data-value=' + _value + _suf + '><div class="select-tip"></div>' + _value + _suf + '</div>';
            }
            var _onChange = function(_value) {
                var _arr = [];
                if (!_emailWord.test(_value)){
                    this.__suggest._$setList(_arr.join(''));
                    return;
                }else{
                    if (_value.indexOf('@') == -1){
                        _util._$forEach(this.__suffix, function(_name) {
                            var _html = _creatHTML(_value,_name);
                            _arr.push(_html);
                        });
                    }else{
                        var _values = _value.split('@');
                            _firstValue = _values[0],
                            _lastValue = _values[1];
                        if (_value.match(/@/g).length>1){
                            _arr = [];
                        }else{
                            if (!_lastValue){
                                _util._$forEach(this.__suffix, function(_name) {
                                    _name = _name.split('@')[1];
                                    var _html = _creatHTML(_value,_name);
                                    _arr.push(_html);
                                });
                            }else{
                                if (_lastValue.indexOf('.com')>-1){
                                    _arr = []
                                }else{
                                    _util._$forEach(this.__suffix,function(_name){
                                        if (_name.indexOf(_lastValue)==1){
                                            var _html = _creatHTML(_firstValue,_name);
                                            _arr.push(_html);
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (_arr[0]){
                        _arr[0] = _arr[0].replace('class="itm"','class="itm js-selected"');
                    }
                    this.__suggest._$setList(_arr.join(''));
                    // _e._$get('account-box').style.zIndex = '500';
                }
            };
            var _onSelect = function(_value,_options) {
                if (window.outlinkflag){
                    return;
                }
                // _e._$get('account-box').style.zIndex = '0';
                this.__suggest._$setList([]);
                var _value = this.__input.value;
                if(!!_value){
                    this.data.value = _value;
                    this.showState(_value);
                }else{
                    return;
                }
                this.$emit('onselect');
            };
            return function() {
                this.__suffix = ['@163.com', '@126.com','@yeah.net','@vip.163.com', '@vip.126.com', '@188.com', '@vip.188.com'];
                if (this.__suggest){
                    this.__suggest = _ui._$$Suggest._$recycle(this.__suggest);
                }
                var _parent = this.$refs.suggestBody;
                if (!this.__suggest){
                    this.__suggest = _ui._$$Suggest._$allocate({
                        parent: _parent,
                        clazz: 'm-sug',
                        input: this.__input,
                        autofill: !1,
                        onchange: _onChange._$bind(this),
                        onselect: _onSelect._$bind(this)
                    });
                }
            };
        })()
    });
    return SuggestInput;
})