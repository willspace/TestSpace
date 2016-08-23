<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd retrievepwd-s1">
<div class="top_tlt">找回密码</div>
<div class="b-step">
<span class="i-step light"><p>安全验证</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置新密码</p></span>
<span class="i-line"></span>
<span class="i-step"><p>设置成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<form id="form-passwd-find" class="clearfix">
</form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
<div class="u-input u-sub-a">
<label  class="u-label">&nbsp;</label>
<a href="/web/mobchgoff" class="">手机不在我手上，我要换号</a>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_passwdFind_passwdFind1.js?5967f410e10ad94852bff2012b47e7e1"></script>
</@htmFoot>
</#escape>