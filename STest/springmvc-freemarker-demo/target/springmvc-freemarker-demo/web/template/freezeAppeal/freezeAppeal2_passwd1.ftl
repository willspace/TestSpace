<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd acclock-s2-mob">
        <!-- 大标题 -->
        <div class="top_tlt">冻结申诉</div>
        <!-- END 大标题 -->

        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>验证申诉帐号</p></span>
            <span class="i-line"></span>
            <span class="i-step light"><p>选择申诉方式</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>操作成功</p></span>
        </div>
        <!-- END 步骤导航 -->
        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">
            <!-- 次标题、居中信息 -->
            <span id="b-mobile" class="f-dn">${mobile}</span>
            <div class="sub_tlt  sub_tlt_2">
                你正在对帐号：${hideMobile}进行冻结申诉
            </div>
            <!-- END 次标题、居中信息 -->
            <!-- form表单 -->
            <form id="form-fa" class="clearfix"></form>
            <!-- 按钮  -->
            <div class="u-input u-btn">
                <label  class="u-label">&nbsp;</label>
                <span class="b-btn btn-blue j-next">下一步</span>
            </div>
            <!-- END 按钮  -->
        </div>
    </div>
    <!-- END 中间主体 -->
    </@htmlBody>
    <@htmFoot>
        <script src="${staticroot}javascript/page/freezeAppeal/freezeAppeal2_passwd1.js"></script>
    </@htmFoot>
</#escape>