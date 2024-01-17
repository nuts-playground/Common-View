const dotenv = require('dotenv');
const path = require('path');
class EnvConfig {
    constructor() {
        this.env = process.env
        dotenv.config({
            path: path.join(__dirname, `../../.env`),
        });
    }

    getValue(key, throwPermission = true) {
        const value = this.env[key];
        if (!value && throwPermission) throw new Error(`환경 변수 로드 실패 target: ${key}`);

        return value;
    }

    // 필요한 env 키가 있는지 체크 없으면 throw Error
    verifyKey(keys) {
        keys.forEach((key) => this.getValue(key, true));
        return this;
    }
}

module.exports = { EnvConfig }
