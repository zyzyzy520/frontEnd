// 定义数据的类型

// 1. 将发送登录请求后获取的数据进行存储，用户令牌是随时会更新的，无需存储在数据库中
export type Token = {
    token: string,          //用户token令牌
    refresh_token: string   //刷新token的令牌
}