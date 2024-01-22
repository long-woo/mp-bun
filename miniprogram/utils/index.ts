const _env = wx.getAccountInfoSync().miniProgram.envVersion;

const __APP_ENV: IAppEnv = {
	develop: {
		api: "https://demodata.liangyihui.net/smart",
	},
	trial: {
		api: "https://demodata.liangyihui.net/smart",
	},
	release: {
		api: "https://data.liangyihui.net/smart",
	},
};

export const appEnv = __APP_ENV[_env];
