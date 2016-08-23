<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd retrievepwd-s2">
<div class="top_tlt">找回密码</div>
<div class="b-step">
<span class="i-step light"><p>安全验证</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置新密码</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<form id="form-passwd-find" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_passwdFind_passwdFind2.js?11372182629f8379326adccd1deb5d27"></script>
</@htmFoot>
</#escape>