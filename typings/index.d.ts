/// <reference path="./types/index.d.ts" />

interface IAppOption {
	globalData: {
		userInfo?: WechatMiniprogram.UserInfo;
	};
	userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback;
}

interface BindEvent {
  detail: boolean | {
    avatarUrl?: string
    value?: string
  }
}

interface IAppEnvValue {
  /**
   * 接口 baseURL
   */
  api: string;
}

interface IAppEnv {
  develop: IAppEnvValue,
  trial: IAppEnvValue,
  release: IAppEnvValue
}
