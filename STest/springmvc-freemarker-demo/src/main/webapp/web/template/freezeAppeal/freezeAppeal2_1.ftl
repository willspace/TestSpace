<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd freezeappeal-s2">
        <!-- 大标题 -->
        <div class="top_tlt">冻结申诉</div>
        <!-- END 大标题 -->
        <!-- 操作主体 -->
        <div class="m-opr opr2" id="m-opr2">
            <div class="sub_tlt">请根据你遇到的问题选择申诉方式</div>
            <!-- 安全渠道块 -->
            <div class="b-channel">
                <a class="i-channel appeal j-appeal"><i>&nbsp;</i><p class="tlt">通过客服申诉</p><p>需要你提供多种注册资料</p></a>
            </div>
            <!-- END 安全渠道块 -->
        </div>
    </div>
    <!-- END 中间主体 -->
    </@htmlBody>
    <@htmFoot>
        <script src="${staticroot}javascript/page/freezeAppeal/freezeAppeal2_1.js"></script>
    </@htmFoot>
</#escape>