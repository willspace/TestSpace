<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>


    <!-- 中间主体 -->
    <div class="g-bd changephone-offl-s2">
        <!-- 大标题 -->
        <div class="top_tlt">更换手机</div>
        <!-- END 大标题 -->

        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>确认当前帐号</p></span>
            <span class="i-line"></span>
            <span class="i-step light"><p>选择更换方式</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>发送成功</p></span>
        </div>
        <!-- END 步骤导航 -->

        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">

            <!-- 次标题、居中信息 -->
            <!-- END 次标题、居中信息 -->

            <!-- form表单 -->

            <div class="sub_tlt">
                你正在更换帐号：${hideMobile}
            </div>

            <!-- 安全渠道块 -->
            <div class="b-channel">
                <div class="tlt">该手机已无法使用？你还可以通过以下方式进行验证</div>
                <#if active?? && active==true && hideEmail??>
                    <a class="i-channel safe-email j-safe-email" href="javascript:void(0);"><i>&nbsp;</i><p class="tlt">通过密保邮箱</p><p>发送邮件到${hideEmail}</p></a>
                </#if>
                <a class="i-channel appeal j-appeal"><i>&nbsp;</i><p class="tlt">通过客服申诉</p><p>需要你提供多种注册资料</p></a>
            </div>
            <!-- END 安全渠道块 -->

        </div>

    </div>
    <!-- END 中间主体 -->


    </@htmlBody>
    <@htmFoot>
    <script src="${staticroot}javascript/page/mobileChangeOff/mobileChangeOff2.js"></script>
    </@htmFoot>
</#escape>