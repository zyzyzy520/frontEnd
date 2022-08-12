import axios from "axios";

// 拿到相关节点
const btn1 = document.getElementById("btn1");

// 设置点击后发送请求的回调
btn1.onclick = () => {
  // 完整版，因为axios返回的是一个Promise实例，所以要用.then设定回调函数接收
  axios({
    url: "http://localhost:5000/persons",
    method: "GET",
  }).then(
    (response) => {
      console.log("请求发送成功了", response);
    },
    (error) => {
      console.log("请求发送失败了", error);
    }
  );
};
