<#include "common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
        <!-- @STYLE -->
        <link rel="stylesheet" type="text/css" href="${staticroot}css/help.css">
    </@htmlHead>
    <@htmlBody>

    <!-- 中间主体 -->
    <div class="g-bd">
        <!-- 左侧帮助中心 -->
        <div class="m-main">
            <div class="h-tlt">帮助中心</div>
            <div id="item-1" class="h-item">
                <h1>帐号被盗号怎么办</h1>
                <p>请尽快在"<a href="#">手机帐号安全中心</a>"—"紧急锁定"锁定帐号，使正在登录的盗号者强制下线，以减少您的损失，然后请确保手机在自己身边。</p>
                <p>如果您发现密码已被恶意修改，请使用"找回密码"来更换您的密码。如果密码未被修改，也建议您重新设置一个新的密码。</p>
                <p> 待上网环境安全时，请您使用在"<a href="#">手机帐号安全中心</a>"—"自助解锁"解锁您的帐号。</p>
                <p>温馨提示：请不要将手机验证码告知他人，工作人员也不会向您索取。</p>
            </div>
            <div id="item-2" class="h-item">
                <h1>手机丢失，无法接收验证码？</h1>
                <p>1）到手机运营商（移动/联通/电信）进行sim卡补卡，补卡后，在装有新sim卡的手机（号码不变）上重新登录。</p>
                <p>2）如果您无法补卡或者换了新的手机号码，请您到"手机帐号安全中心"—"更换手机"进行手机更换，然后使用新的手机号码登录。</p>
                <p>若以上回答仍无法解决问题，您可以联系我们   游戏用户请拨打：020- 8391 8160</p>
                <p>非游戏用户请拨打：020- 8356 8094</p>
            </div>
            <div id="item-3" class="h-item">
                <h1>新换了手机号码，需要更换帐号?</h1>
                <p>如果原手机号可以登录：</p>
                <p>使用原手机登录产品，在"设置"—"手机帐号安全中心"—"设置帐号"进行更换。</p>
                <p>如果原手机号码无法登录：</p>
                <p>在登录页中点击"手机号无法使用"，或到"<a href="#">手机帐号安全中心</a>"—"帐号更换"进行手机更换。</p>
            </div>
            <div id="item-4" class="h-item">
                <h1>登录需要验证码，但手机不在身边</h1>
                <p>您可以留意页面中是否有“使用密码登录”通道，如果页面不包含这项登录方式，您可能暂时无法登录</p>
            </div>
            <div id="item-5" class="h-item">
                <h1>新购买的手机号提示已被注册</h1>
                <p>您的手机号可能是遇到运营商二次放号的情况。为了保证每一位用户都拥有一个完整的产品体验过程，目前是无法重新激活的。</p>
                <p>但我们设置了严格的检查帐号心跳规则，一般在运营商回收前不会遇到这个情况，如果您正面临这样的问题，请您联系客服咨询。</p>
            </div>
            <div id="item-6" class="h-item">
                <h1>登录后发现帐号变成一个全新的帐号</h1>
                <p>您可能长时间未登录，系统已将您的帐号回收。
                <p><span>您可以：1）重新注册一个新的帐号</span><span>2）<a href="#">联系客服</a></span></p>
            </div>
            <div id="item-7" class="h-item">
                <h1>登录时提示帐号被冻结</h1>
                <p>由于长期未登录，帐号处于冻结期，请您到"<a>网易手机帐号安全中心</a>"—"冻结申诉"解锁帐号。</p>
                <p>如果您设置过密保邮箱、实名信息，您可以选择一种方式解锁。</p>
                <p>如果您未设置过任何安全信息，您可以通过客服申诉的方式提交帐号基本信息给我们审核。</p>
            </div>
            <div id="item-8" class="h-item">
                <h1>其它常见问题</h1>
                <p>网易移动帐号可否绑定将军令、密保卡等密保产品?</p>
                <p>目前无法绑定，所以请保管好自己的手机、号码和短信验证码，防止恶意登录。</p>
                <p>为什么修改设置、登录等一些操作需要发送短信？</p>
                <p>系统需要通过短信验证您的手机号码，避免被他人冒用。</p>
                <p>当我们下发短信达到上限时，需要您编辑一条对应内容的短信，发给我们作为操作依据。</p>
            </div>
            <div id="item-9" class="h-item">
                <h1>若以上回答仍无法解决问题，您可以联系我们</h1>
                <p><span>游戏用户请拨打：020- 8391 8160</span><span>非游戏用户请拨打：020- 8356 8094</span></p>
            </div>
        </div>
        <!-- END 左侧帮助中心 -->

        <!-- 右侧问题列表 -->
        <div class="m-list">
            <div class="l-tlt"><i></i><span>问题列表</span></div>
            <div class="l-item"><a href="#item-1">-帐号被盗号怎么办</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-2">-手机丢失，无法接收验证码？</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-3">-新换了手机号码，需要更换帐号?</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-4">-登录需要验证码，但手机不在身边</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-5">-新购买的手机号提示已被注册</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-6">-登录后发现帐号变成一个全新的帐号</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-7">-登录时提示帐号被冻结</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-8">-其它常见问题</a><div class="sp"></div></div>
            <div class="l-item"><a href="#item-9">-联系我们</a><div class="sp"></div></div>
        </div>
        <!-- END 右侧问题列表 -->
    </div>
    <!-- END 中间主体 -->


    </@htmlBody>
    <@htmFoot></@htmFoot>
</#escape>