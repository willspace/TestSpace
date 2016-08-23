<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd acclock-s2-mob">
<div class="top_tlt">冻结申诉</div>
<div class="b-step">
<span class="i-step light"><p>验证申诉帐号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择申诉方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<span id="b-mobile" class="f-dn">${mobile}</span>
<div class="sub_tlt  sub_tlt_2">
你正在对帐号：${hideMobile}进行冻结申诉
</div>
<form id="form-fa" class="clearfix"></form>
<div class="u-input u-btn">
<label  class="u-label">&nbsp;</label>
<span class="b-btn btn-blue j-next">下一步</span>
</div>
</div>
</div>
</@htmlBody>
<@htmFoot>
<script src="/web/src/pub/pt_freezeAppeal_freezeAppeal2_passwd1.js?423fd2d857e60e375b1b5725fcd0cf3d"></script>
</@htmFoot>
</#escape>