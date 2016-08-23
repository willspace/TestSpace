<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd acclock-s1">
<div class="top_tlt">紧急锁定</div>
<div class="b-step">
<span class="i-step light"><p>输入手机号</p></span>
<span class="i-line"></span>
<span class="i-step"><p>选择锁定方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<form id="form-lock" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_accLock_accLock1.js?42fc8f0e70b6aae654798ba6729f9727"></script>
</@htmFoot>
</#escape>