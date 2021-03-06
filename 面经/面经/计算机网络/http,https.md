## 5.常见的HTTP状态码

### 5.1 大概分类

- 1xx 代表某个消息 ，一般意思就是请求已被接受，需要继续处理。

- **`2xx`** 代表`本次请求成功`，请求已成功被服务器接收、理解、并接受。其中 200 是我们比较常见的

- **`3xx`** `重定向`，代表需要`客户端采取进一步的操作才能完成请求`。
- **`4xx`** `客户端错误`，代表了`客户端看起来可能发生了错误，妨碍了服务器的处理`，十分常见。
- **`5xx`** `服务器错误` ，表示`服务器无法完成明显有效的请求`。服务器`在处理请求的过程中有错误或者异常状态发生`，也有可能是服务器意识到以当前的软硬件资源无法完成对请求的处理，这类型的状态码也十分常见



### 5.2 常见状态码

1. 100 继续

   ---请求者应当继续提出请求。`服务器`返回此代码表示`已收到请求的第一部分`，正在`等待其余部分`。

1. 101 （切换协议）

   ---`请求者已要求服务器切换协议`，`服务器已确认并准备切换`。

1. **`200 ok`**

   ---`请求已成功`，请求所希望的响应头或数据体将随此响应返回。

1. **`301 永久移动`**

   --- 永久性重定向。`请求的网页永久移动到新位置，一个新的URL`，服务器返回此响应时，会将请求者转到新位置。

1. **`302 Found`**

   --- 临时性重定向。表示请求的网页暂时地移动到新位置，一个新的URL，

1. **`304 （未修改）`**

   --- 一般是协商缓存，表示缓存还有效，使用缓存中的资源

1. **`400 Bad Request`**

   --- 由于明显的`客户端错误`（例如，格式错误的请求语法，太大，无效的请求消息或欺骗性路由请求），`服务器不能或不会处理该请求`。

2. **`403 Forbidden`**

   --- `服务器已经理解请求，但是拒绝执行它`。如果服务器能够讲清楚为何请求不能被执行，那么会在实体内描述拒绝的原因，当然，如果服务器不希望让客户端获得任何信息，就直接给你一个 404

3. **`404 Not Found`**

   --- `请求失败`，`请求所希望得到的资源未被在服务器上发现`，但允许用户的后续请求。

4. **`500 Internal Server Error`**

   --- `通用错误消息`，`服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理`。没有给出具体错误信息。

5. **`501 Not Implemented`**

   --- `服务器不支持当前请求所需要的某个功能`。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。（例如，网络服务API的新功能）

6. **`502 Bad Gateway`**(问到)

   --- 作为`网关或者代理工作的服务器尝试执行请求`时，`从上游服务器接收到无效的响应`。

7. **`503 Service Unavailable`**

   --- `由于临时的服务器维护或者过载，服务器当前无法处理请求`。`这个状况是暂时的，并且将在一段时间以后恢复`，如果能够预计延迟时间，那么响应中可以包含一个Retry-After头用以标明这个延迟时间。如果没有给出这个Retry-After信息，那么客户端应当以处理500响应的方式处理它。

8. **`504 Gateway Timeout`**(问到)

   --- 作为`网关或者代理工作的服务器尝试执行请求时`，`未能及时从上游服务器（URI标识出的服务器，例如[HTTP](https://so.csdn.net/so/search?q=HTTP&spm=1001.2101.3001.7020)、FTP、LDAP）或者辅助服务器（例如DNS）收到响应`。

9. **`505 HTTP Version Not Supported`**

   --- 服务器不支持，或者拒绝支持在请求中使用的HTTP版本

## 6.请求方法，option用在什么场景

![image-20220304095654539](C:\Users\zayn\AppData\Roaming\Typora\typora-user-images\image-20220304095654539.png)

1、**`OPTIONS`**

返回`服务器针对特定资源所支持的HTTP请求方法`;`跨域请求`中，`options请求是浏览器自发起的preflight request(预检请求)`，以`检测实际请求是否可以被浏览器接受。`

2、HEAD

向服务器索与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以再不必传输整个响应内容的情况下，就可以获取包含在响应小消息头中的元信息。

