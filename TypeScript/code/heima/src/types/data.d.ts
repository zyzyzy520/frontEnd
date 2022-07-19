// . 负责数据结构类型的定义

// 1. 声明频道的数据结构
export type Channels = {
    id: number,
    name: string
}[]

// 2. 声明文章的数据结构
export type Articles = {
    art_id: string,
    title: string,
    aut_id: string,
    comm_count: number,
    pubdate: string,
    aut_name: string,
    is_top: number,
    cover: {
        type: number,
        images?: string[] //images可能没有
    }
}[]