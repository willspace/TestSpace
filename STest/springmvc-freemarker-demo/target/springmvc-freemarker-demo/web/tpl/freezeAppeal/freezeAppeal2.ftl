<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd freezeappeal-s2">
<div class="top_tlt">冻结申诉</div>
<div class="b-step">
<span class="i-step light"><p>验证申诉帐号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择申诉方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<div class="sub_tlt">
你正在对帐号：${hideMobile}进行冻结申诉
</div>
<div class="b-channel">
<div class="tlt">该手机已无法使用？你还可以通过以下方式进行验证</div>
<#if active?? && active==true && hideEmail??>
<a class="i-channel safe-email j-safe-email" href="javascript:void(0);"><i>&nbsp;</i><p class="tlt">通过密保邮箱</p><p>发送邮件到${hideEmail}</p></a>
</#if>
<#if passSet?? && passSet==true>
<a class="i-channel pwd" href="/web/freezappeal/step2_passwd1"><i>&nbsp;</i><p class="tlt">通过密码</p><p>需要你输入密码解冻</p></a>
</#if>
</div>
</div>
<div class="bottom-tlt"><a href="/web/freezappeal/step2_1">验证不了？</a></div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_freezeAppeal_freezeAppeal2.js?911b7eea2ff70c036efca2e150bcb02a"></script>
</@htmFoot>
</#escape>