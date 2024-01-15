/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: config => {
        // 아래를 추가합니다.
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'http://api.seokhoweb.com', // 허용하고자 하는 도메인
                    },
                    {
                        key: 'Access-Control-Allow-Credentials',
                        value: 'true',
                    },
                    // 다른 필요한 헤더들을 추가할 수 있습니다.
                ],
            },
        ];
    },
}

module.exports = nextConfig
