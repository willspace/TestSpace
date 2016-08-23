<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd changephone-onl-s1">
<div class="top_tlt">更换手机</div>
<div class="b-step">
<span class="i-step light"><p>验证原帐号</p></span>
<span class="i-line"></span>
<span class="i-step"><p>验证新帐号</p></span>
<span class="i-line"></span>
<span class="i-step"><p>更换成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<span id="b-mobile" class="f-dn">${usermobile}</span>
<div class="sub_tlt  sub_tlt_2">
你正在验证原帐号：${hideMobile}
</div>
<form id="form-changephone" class="clearfix">
</form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
<div class="b-channel">
<div class="tlt">该手机已无法使用？你还可以通过以下方式进行验证</div>
<#if active?? && active==true && hideEmail??>
<a class="i-channel safe-email j-safe-email" href="javascript:void(0);"><i>&nbsp;</i><p class="tlt">通过密保邮箱</p><p>发送邮件到${hideEmail}</p></a>
</#if>
<a class="i-channel appeal j-appeal"><i>&nbsp;</i><p class="tlt">通过客服申诉</p><p>需要你提供多种注册资料</p></a>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_mobileChange_mobileChange1.js?c8a0450c67e27ad160532870f421ee9e"></script>
</@htmFoot>
</#escape>