const { EnvConfig } = require('./env.config');

const envConfig = new EnvConfig();

function init() {
    const oauthUrlList = [
        'NEXT_PUBLIC_GOOGLE_LOGIN_PATH',
        'NEXT_PUBLIC_GITHUB_LOGIN_PATH',
        'NEXT_PUBLIC_KAKAO_LOGIN_PATH',
        'NEXT_PUBLIC_NAVER_LOGIN_PATH',
        'NEXT_PUBLIC_OAUTH_START_LOGIN_URL',
    ];
    envConfig.verifyKey(oauthUrlList)

    console.log('정상');
}

init();
