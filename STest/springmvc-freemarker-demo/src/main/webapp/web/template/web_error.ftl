<#include "common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
    <@htmlHead>
        <!-- @STYLE -->
        <link rel="stylesheet" type="text/css" href="${staticroot}css/style.css">
    </@htmlHead>
    <@htmlBody>


    <!-- 中间主体 -->
    <div class="g-bd changephone-offl-error">
        <!-- 大标题 -->
        <div class="top_tlt"><#if title??>${title}<#else>&nbsp;</#if></div>
        <!-- END 大标题 -->
        <!-- 操作主体 -->
        <div class="m-opr" id="m-opr">
            <#if  code?? && code == "128">
                <div class="m-error">
                    <div class="i-img"></div>
                    <div class="note">
                        <h3>抱歉${mobile}</h3>
                        <h3>实名认证暂时失败</h3>
                        <div class="n-tip2">
                            <p>可能是由于你所填写的身份证号码和姓名不匹配</p>
                        </div>
                    </div>
                    <div class="u-bak"><a href="/web/realnaminfo?from=error" class="b-btn b-btn-s" target="_blank">返回重填</a><a class="b-btn b-btn-s j-appeal" href="javascript:void(0);">申请人工审核</a></div>
                </div>
            <#else>
            <!-- 操作失败 -->
            <div class="m-error">
                <div class="i-img"></div>
                <div class="note">
                    <h3>操作失败</h3>
                    <#if code??>
                        <#if code == '100'>
                            <p>服务器异常</p>
                        <#elseif code == '101'>
                            <p>操作已经超时</p>
                        <#elseif code == '102'>
                            <p>session过期或操作步骤不正确</p>
                        <#elseif code == '103'>
                            <p>请先回到第一步确认当前帐号</p>
                        <#elseif code == '104'>
                            <p>请先回到第二步发换号邮件</p>
                        <#elseif code == '105'>
                            <p>sid不能为空</p>
                        <#elseif code == '106'>
                            <p>未通过邮件链接更换手机步骤</p>
                        <#elseif code == '107'>
                            <p>请先回到第一步验证原帐号</p>
                        <#elseif code == '108'||  code == '123'>
                            <p>请先回到第二步验证新帐号</p>
                        <#elseif code == '109' || code == "122" || code == "129">
                            <p>请先回到第一步验证当前账号</p>
                        <#elseif code == '110'>
                            <p>请先进行登录操作</p>
                        <#elseif code == '111'>
                            <p>登录验证异常，可能是因为cookie已经过期</p>
                        <#elseif code == '112'>
                            <p>请使用手机帐号登录</p>
                        <#elseif code == '113'>
                            <p>手机帐号不存在，请重新登录</p>
                        <#elseif code == '114'>
                            <p>手机账号异常</p>
                        <#elseif code == '115'>
                            <p>已登录，不可访问非登录功能</p>
                        <#elseif code == '121'>
                            <p>请先回到第二步设置新密码</p>
                        <#elseif code == '124' || code == '137' || code =="142">
                            <p>请先回到第一步验证手机</p>
                        <#elseif code == '125'>
                            <p>请先回到第二步设置密保邮箱</p>
                        <#elseif code == '126'>
                            <p>请先回到第二步设置密保邮箱</p>
                        <#elseif code == '127'>
                            <p>请不要重复注销</p>
                        <#elseif code == '130'>
                            <p>请先回到第二步设置实名信息</p>
                        <#elseif code == '131'>
                            <p>请先回到第一步验证申诉账号</p>
                        <#elseif code == '132' || code=="134">
                            <p>请先回到第二步发冻结申诉邮件</p>
                        <#elseif code == '133'>
                            <p>未通过邮件链接解冻步骤</p>
                        <#elseif code == '135'>
                            <p>没有设置密码</p>
                        <#elseif code == '136'>
                            <p>请先回到验证申诉账号</p>
                        <#elseif code == '138'>
                            <p>请先回到第二步发锁定邮件</p>
                        <#elseif code == '139'>
                            <p>请不要重复锁定</p>
                        <#elseif code == '140'>
                            <p>请先回到第二步选择选择锁定方式</p>
                        <#elseif code == '141'>
                            <p>请先回到手机锁定页面</p>
                        <#elseif code == '143'>
                            <p>请先回到第二步发解锁邮件</p>
                        <#elseif code == '144'>
                            <p>请不要重复解锁</p>
                        <#elseif code == '144'>
                            <p>请先回到手机解锁页面</p>
                        <#elseif code == '401'>
                            <p>参数错误或产品号不允许</p>
                        <#elseif code == '410'>
                            <p>IP不允许</p>
                        <#elseif code == '420'>
                            <p>帐号不存在</p>
                        <#elseif code == '422'>
                            <p>帐号已锁定</p>
                        <#elseif code == '500'>
                            <p>服务器端错误</p>
                        <#elseif code == '502' || code=="602">
                            <p>帐号已冻结</p>
                        <#elseif code == '601'>
                            <p>非手机帐号</p>
                        <#elseif code == '612'>
                            <p>密保邮箱已激活</p>
                        <#elseif code == '6121'>
                            <p>密保邮箱激活流水号错误</p>
                        <#elseif code == '619'>
                            <p>申诉账号流水号错误</p>
                        <#else>
                            <p>网络或者系统异常</p>
                            <p>请稍后再试</p>
                        </#if>
                    <#else>
                        <p>非法请求</p>
                    </#if>
                </div>
                <div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
            </div>
            <!-- END操作失败 -->
            </#if>
        </div>

    </div>
    <!-- END 中间主体 -->

    </@htmlBody>
    <@htmFoot>
    <script src="${staticroot}javascript/page/web_error.js"></script>
    </@htmFoot>
</#escape>