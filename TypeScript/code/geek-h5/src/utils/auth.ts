import type {Token} from '@/types/data'
// 1. 设定将token存入用户浏览器本地存储中的key，存入本地存储的变量很多，要表明是极客园网站的key
const TOKEN_KEY = 'itcast_geek_mobile'

// 2. 设置TOKEN
// 设置token是从服务器拿到TOKEN时进行设置，因此类型就是我们在data.d.ts声明的对象类型。但是我们本地存储必须是字符串，所以要将token对象转化成字符串
const setToken = (token: Token) => localStorage.setItem(TOKEN_KEY, JSON.stringify(token))

// 3. 获取TOKEN
// 根据TOKEN_KEY从本地存储中拿到TOKEN，TOKEN_KEY是固定的，拿到的token是字符串，所以要将字符串转化成token对象。但是可能存在token失效，本地存储没有与TOKEN__KEY对应的token，所以要进行设置。如果没有对应的token，localStorage.getItem(TOKEN_KEY)返回null，我们就设置一个空值对象；存在就返回对应的token。这样JSPN.parse处理后的对象一定满足Token类型。这里用到了 || 操作符，当第一个操作数可以转化为true，则返回第一个操作数；否则直接返回第二个操作数。在该情况下，如果第一个操作数是null，会被转化为false
const getToken = (): Token => JSON.parse(localStorage.getItem(TOKEN_KEY) || '{"token": "", "refresh_token":"")' );

// 4. 清除token
// 根据TOKEN_KEY清除即可。
const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export {setToken, getToken, removeToken}