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
        <div class="top_tlt">紧急锁定</div>
        <!-- END 大标题 -->

        <!-- 步骤导航 -->
        <div class="b-step">
            <span class="i-step light"><p>输入手机号</p></span>
            <span class="i-line"></span>
            <span class="i-step light"><p>选择锁定方式</p></span>
            <span class="i-line"></span>
            <span class="i-step"><p>操作成功</p></span>
        </div>
        <!-- END 步骤导航 -->
        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">
            <!-- 次标题、居中信息 -->
            <span id="b-mobile" class="f-dn">${mobile}</span>
            <div class="sub_tlt  sub_tlt_2">
                发送验证码到你的手机：${hideMobile}
            </div>
            <!-- END 次标题、居中信息 -->
            <!-- form表单 -->
            <form id="form-lock" class="clearfix"></form>
            <form class="clearfix f-dn">

                <div class="u-input">
                    <label  class="u-label">&nbsp;</label>
                    <input id="input_6"  type="text" placeholder="请输入图片校验码" class="i-inpt smsize" value="PFXa" />
                    <div class="u-tip"><div class="u-clear"></div></div>
                    <div id="btn-vcode" class="i-vcode"><img src="../../res/images/vcode.png" /></div>
                </div>

                <div class="u-input">
                    <label  class="u-label">&nbsp;</label>
                    <input id="input_7"  type="text" placeholder="请输入手机校验码" class="i-inpt smsize" />
                    <div class="u-tip"><div class=" u-clear"></div></div>
                    <span class="b-btn btn-getsms f-dn">获取验证码</span>
                    <span class="b-btn btn-getsms-loading">重新发送（30s）</span>
                    <table class="popb err"  r-animation='on: enter; class: animated shake;' >
                        <tbody><tr><td class="b-i"><i></i></td><td class="b-p">请编辑短信<strong>移动帐号更换</strong><br/>发送到<strong>1069&nbsp;8163&nbsp;0163&nbsp;331</strong></td></tr></tbody>
                    </table>
                </div>

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
        <script src="${staticroot}javascript/page/accLock/accLock2_mobile.js"></script>
    </@htmFoot>
</#escape>