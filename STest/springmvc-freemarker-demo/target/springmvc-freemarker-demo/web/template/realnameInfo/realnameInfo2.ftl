<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd realinfo-s2">
        <!-- 大标题 -->
        <div class="top_tlt">设置实名信息</div>
        <!-- END 大标题 -->
        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>验证手机</p></span>
            <span class="i-line"></span>
            <span class="i-step light"><p>设置实名信息</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>设置成功</p></span>
        </div>
        <!-- END 步骤导航 -->
        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">
            <!-- 次标题、居中信息 -->
            <!-- END 次标题、居中信息 -->
            <div class="sub_tlt  sub_tlt_2">
                你正在设置帐号：${hideMobile}的实名信息
            </div>
            <!-- form表单 -->
            <form id="form-realinfo-set" class="clearfix"></form>
            <!-- 按钮  -->
            <div class="u-input u-btn">
                <label  class="u-label">&nbsp;</label>
                <span class="b-btn btn-blue j-submit">提交</span>
            </div>
            <!-- END 按钮  -->
        </div>

    </div>
    <!-- END 中间主体 -->

    </@htmlBody>
    <@htmFoot>
    <script src="${staticroot}javascript/page/realnameInfo/realnameInfo2.js"></script>
    </@htmFoot>
</#escape>