3、**`GET`**

向特定的资源发出请求。注意：GET方法不应当被用于产生“副作用”的操作中，例如在Web Application中，其中一个原因是GET可能会被网络蜘蛛等随意访问。Loadrunner中对应get请求函数：web_link和web_url

4、**`POST`**

向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。 Loadrunner中对应POST请求函数：web_submit_data,web_submit_form

5、PUT

向指定资源位置上传其最新内容

6、DELETE

请求服务器删除Request-URL所标识的资源

7、TRACE

回显服务器收到的请求，主要用于测试或诊断

8、CONNECT

HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。



## 7、HTTP与HTTPs区别

1. HTTP 的URL 以http:// 开头，而HTTPS 的URL 以https:// 开头
2. HTTP 是`不安全`的，而 HTTPS 是`安全`的
3. HTTP 标准端口是`80` ，而 HTTPS 的标准端口是`443`
4. 在OSI 网络模型中，HTTP工作于`应用层`，而HTTPS 的安全传输机制工作在`传输层`
5. HTTP `无法加密`，而HTTPS 对传输的数据`进行加密`
6. HTTP`无需证书`，而HTTPS` 需要CA机构颁发的SSL证书`



## 8.HTTPS采用的加密

HTTPS结合了对称加密和非对称加密这两种方式，用`非对称加密`的方式来`传输对称加密过程中的密钥`，之后我们就可以`采取对称加密的方式来传输数据`了

1. 服务器认证自己的公钥
   - 服务器把自己的公钥登录至数字证书认证机构
   - `CA用自己的私钥给服务器的公钥签名并颁发证书`
2. 证书验证阶段，拿到服务器公钥

- 浏览器`发起 HTTPS 请求`
- `服务端返回CA证书`(包含服务端自己的公钥)
- `客户端用CA的公钥验证证书是否合法`(浏览器内置有公钥)，如果不合法则提示告警

3. 生成密钥用密钥通信阶段
   - `客户端生成随机的对称加密秘钥Z`，通过`服务端的公钥加密发给服务端`
   - `服务端用自己的私钥解密`拿到加密密钥Z
   - `客户端和服务端通过对称秘钥Z加密数据来进行http通信`



## 9. http、tcp在哪一层？有什么联系

http在应用层，tcp在传输层

http的责任是去`定义数据的形式`，而tcp则是管理`数据要怎么传递才能够高效且稳定`。

http协议是建立在tcp协议上的，先通过tcp协议建立和服务器的连接通道，然后再通过http协议发送请求



## 10. http 1.0 2.0 3.0

### 10.1 http 0.9

- 请求端**`只支持 GET`** 请求
- 响应端**`只能返回 HTML 文本数据`**
- **`TCP连接无法复用`**，每一个请求都单独创建一个 TCP 连接，响应完成后TCP连接断开



### 10.2 http 1.0

- 扩展了请求方法**`增加了POST、HEAD请求`**，还扩展了响应状态码
- 增加了头部字段，content-type，通过设置该字段可以**`返回任意格式的数据`**
- 但**`TCP连接仍然无法复用`**，每一个请求都单独创建一个 TCP 连接，响应完成后TCP连接断开
- 存在**`队头阻塞`**问题，协议规定下一个请求必须得等到上一个请求的响应到达时才能发送，如果上一个请求的响应一直不到达，该请求一直不能发送，造成阻塞



### 10.3 http 1.1

- 扩展了请求方法，**`增加了PUT、DELETE`**等等。
- **`长连接`**：在`Connection`字段，通过设置`Keep-Alive`可以保持TCP连接建立后不断开，使得TCP连接得以复用。如果客户端想关闭，可以通过在请求头中携带Connection字段设置为false即可关闭
- **`请求管道化`**：基于长连接，`请求不必再等待上一个请求的响应到达时再发送`，而是可以批量并行的发送。`但是服务器必须得按照请求的先后顺序返回响应结果`，以保证客户端能够区分每次响应的内容。也就是说即使服务器先准备好这次请求的响应资源，但还是得等到上一次请求的响应准备好并且传输完毕后，才传输这次请求的响应。所以其实还是没有解决队头阻塞问题。
- **`支持响应分块`**：响应端可以不用一次返回所有数据，可以`将数据拆分成多个模块`，产生一块数据，就发送一块数据。客户端就可以对数据进行同步处理。
- **`增加Host头`**：实现了虚拟主机技术，`将一台服务器分成若干个主机`，这样就可以`在一台服务器上部署多个网站`了。通过`配置 Host 的域名和端口号`，即可`支持多个 HTTP 服务`



