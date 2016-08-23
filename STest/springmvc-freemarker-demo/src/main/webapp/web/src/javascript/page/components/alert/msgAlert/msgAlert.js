/**
 * 实名认证框
 * @author  ZhangWei(wei.zhangwei@corp.netease.com)
 * pro/page/components/alert/msgAlert/msgAlert
 */
NEJ.define([
  'base/event',
  'base/util',
  'pro/page/util',
  'pro/page/components/regular/BaseComponent',
  'text!./msgAlert.html'
],function(_e,_util,_u,_base,_tmp,_p,_o,_f,_r){
  var msgAlert = _base.extend({
    template:_tmp,
    data:{
      alertShow:false,    //控制显隐性
      title : '',         //设置表头
      page : ""           //制定页码
    },
    config:function(_data){
      _util._$merge(this.data,_data||{});
      this.supr(_data);
    },
    init:function(_data){
      this.supr(_data);
    },
    onClear: function () {
    },
    showAlert: function () {
      this.data.alertShow = true;
      this.$update();
    },
    onClose:function(_event){
      this.data.alertShow = false;
      this.onClear();
      this.$update();
    }
  });
  return msgAlert;
})