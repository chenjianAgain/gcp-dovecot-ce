 var swiper = new Swiper('.swiper-container', {
     pagination: '.swiper-pagination',
     paginationClickable: true,
     spaceBetween: 30,
 });

 var browser = {
     versions: function () {
         var u = navigator.userAgent,
             app = navigator.appVersion;
         return {
             trident: u.indexOf('Trident') > -1, //IE内核   
             presto: u.indexOf('Presto') > -1, //opera内核   
             webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核   
             gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核   
             mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端   
             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端   
             android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器   
             iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器   
             iPad: u.indexOf('iPad') > -1, //是否iPad   
             webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部   
         };
     }()
 }
 var u = navigator.userAgent;


if (browser.versions.android) { //判断移动端
     var winHeight = $(window).height();
        function is_weixin() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }
        var isWeixin = is_weixin();
        if(isWeixin){
            $(".weixin-tip").css("height",winHeight);
            $(".weixin-tip").show();
        }
}

 if (browser.versions.ios || browser.versions.iPhone) { //判断ios iPhone
     $(".load").html("立即下载&nbsp;( IOS )&nbsp;&nbsp;" + "\<span>" + "\</span>")
 }

 $(".load").on("click", function () {
     if (browser.versions.ios || browser.versions.iPhone) { //判断ios iPhone
         location.href = "http://fir.im/32bs";
     } else if (browser.versions.android) { //判断android

         location.href = "http://gdown.baidu.com/data/wisegame/a72cb1c4f828b344/jisuanqi_585.apk";

     } else {
         alert("404 NO Foud")
     }
 });

 // 正则
 function isContains(str, substr) {
     return new RegExp(substr).test(str);
 }

 // 打开APP
 function openApp(src) {

     var ifr = document.createElement('iframe');
     ifr.src = src;
     ifr.style.display = 'none';
     document.body.appendChild(ifr);
     window.setTimeout(function () {
         document.body.removeChild(ifr);
     }, 2000);
 }