/**
 * ------------------------------------------
 * 工具类
 * @version  1.0
 * @author   cheng-lin(cheng-lin@corp.netease.com)
 * ------------------------------------------
 */
/* module pro/page/util */
NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'base/util',
    'pro/page/requestProxy'
],
function(_k, _e, _v, _u, _rp, _p, _o, _f, _r){
    var simplePwd = ['123456', '123456789', '12345678', '123123', '5201314', '1234567', '7758521', '654321', '1314520', '123321', '1234567890', '147258369', '123654', '5211314', 'woaini', '1230123', '987654321', '147258', '123123123', '7758258', '520520', '789456', '456789', '159357', '112233', '1314521', '456123', '110110', '521521', 'zxcvbnm', '789456123', '0123456789', '0123456', '123465', '159753', 'qwertyuiop', '987654', '115415', '1234560', '123000', '123789', '100200', '963852741', '121212', '111222', '123654789', '12301230', '456456', '741852963', 'asdasd', 'asdfghjkl', '369258', '863786', '258369', '8718693', '666888', '5845201314', '741852', '168168', 'iloveyou', '852963', '4655321', '102030', '147852369', '321321'],
        _qMap = {'您父亲的生日？':'birthday','您母亲的生日？':'birthday','小学班主任的名字？':'normal','您第一个男（女）朋友的名字？':'normal','您身份证后六位？':'sixNumber','小时候梦想的职业？':'normal','您（计划）哪年结婚？':'fourNumber','您母亲的名字？':'normal','您父亲的名字？':'normal'},
        _strKey = {
        'normal':/^[A-Za-z\u4e00-\u9fa5\ ]{1,30}$/,
        'mobile': /^(13|14|15|17|18)\d{9}$/,
        'cap':/^[0-9a-zA-Z]{4,6}$/,
        'smscap':/^\d{6}$/,
        'email':/^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
        'birthday':/^(19|20)\d{2}(1[0-2]|0[1-9])(0[1-9]|[1-2][0-9]|3[0-1])$/,
        'sixNumber':/^\d{6}$/,
        'threeNumber':/^\d{1,3}$/,
        'sixNumberX':/^\d{5}[a-zA-Z0-9]$/,
        'fourNumber':/^\d{4}$/,
        'pwd'  : {
            'p0' : /^.{6,16}$/,
            'word' : /[a-zA-Z]+/,
            'number' : /[0-9]+/,
            'sign' : /[^a-zA-Z0-9]+/,
            'chnchar':/[\u4e00-\u9fa5]+/
        }
    };
    /**
     * 返回安全问题map
     * @return {[type]} [description]
     */
    _p._$getQues = function(){
        return _qMap;
    };
    /**
     * 密码校验安全度
     * @return {[type]} [description]
     */
    _p._$checkPwdSafe = (function(){
        // 密码只一个字符校验
        // copy from reg.163.com
        var _isAllSameChar = function (str) {
            var fChar = str.charAt(0),
                isAllSame = true;
            for (var i = 1, len = str.length; i < len; i++) {
                if (fChar !== str.charAt(i)) {
                    isAllSame = false;
                    break;
                }
            }
            return isAllSame;
        };
        // 密码简单校验
        // copy from reg.163.com
        var _isSimplePwd = function (pwd) {
            var isSimplePwd = false;
            for (var i = 0, len = simplePwd.length; i < len; i++) {
                if (simplePwd[i] === pwd) {
                    isSimplePwd = true;
                    break;
                }
            }
            return isSimplePwd;
        };
        // 检测密码中是否含有汉字
        var _hasChnChar = function (pwd) {
            var hasChnChar = _strKey.pwd.chnchar.test(pwd) || false;
            return hasChnChar;
        };

        return function(_value){
            var _length = _value.length,
                _error;
            if (_length < 6 || _length > 16){
                _error = '密码不符合规范';
            }else if(_isAllSameChar(_value) || _isSimplePwd(_value)){
                _error = '该密码过于简单，换个其他密码吧';
            }else if(_hasChnChar(_value)){
                _error = '密码中不允许出现汉字字符';
            }
            return _error;
        };
    })();


    /**
     * 请求封装
     * @private
     */
    _p._$request = function(_url,_options){
        _rp._$request(_url,_options);
    };
    /**
     * 判断浏览数是否支持某一CSS3属性
     * @auther wei.zhangwei@corp.netease.com
     * @param  style:需要验证的方法
     * @return boolean ：是否支持
     * */
    _p._$supportCss3 = function(style) {
        var prefix = ['webkit', 'Moz', 'ms', 'o'],
            i,
            humpString = [],
            htmlStyle = document.documentElement.style,
            _toHumb = function (string) {
                return string.replace(/-(\w)/g, function ($0, $1) {
                    return $1.toUpperCase();
                });
            };

        for (i in prefix)
            humpString.push(_toHumb(prefix[i] + '-' + style));

        humpString.push(_toHumb(style));

        for (i in humpString)
            if (humpString[i] in htmlStyle) return true;

        return false;
    };

    /**
     * 判断是否手机号
     * @param  {[type]} _value [description]
     * @return {[type]}        [description]
     */
    _p._$isMobile = function(_value){
        return _strKey.mobile.test(_value);
    };

    /**
     * 判断是不是合法身份证号码
     * @param  {[type]} _value [description]
     * @return {[type]}        [description]
     */
    _p._$isID = function (_id) {
        var  cardNO= _id;

        var errors = new Array(
            "验证通过",
            "身份证号码位数不对",
            "身份证含有非法字符",
            "身份证号码校验错误",
            "身份证地区非法"
        );
        //身份号码位数及格式检验
        var re;
        var len = cardNO.length;
        //身份证位数检验
        if (len != 15 && len != 18) {
            return false;
            //return errors[1];
        } else if (len == 15) {
            re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{3})$/);
        } else {
            re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})([0-9xX])$/);
        }

        var area = { 11: "北京", 12: "天津", 13: "河北", 14: "山西",
            15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海",
            32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西",
            37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东",
            45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州",
            53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海",
            64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门",
            91: "国外"
        }

        var cardNO_array = new Array();
        cardNO_array = cardNO.split("");

        //地区检验
        if (area[parseInt(cardNO.substr(0, 2))] == null) {
            return false;
            //return errors[4];
        }
        //出生日期正确性检验
        var a = cardNO.match(re);
        if (a != null) {
            if (len == 15) {
                var DD = new Date("19" + a[3] + "/" + a[4] + "/" + a[5]);
                var flag = DD.getYear() == a[3] && (DD.getMonth() + 1) == a[4] && DD.getDate() == a[5];
            }
            else if (len == 18) {
                var DD = new Date(a[3] + "/" + a[4] + "/" + a[5]);
                var flag = DD.getFullYear() == a[3] && (DD.getMonth() + 1) == a[4] && DD.getDate() == a[5];
            }

            if (!flag) {
                return false;
                //return "身份证出生日期不对！";
            }
            //检验校验位
            if (len == 18) {
                var S = (parseInt(cardNO_array[0]) + parseInt(cardNO_array[10])) * 7
                    + (parseInt(cardNO_array[1]) + parseInt(cardNO_array[11])) * 9
                    + (parseInt(cardNO_array[2]) + parseInt(cardNO_array[12])) * 10
                    + (parseInt(cardNO_array[3]) + parseInt(cardNO_array[13])) * 5
                    + (parseInt(cardNO_array[4]) + parseInt(cardNO_array[14])) * 8
                    + (parseInt(cardNO_array[5]) + parseInt(cardNO_array[15])) * 4
                    + (parseInt(cardNO_array[6]) + parseInt(cardNO_array[16])) * 2
                    + parseInt(cardNO_array[7]) * 1
                    + parseInt(cardNO_array[8]) * 6
                    + parseInt(cardNO_array[9]) * 3;

                var Y = S % 11;
                var M = "F";
                var JYM = "10X98765432";
                var M = JYM.substr(Y, 1); //判断校验位

                //检测ID的校验位
                if (M == cardNO_array[17]) {
                    return true;
                    //return "";
                }
                else {
                    return false;
                    //return errors[3];
                }
            }

        } else {
            return false;
            //return errors[2];
        }
        return true;
    };

    /**
     * 判断图片验证码格式
     * @param  {[type]} _value [description]
     * @return {[type]}        [description]
     */
    _p._$isCap = function(_value){
        return _strKey.cap.test(_value);
    };

    _p._$isSmsCap = function(_value){
        return _strKey.smscap.test(_value);
    };

    /**
     * 判断email格式
     * @param  {[type]} _value [description]
     * @return {[type]}        [description]
     */
    _p._$isEmail = function(_value){
        return _strKey.email.test(_value);
    };

    /**
     * 验证密码安全度
     * @param  {[type]} _value [description]
     * @return {[type]}        [description]
     */
    _p._$checkPwdLv = function(_value){
        if (!_strKey.pwd.p0.test(_value)){
            return 0;
        }
        if (_strKey.pwd.word.test(_value) && _strKey.pwd.number.test(_value) && _strKey.pwd.sign.test(_value)){
            return 3;
        }
        if ((_strKey.pwd.word.test(_value) && _strKey.pwd.number.test(_value))|| (_strKey.pwd.word.test(_value) && _strKey.pwd.sign.test(_value)) || (_strKey.pwd.sign.test(_value) && _strKey.pwd.number.test(_value))){
            return 2;
        }
        return 1;
    };

    /**
     * 内域邮箱格式错误
     * @param  {[type]} _username [description]
     * @return {[type]}           [description]
     */
    _p._$isBadNetease = function(_username){
        return !(_strKey.netease.test(_username));
    };

    /**
     * 生日格式19001010-29991010
     * @param  {[type]} _birthday [description]
     * @return {[type]}           [description]
     */
    _p._$isBirthday = function(_birthday){
        return _strKey.birthday.test(_birthday);
    };


    /**
     * 判断1-3位数字
     * @return {[type]} [description]
     */
    _p._$isThreeNumber = function(_number){
        return _strKey.threeNumber.test(_number);
    };

    /**
     * 判断6位数字
     * @param  {[type]} _number [description]
     * @return {[type]}         [description]
     */
    _p._$isSixNumber = function(_number){
        return _strKey.sixNumber.test(_number);
    };


    /**
     * 身份证后6位
     * @param  {[type]} _number [description]
     * @return {[type]}         [description]
     */
    _p._$isSixNumberX = function(_number){
        return _strKey.sixNumberX.test(_number);
    };

    /**
     * 判断6位数字
     * @param  {[type]} _number [description]
     * @return {[type]}         [description]
     */
    _p._$isFourNumber = function(_number){
        return _strKey.fourNumber.test(_number);
    };

    _p._$isNormal = function(_value){
        return _strKey.normal.test(_value);
    };

    /**
     * 网易邮箱
     * @param  {[type]} _suffix [description]
     * @return {[type]}         [description]
     */
    _p._$isNeteaseEmail = function(_suffix){
        return (_suffix === "163.com" || _suffix === "126.com" || _suffix === "yeah.net" || _suffix == "vip.163.com" || _suffix == "vip.126.com" || _suffix == "188.com" || _suffix == "vip.188.com");
    };

    /**
     * 设置光标位置
     * @param  {[type]} _ele [description]
     * @return {[type]}      [description]
     */
    _p._$setCaretAtEnd = function(_ele) {
        var elemLen = _ele.value.length;
        // For IE Only
        if (document.selection) {
            // Set focus
            _ele.focus();
            // Use IE Ranges 
            var _oSel = document.selection.createRange();
            // Reset position to 0 & then set at end
            _oSel.moveStart('character', -elemLen);
            _oSel.moveStart('character', elemLen);
            _oSel.moveEnd('character', 0);
            _oSel.select();
        }else if (_ele.selectionStart || _ele.selectionStart == '0') {
            // Firefox/Chrome
            _ele.selectionStart = elemLen;
            _ele.selectionEnd = elemLen;
            _ele.focus();
        }
    }


    _p._$hideLoading = function(_node){
        var _ele = _e._$get(_node || 'loading');
        _e._$addClassName(_ele,'f-dn');
    };
    return _p;
})
