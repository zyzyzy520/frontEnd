// 获取对应频道的文章列表
const getArticleList = (id:number) => {
    return {
        type: 'get',
        data: id
    }
}