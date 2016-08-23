<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd retrievepwd-s1">
        <!-- 大标题 -->
        <div class="top_tlt">找回密码</div>
        <!-- END 大标题 -->
        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>安全验证</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>设置新密码</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>设置成功</p></span>
        </div>
        <!-- END 步骤导航 -->

        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">

            <!-- form表单 -->
            <form id="form-passwd-find" class="clearfix">

            </form>

            <!-- 按钮  -->
            <div class="u-input u-btn">
                <label  class="u-label">&nbsp;</label>
                <span class="b-btn btn-blue j-next">下一步</span>
            </div>
            <!-- END 按钮  -->

            <div class="u-input u-sub-a">
                <label  class="u-label">&nbsp;</label>
                <a href="/web/mobchgoff" class="">手机不在我手上，我要换号</a>
            </div>

        </div>

    </div>
    <!-- END 中间主体 -->

    </@htmlBody>
    <@htmFoot>
    <script src="${staticroot}javascript/page/passwdFind/passwdFind1.js"></script>
    </@htmFoot>
</#escape>