// 1. 定义要传递的参数的类型
type CustomType = {
    name: string,
    age: number,
    sex: string
  }
  
  // 2.利用接口继承类型，?表示可选
  interface CustomType2 extends CustomType {
    money?: number
}
  
export type {CustomType2}