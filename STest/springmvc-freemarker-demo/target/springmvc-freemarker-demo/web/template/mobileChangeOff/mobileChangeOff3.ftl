<#include "../common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
    <!-- @STYLE -->
    <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>

    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd  changephone-offl-s4">
        <!-- 大标题 -->
        <div class="top_tlt">更换手机</div>
        <!-- END 大标题 -->


        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">

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
    <!-- END 中间主体 -->

    </@htmlBody>
    <@htmFoot>
    <script src="${staticroot}javascript/page/mobileChangeOff/mobileChangeOff3.js"></script>
    </@htmFoot>
</#escape>