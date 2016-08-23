<#include "common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
        <!-- @STYLE -->
        <link rel="stylesheet" type="text/css" href="${staticroot}css/index.css">
    </@htmlHead>
    <@htmlBody  noLoginBtn = isLogin >

    <!-- 中间主体 -->
    <div class="g-bd">
        <div class="m-ban">
            <div class="i-img"></div>
        </div>
        <div class="m-main ">
            <div class="tlt">主要功能</div>
            <div class="sub-tlt">main functions</div>
            <ul class="m-list">
                <#if isLogin?? && isLogin == true>
                    <li><a href="/web/mobchg" ><i class="i-chg"></i><p class="tlt">更换手机</p><p>我要更换新手机号码</p></a></li>
                    <li><a href="/web/passwdset" ><i class="i-spwd"></i><p class="tlt">设置密码</p><p>我要设置登录密码</p></a></li>
                    <li><a href="/web/securemail" ><i class="i-mail"></i><p class="tlt">密保邮箱</p><p>我要提高安全性</p></a></li>
                    <li><a href="/web/freezappeal" ><i class="i-apl"></i><p class="tlt">冻结申诉</p><p>我的帐号被冻结了</p></a></li>
                    <li><a href="/web/realnaminfo" ><i class="i-name"></i><p class="tlt">设置实名信息</p><p>我要设置实名信息</p></a></li>
                <#else>
                    <li><a href="/web/mobchgoff" ><i class="i-chg"></i><p class="tlt">更换手机</p><p>我要更换新手机号码</p></a></li>
                    <li><a href="/web/freezappeal" ><i class="i-apl"></i><p class="tlt">冻结申诉</p><p>我的帐号被冻结了</p></a></li>
                    <li><a href="/web/passwdfind" ><i class="i-fpwd"></i><p class="tlt">找回密码</p><p>我忘记了登录密码</p></a></li>
                    <li><a href="/web/acclock" ><i class="i-lock"></i><p class="tlt">紧急锁定</p><p>我要锁定帐号7天</p></a></li>
                    <li><a href="/web/accunlock" ><i class="i-unlock"></i><p class="tlt">自助解锁</p><p>我要解除帐号锁定</p></a></li>
                </#if>
                <li><a href="/web/helpcenter" ><i class="i-help"></i><p class="tlt">帮助中心</p><p>我有几个问题不确定</p></a></li>

            </ul>
        </div>
    </div>
    <!-- END 中间主体 -->

    </@htmlBody>
    <@htmFoot></@htmFoot>
</#escape>