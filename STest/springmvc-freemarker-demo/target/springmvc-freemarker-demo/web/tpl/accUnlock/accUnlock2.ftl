<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd acclock-s2">
<div class="top_tlt">自助解锁</div>
<div class="b-step">
<span class="i-step light"><p>输入手机号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择解锁方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<div class="sub_tlt">
请选择自助解锁方式
</div>
<div class="b-channel">
<div class="tlt">该手机已无法使用？你还可以通过以下方式进行验证</div>
<#if active?? && active==true && hideEmail??>
<a class="i-channel safe-email j-safe-email" href="javascript:void(0);"><i>&nbsp;</i><p class="tlt">通过密保邮箱</p><p>发送邮件到${hideEmail}</p></a>
</#if>
<a class="i-channel mobile" href="/web/accunlock/step2_mob"><i>&nbsp;</i><p class="tlt">通过手机验证</p><p>我们会给你手机发送验证码</p></a>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_accUnlock_accUnlock2.js?b51cbd8e628fa12e272e7f31b25a26ea"></script>
</@htmFoot>
</#escape>