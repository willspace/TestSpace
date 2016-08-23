<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd setsmail-s2">
<div class="top_tlt">密保邮箱</div>
<div class="b-step">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置密保邮箱</p></span>
<span class="i-line"></span>
<span class="i-step"><p>发送成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<span id="b-securemail" class="f-dn">${hideEmail}</span>
<div class="sub_tlt  sub_tlt_2">
你正在设置帐号：${hideMobile}的密保邮箱
</div>
<form id="form-secur-email" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next"><#if hideEmail??>发送激活邮件<#else>下一步</#if></span>
</div>
<div class="u-tips">
<span class="tip">激活后，你可以用该邮箱来处理更换手机和解除帐号冻结问题。</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_securEmail_securEmail2.js?7ff7287b3fd6a62f146f80fcfce2e8b4"></script>
</@htmFoot>
</#escape>