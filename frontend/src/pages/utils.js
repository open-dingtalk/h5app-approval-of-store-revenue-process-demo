import * as dd from "dingtalk-jsapi";

export const alert = (message) => {
    dd.device.notification.alert({
        message: message,
        title: "提示", //可传空
        buttonName: "确定",
        onSuccess : function() {
            //onSuccess将在点击button之后回调
            /*回调*/
        },
        onFail : function(err) {
            // 
        }
    });
}
export const openLink = (url) => {
    dd.biz.util.openLink({
        url: url,
        onSuccess: function() {},
        onFail: function() {}
    });
}


export const openSlidePanel = (url, title='title') => {
	dd.biz.util.openSlidePanel({
		// url: 'https://desktop.xfannix.com/index.html#' + url,
		url: url,
		title,
		onSuccess: function() {},
        onFail: function() {}
	})
}

export const browserNavigator = {
	versions: (() => {
		var u = navigator.userAgent
		return {
            trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			Safari: u.indexOf('Safari') == -1, //是否webApp程序，没有头部与底部
			DingTalk: u.toLowerCase().indexOf('dingtalk') > -1,
			Windows: u.toLowerCase().indexOf('windows') > -1,
		}
	})()
}