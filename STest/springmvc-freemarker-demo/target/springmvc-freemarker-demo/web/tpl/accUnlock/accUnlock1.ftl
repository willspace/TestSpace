<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd acclock-s1">
<div class="top_tlt">自助解锁</div>
<div class="b-step">
<span class="i-step light"><p>输入手机号</p></span>
<span class="i-line"></span>
<span class="i-step"><p>选择解锁方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<div class="sub_tlt  sub_tlt_2">
解锁前请确保当前上网环境是安全的
</div>
<form id="form-unlock" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_accUnlock_accUnlock1.js?9f4b4f1ccb4e6feac914f16f91fc6269"></script>
</@htmFoot>
</#escape>