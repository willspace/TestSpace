<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<div class="g-bd freezeappeal-s1">
<div class="top_tlt">冻结申诉</div>
<div class="b-step">
<span class="i-step light"><p>验证申诉帐号</p></span>
<span class="i-line"></span>
<span class="i-step"><p>选择申诉方式</p></span>
<span class="i-line"></span>
<span class="i-step"><p>操作成功</p></span>
</div>
<div class="m-opr" id="m-opr">
<div class="sub_tlt  sub_tlt_2">
帐号长久未登录，为保证帐号安全需要进行额外验证
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
<script src="/web/src/pub/pt_freezeAppeal_freezeAppeal1.js?0e8feae12698bac330d478be2fff5e17"></script>
</@htmFoot>
</#escape>