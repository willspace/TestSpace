<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <div class="g-bd  changephone-offl-s1">
        <!-- 大标题 -->
        <div class="top_tlt">更换手机</div>
        <!-- END 大标题 -->

        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>确认当前帐号</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>选择更换方式</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>发送成功</p></span>
        </div>
        <!-- END 步骤导航 -->

        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">

            <!-- 次标题、居中信息 -->
            <!-- END 次标题、居中信息 -->

            <!-- form表单 -->
            <form id="form-changephone" class="clearfix">
            </form>

            <!-- 按钮  -->
            <div class="u-input u-btn">
                <label  class="u-label">&nbsp;</label>
                <span class="b-btn btn-blue j-next">下一步</span>
            </div>
            <!-- END 按钮  -->
        </div>

    </div>
    </@htmlBody>
    <@htmFoot>
    <script src="${staticroot}javascript/page/mobileChangeOff/mobileChangeOff1.js"></script>
    </@htmFoot>
</#escape>