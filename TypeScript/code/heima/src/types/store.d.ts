// 负责仓库action的类型定义


// 获取频道列表action 类型
type getChannel = {
    type: 'get',     //字面量
    data: number
}

// 切换当前频道action 类型
type toggleChannel = {
    type: 'toggle',
    data: number
}

// 获取对应频道的文章列表action 类型
type getArticle = {
    type: 'get',
    data: number
}