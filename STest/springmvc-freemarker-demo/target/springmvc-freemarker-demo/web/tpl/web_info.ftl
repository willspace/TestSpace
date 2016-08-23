<#include "common/config.ftl">
<!DOCTYPE html>
<#escape x as x?html>
<@htmlHead>
<link rel="stylesheet" href="/web/src/pub/core.css?30ece52f208ba4f18d06bde86568182a"/>
</@htmlHead>
<@htmlBody>
<#if code == '201'>
<div class="g-bd changephone-offl-s3">
<div class="top_tlt">更换手机</div>
<div class="b-step">
<span class="i-step light"><p>确认当前帐号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择更换方式</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>发送成功</p></span>
</div>
<div class="m-opr">
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>发送成功</h3>
<p>邮件已发送至<strong>${email}</strong>，请你注意接收！</p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</div>
</div>
<#elseif code == '202' || code == '203'>
<div class="g-bd changephone-offl-success">
<div class="top_tlt">更换手机</div>
<#if code=='203'>
<div class="b-step">
<span class="i-step light"><p>验证原帐号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>验证新帐号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>更换成功</p></span>
</div>
</#if>
<div class="m-opr ">
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>换号申请已提交</h3>
<p>24小时后，本手机帐号将转移到新手机号内。</p>
<p>你可以通过发送短信<strong>qx</strong>到<strong>1069 &nbsp;8163 &nbsp;0163 &nbsp;331</strong>取消本次换号操作或回复
<strong>ljsx</strong>立即生效</p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</div>
</div>
<#elseif code == '204'>
<div class="g-bd retrievepwd-success">
<div class="top_tlt">找回密码</div>
<div class="b-step">
<span class="i-step light"><p>安全验证</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置新密码</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置成功</p></span>
</div>
<div class="m-opr">
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>新密码设置成功！</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</div>
</div>
<#elseif code == '205'>
<div class="g-bd retrievepwd-success">
<div class="top_tlt">修改密码</div>
<div class="b-step">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>修改密码</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>修改成功</p></span>
</div>
<div class="m-opr">
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>新密码修改成功！</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</div>
</div>
<#elseif code == '206'>
<div class="g-bd retrievepwd-success">
<div class="top_tlt">设置密码</div>
<div class="b-step">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置密码</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置成功</p></span>
</div>
<div class="m-opr">
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>新密码设置成功！</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</div>
</div>
<#elseif code == '207'|| code == '208'|| code == '209'|| code == '210'>
<div class="g-bd setsmail-s3">
<div class="top_tlt">密保邮箱</div>
<div class="m-opr">
<div class="m-succ">
<#if code== '207'>
<div class="activate1">
<div class="i-img"></div>
<div class="note">
<h3>已激活当前帐号的密保邮箱</h3>
<p>${hideEmail}</p>
</div>
</div>
<#elseif code == '208'>
<div class="i-img"></div>
<div class="note">
<h3>激活邮件发送成功</h3>
<p>邮件已发送至<strong>${email}</strong>，请注意查收</p>
</div>
<#elseif code == '209'>
<div class="activate1">
<div class="i-img"></div>
<div class="note">
<h3>激活成功</h3>
<p>你的移动帐号密保邮箱已激活成功</p>
</div>
</div>
<#elseif code == '210'>
<div class="activate1">
<div class="i-img"></div>
<div class="note">
<h3>注销成功</h3>
<p>&nbsp;</p>
</div>
</div>
</#if>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</div>
</div>
<#elseif code == '211'|| code == "212"|| code == "213"|| code == "214">
<div class="g-bd">
<div class="top_tlt">设置实名信息</div>
<div class="b-step">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置实名信息</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置成功</p></span>
</div>
<div class="m-opr">
<#if code == '212'|| code == "214">
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>恭喜${mobile}</h3>
<h3>已通过手机帐号的实名认证</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code == "211">
<div class="m-process">
<div class="i-img"></div>
<div class="note">
<h3>实名认证中</h3>
<h3>可能还需一段时间，请耐心等候</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code == "人工审核">
<div class="m-people">
<div class="i-img"></div>
<div class="note">
<h3>人工审核中</h3>
<h3>可能还需一段时间，请耐心等候</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code == "213">
<div class="m-info">
<div class="i-img"></div>
<div class="note">
<h3>帐号${mobile}</h3>
<h3>实名信息已提交</h3>
<div class="n-tip2">
<p>一旦验证成功，点击"实名信息"</p>
<p>我们将会返回给你关于个人实名认证的相关结果</p>
</div>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</#if>
</div>
</div>
<#elseif code == '215' || code =="216">
<div class="g-bd freezeappeal-s3">
<div class="top_tlt">冻结申诉</div>
<div class="b-step">
<span class="i-step light"><p>验证申诉帐号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择申诉方式</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>操作成功</p></span>
</div>
<div class="m-opr">
<#if code == '215'>
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>邮件已发送至<strong>${email}</strong></h3>
<p>请点击邮箱中的链接完成解锁操作</p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code =="216">
<div class="m-succ ">
<div class="i-img"></div>
<div class="note">
<h3>手机帐号：${mobile}</h3>
<h3>冻结已解除！</h3>
<#if newMobile??><h3 class="n-tip">下次请用${newMobile}登录</h3></#if>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code =="0000">
<div class="m-warn ">
<div class="i-img"></div>
<div class="note">
<h3>安全提示</h3>
<p>该操作会清空你的身份证信息、邮箱信息以及所有产品数据，</p>
<p>确认继续注册新帐号么？</p>
</div>
<div class="u-bak">
<div class="b-btn b-btn-w">返回</div>
<div class="b-btn b-btn-w">注册新帐号</div>
</div>
</div>
</#if>
</div>
</div>
<#elseif code == '217' || code == '218' || code == '308'>
<div class="g-bd acclock-s3">
<div class="top_tlt">紧急锁定</div>
<div class="b-step ">
<span class="i-step light"><p>验证手机</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置实名信息</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>设置成功</p></span>
</div>
<div class="m-opr">
<#if code == '217'>
<div class="m-succ ">
<div class="i-img"></div>
<div class="note">
<h3>邮件已发送至<strong>${email}</strong></h3>
<p>请点击邮箱中的链接完成锁定操作</p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code == '218'>
<div class="m-succ ">
<div class="i-img"></div>
<div class="note">
<h3>紧急锁定成功</h3>
<p>每次锁定时间为7天，超过锁定时间后帐号将自动解锁<br />你也可以<a href="/web/accunlock" target="_blank"><strong>立即解锁</strong></a></p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code == '308'>
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>当前帐号状态：锁定</h3>
<p>${remainLockTime}&nbsp;&nbsp;<a href="/web/accunlock" target="_blank"><strong>立即解锁</strong></a></p>
<p>每次锁定时间为7天，超过锁定时间后帐号将自动解锁</p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</#if>
</div>
</div>
<#elseif code == '219' || code == '220'>
<div class="g-bd acclock-s3">
<div class="top_tlt">自助解锁</div>
<div class="b-step">
<span class="i-step light"><p>输入手机号</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>选择解锁方式</p></span>
<span class="i-line"></span>
<span class="i-step light"><p>操作成功</p></span>
</div>
<div class="m-opr">
<#if code == '219'>
<div class="m-succ">
<div class="i-img"></div>
<div class="note">
<h3>邮件已发送至<strong>${email}</strong></h3>
<p>请点击邮箱中的链接完成解锁操作</p>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
<#elseif code == '220'>
<div class="m-succ ">
<div class="i-img"></div>
<div class="note">
<h3>${mobile}</h3>
<h3>自助解锁成功！</h3>
</div>
<div class="u-bak"><a class="b-btn b-btn-s" href="/web">返回安全中心</a></div>
</div>
</#if>
</div>
</div>
</#if>
</@htmlBody>
<@htmFoot></@htmFoot>
</#escape>