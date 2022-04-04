## 7.讲一下cookie、session、localStorage、sessionStorage

### **`7.1 cookie`**:

-  浏览器向服务器发送请求后，`服务器在响应头里面添加一个 Set-Cookie 字段`，浏览器收到响应后保存该字段。`此后每次浏览器访问该服务器，都必须带上这段数据`。一般用于识别用户身份，记录历史记录啊等等;会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）;个性化设置（如用户自定义设置、主题等）;浏览器行为跟踪（如跟踪分析用户行为等）
-  如果`不在浏览器中设置过期事件`，cookie被保存在内存中，`生命周期随浏览器的关闭而结束`，这种cookie简称为会话cookie。如果在浏览器中`设置了cookie的过期事件`，cookie会被保存在硬盘中，`关闭浏览器后，cookie数据仍然存在，直到过期事件结束才消失`

<img src="https://segmentfault.com/img/bVbj8Vv?w=1049&h=651" alt="cookie原理" style="zoom:70%;" />

localStorage和sessionStorage都是本地存储，将数据存储在本地浏览器中。区别是localStorage需要手动删除，而sessionStorage浏览器关闭即可删除

### 7.2 `session`：

- 一般来说，Session 基于 Cookie 来实现。`使用cookie方式存储sessionid到客户端`
- `客户端访问服务器时`，服务器读取 SessionID。服务器有一块内存（哈希表）保存了所有 session。通过 SessionID 我们可以得到对应用户的隐私信息，如 id、email

### 7.3 localStorage

- `数据存储在用户浏览器`中
- `声明周期永久生效，除非手动删除 否则关闭页面也会存在`
- 



### 7.4 sessionStorage

- **`生命周期为关闭浏览器窗口`**！！！也就是说关闭浏览器再打开此页面便没有数据了
- `数据存储在用户浏览器`中

localStorage和sessionStorage都`保存在客户端，不与服务器进行交互通信`。获取数据可以直接从这两个中获取，不需要频繁发送请求。存储空间相对于cookie也更大




## 8. cookie都有什么属性

`名称（Name）`、一个`值（Value）`和其它几个用于控制 Cookie `有效期`、`安全性`、`使用范围`的可选属性组成



### 8.1 Name/Value

cookie的`名称和对应的值`



### 8.2 Expires

cookie的`过期时间`。当 Expires 属性缺省时，表示是会话性 Cookie。并在用户关闭浏览器时失效



### 8.3 Max-Age

 Cookie `失效之前需要经过的秒数`。 max-Age 属性为正数时，浏览器会将其持久化；为负数，则表示该 Cookie 只是一个会话性 Cookie； 为 0 时，则会立即删除这个 Cookie。 Expires 和 Max-Age 都存在，`Max-Age 优先级更高`。



### 8.4 Domain

Cookie `可以送达的主机名`。默认值为当前文档访问地址中的主机部分（但是不包含子域名）。



### 8.5 Path

一个 URL 路径。这个`路径必须出现在要请求的资源的路径中才可以发送 Cookie 首部`

Domain 和 Path 标识共同定义了 Cookie 的作用域：即 Cookie 应该发送给哪些 URL。



### 8.6 Secure

标记为 Secure 的 Cookie `只应通过被HTTPS协议加密过的请求发送给服务端`



### 8.7 HTTPOnly

设置 HTTPOnly 属性可以`防止客户端脚本通过 document.cookie 等方式访问 Cookie`，有助于`避免 XSS 攻击`。



### 8.8 SameSite

`可以让 Cookie 在跨站请求时不会被发送，`从而可以`阻止跨站请求伪造攻击（CSRF）`



SameSite 可以有下面三种值：

1. **Strict**仅`允许一方请求携带 Cookie`，即浏览器将只发送相同站点请求的 Cookie，即`当前网页 URL 与请求目标 URL 完全一致`。
2. **Lax**允许`部分第三方请求携带 Cookie`
3. **None**`无论是否跨站都会发送 Cookie`



## 9.cookie和session的区别？

cookie和session都是用来`跟踪浏览器用户身份`的会话方式。

**`cookie`**：浏览器第一次发送请求到服务器，服务器创建cookie，该cookie有用户的一些信息，然后发送给浏览器，浏览器拿到cookie后，将cookie存储起来，以后每次发送请求时都会携带上cookie

**`session`**：基于cookie的，浏览器第一次发送请求到服务器时，服务器创建session，并将sessionID存储于cookie中，发送给浏览器。这样以后浏览器发送请求时，携带上cookie，服务器就可以拿到cookie里的sessionID，根据sessionID在自己保存的表里查找，拿到用户的信息



区别就是`cookie的数据时存储在浏览器中的`，`session的数据是存储在服务器中的`。cookie不是很安全，因为别人可以拿到存放的cookie从而进行伪造，而session是存储在服务器中的，如果访问增多，会加大服务器的压力。