<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd changephone-onl-s1">
        <!-- 大标题 -->
        <div class="top_tlt">更换手机</div>
        <!-- END 大标题 -->

        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>验证原帐号</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>验证新帐号</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>更换成功</p></span>
        </div>
        <!-- END 步骤导航 -->

        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">

            <!-- 次标题、居中信息 -->
            <!-- END 次标题、居中信息 -->

            <span id="b-mobile" class="f-dn">${usermobile}</span>
            <div class="sub_tlt  sub_tlt_2">
                你正在验证原帐号：${hideMobile}
            </div>
            <!-- form表单 -->
            <form id="form-changephone" class="clearfix">
            </form>
            <!-- 按钮  -->
            <div class="u-input u-btn">
                <label  class="u-label">&nbsp;</label>
                <span class="b-btn btn-blue j-next">下一步</span>
            </div>
            <!-- END 按钮  -->

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
        <script src="${staticroot}javascript/page/mobileChange/mobileChange1.js"></script>
    </@htmFoot>
</#escape>