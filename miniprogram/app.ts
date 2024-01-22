// @ts-ignore
// import Notify from "@vant/weapp/notify/notify";
// import webClient from "./apis/shared/wechat/fetch";
// import { appEnv } from "./utils/index";

App<IAppOption>({
	globalData: {},
	onLaunch() {
		// webClient.create({
		// 	baseURL: appEnv.api,
		// 	onError(msg) {
		// 		Notify({
		// 			message: msg,
		// 			safeAreaInsetTop: true,
		// 		});
		// 	},
		// });
		// 登录
		// wx.login({
		// 	success: (res) => {
		// 		console.log(res.code);
		// 		// 发送 res.code 到后台换取 openId, sessionKey, unionId
		// 	},
		// });
	},
});
