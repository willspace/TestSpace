<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd acclock-s2-mob">
<div class="top_tlt">自助解锁</div>
<div class="b-step">
<span class="i-step light"><p>输入手机号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择锁定方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<span id="b-mobile" class="f-dn">${mobile}</span>
<div class="sub_tlt  sub_tlt_2">
发送验证码到你的手机：${hideMobile}
</div>
<form id="form-unlock" class="clearfix"></form>
<form class="clearfix f-dn">
<div class="u-input">
<label  class="u-label">&nbsp;</label>
<input id="input_6"  type="text" placeholder="请输入图片校验码" class="i-inpt smsize" value="PFXa" />
<div class="u-tip"><div class="u-clear"></div></div>
<div id="btn-vcode" class="i-vcode"><img src="../../res/images/vcode.png" /></div>
</div>
<div class="u-input">
<label  class="u-label">&nbsp;</label>
<input id="input_7"  type="text" placeholder="请输入手机校验码" class="i-inpt smsize" />
<div class="u-tip"><div class=" u-clear"></div></div>
<span class="b-btn btn-getsms f-dn">获取验证码</span>
<span class="b-btn btn-getsms-loading">重新发送（30s）</span>
<table class="popb err"  r-animation='on: enter; class: animated shake;' >
<tbody><tr><td class="b-i"><i></i></td><td class="b-p">请编辑短信<strong>移动帐号更换</strong><br/>发送到<strong>1069&nbsp;8163&nbsp;0163&nbsp;331</strong></td></tr></tbody>
</table>
</div>
</form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_accUnlock_accUnlock2_mobile.js?50705a508fcc9794bdd204b2df884c26"></script>
</@htmFoot>
</#escape>