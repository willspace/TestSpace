<#--
配置参数
-->
<#assign staticroot = '/web/src/'>
<#assign libdir = staticroot + 'javascript/lib/nej/src/'>
<#assign libroot = staticroot + 'javascript/lib/'>
<#assign prodir = staticroot + 'javascript/'>
<#assign errorMap = {'401':''} />
<#--
输出js文件 / css文件，含版本号
-->
<#macro htmlHead title="网易安全中心" keywords="网易手机帐号安全中心" description="网易手机帐号安全中心">
<html>
<head>
<link rel="shortcut icon" href="${staticroot}favicon.ico"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="application-name" content="reg.163.com"/>
<meta name="keywords" content=${keywords}/>
<meta name="description" content=${description}/>
<title>${title}</title>
<!--[if lt IE 8]>
<script>
location.href="/web/browser_warn";
</script>
<![endif]-->
<#nested>
</head>
<body>
<#-- No Script -->
<noscript>
</noscript>
</#macro>
<#macro htmlBody noLoginBtn = true>
<div id="b-toast"></div>
<div class="g-hd">
<div class="g-in">
<a href="/web"><div class="m-logo "></div></a>
<#if isLogin?? && isLogin==true && usermobile??>
<div class="m-tr-block"><span class="j-usermobile"><i></i>${usermobile}</span><a target="_blank" href="/web/helpcenter">帮助中心</a><a href="/web/logout">退出</a></div>
<#else>
<div class="m-tr-block"><a target="_blank" href="/web/helpcenter">帮助中心</a><#if noLoginBtn == false><a id="btnLogin">登录</a><#else></#if></div>
<script type="text/javascript" src="//webzj.reg.163.com/v1.0.1/message.js?v20160719"></script>
<script type="text/javascript">
try {
var _dc = {
bid :'btnLogin', eventType:'click',
cssDomain : '//mob.163.com/web/src/css/', cssFiles : 'logincomp.css',
server:0,productkey:0,noqr:1, regSucCount:3,
needMobileLogin:1,needMobileReg:1, mobileFirst:1,
smsBtnTxt:'登 录', mbBtnTxt:'登 录', regMbTxt:'注 册',
autoSuffix:1, swidth:'320', noMobileReg:1,
gotoRegTextMb:'去注册', gotoLoginTextMb:'去登录',skin : 4,// 皮肤
isHttps: 0,PROTOCOL:'http', REGPROTOCOL:'http', product : 'ydaq_web',  promark : 'yadRjyg',
host : 'mob.163.com',single : 0, page : 'login', needanimation : 0,
coverBackground : "top:0;background:-webkit-radial-gradient(center,rgba(0,0,0,0.3),#000 75%);",
iframeShowAnimation : "showAnimation .5s", errMode : 1, noGaq : 1,
otherThirdLink:'<div class="f-dn"></div>',
logincb : function(){ location.reload(); }
};
var urs = new URS(_dc);
}catch(_e){}
</script>
</#if>
</div>
</div>
<#nested>
</#macro>
<#-- 版权信息 -->
<#macro copyRight>
<div class="g-ft">
<div class="g-in">
<div class="m-cp">
<p><a href="http://corp.163.com/eng/about/overview.html" target="_blank">About NetEase</a>-<a href="http://gb.corp.163.com/gb/about/overview.html" target="_blank">公司简介</a>-<a href="http://gb.corp.163.com/gb/contactus.html" target="_blank">联系方式</a>-<a href="http://reg.163.com/help/help_oauth2.html?v=20141215" target="_blank">OAuth2.0认证</a>-<a href="http://corp.163.com/gb/job/job.html" target="_blank">招聘信息</a>-<a href="http://help.163.com/" target="_blank">客户服务</a>-<a href="http://gb.corp.163.com/gb/legal.html" target="_blank">相关法律</a>-<a href="http://emarketing.biz.163.com/" target="_blank">网络营销</a></p>
<p>网易公司版权所有 ©1997-${.now?substring(0,4)}</p>
</div>
</div>
</div>
</#macro>
<#-- 文档尾部 -->
<#macro htmFoot>
<@copyRight/>
<script src="/web/src/pub/pt_common_config.js?77b49b04973456b598f9c7cecd8bdeb5"></script>
<#nested>
</body>
</html>
</#macro>