<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd realinfo-s1">
<div class="top_tlt">设置实名信息</div>
<div class="b-step">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置实名信息</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<span id="b-mobile" class="f-dn">${usermobile}</span>
<div class="sub_tlt  sub_tlt_2">
你正在设置帐号：${hideMobile}的实名信息
</div>
<form id="form-realinfo-set" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_realnameInfo_realnameInfo1.js?1e033240c1a645acabf42982584e8496"></script>
</@htmFoot>
</#escape>