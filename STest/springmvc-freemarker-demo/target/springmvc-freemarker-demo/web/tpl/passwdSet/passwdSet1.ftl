<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd setpwd-s1">
<div class="top_tlt">设置密码</div>
<div class="b-step">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置密码</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<span id="b-mobile" class="f-dn">${usermobile}</span>
<div class="sub_tlt  sub_tlt_2">
你正在设置帐号：${hideMobile}的密码
</div>
<form id="form-passwd-set" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_passwdSet_passwdSet1.js?662f4af8915809da021b75b7d2cf0782"></script>
</@htmFoot>
</#escape>