### 10.4 http 2.0

- 二进制。一个http请求划分成了三部分，传输的最小单位是**`帧`**，是一段二进制数据；**`消息`**由多个帧组成；**`数据流`**可以承载多个消息，是双向的字节流。
- 一个 TCP 连接上有`多个数据流`，一个数据流承载着`双向消息`，`一条消息包含了多个帧`，每个帧都有`唯一的标识`，`指向所在的数据流`，`来自不同数据流的帧可以交错发送`，然后再根据`每个帧头的数据流标识符重新组装`，这样就实现了数据传输。
- **`请求优先级`**：多个 HTTP 请求同时发送时，会产生多个数据流，`数据流中有一个优先级的标识`，服务器端可以根据这个标识来`决定响应的优先顺序`。
- **`多路复用`**：针对1.1存在的问题，服务端不用再按照请求的发送顺序进行响应，接收端根据帧的标识符，就能找到对应的流进行重新组装。
- **`服务器端推送`**：允许服务器未经请求，`主动向客户端发送资源`，并缓存到客户端中，以避免二次请求。虽然客户端之请求了html，服务端在返回HTML的同时，也将需要用到的css、js一并返回，减少客户端的请求次数
- **`头部压缩`**：头部字段包含大量信息，且每次请求都得携带。优化：`通信双方各自缓存一份头部字段表`，后续只需要发送头部的索引号即可。



### 10.5 http 3.0

对传输层进行了优化，`使用 QUIC 替换 TCP`。TCP也存在着一定的效率问题，比如说TCP在传输时用序列号标识了数据的顺序，一旦某个数据丢失，后面的数据也需要等待这个数据重传后再进行下一步处理。

QUIC 是`基于 UDP 进行多路复用的传输协议`。

- **`传输层连接更快`**：不需要三次握手就能建立连接。
- **`传输层多路复用`**：数据`在传输时会被拆分成了多个包`，每一个包都可以独立、交错发送，不用按顺序发送。
- **`改进的拥塞控制`**：TCP中接收方在内存满了的情况下，可能会丢弃已接受的包，QUIC禁止；QUIC每个包都有序列号标识，且是单调递增的，因此能够区分重传的包和超时得到包。因为重传的包的序号一定大于超时包的序号。
- **`优化的流量控制`** 
- **`加密认证的报文`**
- **`连接迁移`**：`TCP 连接是由（源 IP，源端口，目的 IP，目的端口）组成`，这四者中一旦有一项发生改变，这个连接也就不能用了。如果我们从 5G 网络切换到 WiFi 网络，IP 地址就会改变，这个时候 TCP 连接也自然断掉了。`QUIC 使用客户端生成的 64 位 ID 来表示一条连接`，只要 ID 不变，这条连接也就一直维持着，不会中断。



## 11. POST和GET的区别

1. get能被`缓存`，post不能被缓存
2. get方法是通过向URL添加数据进行传输，有大小的限制，这个限制本身是某些浏览器和服务器的限制，http协议无关。post没有`数据传输大小`的限制
3. get方法数据在URL中是能`被看到`的，并不是特别安全。但post方法不会
4. 一般情况，get`用于`获取数据，post用于修改服务器上的数据
5. **GET**在`浏览器回退`时是无害的，**POST**会再次提交请求

但从报文角度上来说，**`GET 和 POST 方法没有实质区别`**，只是`报文格式不同`。GET 和 POST `只是 HTTP 协议中两种请求方式`，而 HTTP 协议是基于 `TCP/IP `的应用层协议，无论 GET 还是 POST，`用的都是同一个传输层协议`，所以在传输上，没有区别。

get将参数接在`URL`后面，post放在`body`只是语法规范。get也可以将参数放在`body`里面，post接在`URL`后面
