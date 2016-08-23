/**
 * 实名认证框
 * @author  ZhangWei(wei.zhangwei@corp.netease.com)
 * pro/page/components/alert/idAlert/idAlert
 */
NEJ.define([
  'base/event',
  'base/util',
  'pro/page/util',
  'pro/page/components/regular/BaseComponent',
  'text!./idAlert.html'
],function(_e,_util,_u,_base,_tmp,_p,_o,_f,_r){
  var idAlert = _base.extend({
    template:_tmp,
    data:{
      alertShow:false,          //控制显隐性
      idNum:"[身份证号码]",
      name:"[姓名]"
    },
    config:function(_data){
      _util._$merge(this.data,_data||{});
      this.supr(_data);
    },
    init:function(_data){
      this.supr(_data);
    },
    onClear: function () {
      this.data.idNum = "[身份证号码]";
      this.data.name = "[姓名]";
      this.$update();
    },
    showAlert: function (_idnum,_name) {
      this.data.idNum = _idnum;
      this.data.name = _name;
      this.data.alertShow = true;
      this.$update();
    },
    onClose:function(_event){
      this.data.alertShow = false;
      this.onClear();
      this.$update();
    },
    onSubmit:function(_event){
      this.$emit('onsubmit',0);
      this.onClose();
      this.$update();
    }
  });
  return idAlert;
})