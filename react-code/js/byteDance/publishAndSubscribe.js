'use strict'
class PubSub {
    constructor() {
        //记录订阅发布的对象
        this._event = {}
    }
    //订阅, 订阅的消息名称和回调函数
    subscribe(evetName, handler) {
        if (this._event[evetName]) {
            //如果已经存在该消息，那么将该订阅者加入众多订阅者中
            this._event[evetName].push(handler);
        } else {
            //如果是第一位订阅者，新建
            this._event[evetName] = [handler];
        }
    }

    //发布，发布的消息名称和给订阅者的参数
    publish(evetName, ...args) {
        //拿到所有订阅者的处理函数
        let subscribers = this._event[evetName];
        //告诉订阅者消息发布了，没有订阅者会直接结束该循环
        for (let i = 0; i < subscribers.length; i++) {
            subscribers[i].apply(this, args);
        }
    }

    //解除订阅
    off(evetName, handler) {
        //拿到所有订阅者
        let subscribers = this._event[evetName];
        //清除掉需要解除订阅的，利用filter
        let newSubscribers = subscribers.filter((_handler) => {
            return _handler != handler
        })
        this._event[evetName] = newSubscribers;
    }
}

var event = new PubSub()
function a(something) {
    console.log(something, 'aa-aa')
}
function b(something) {
    console.log(something)
}
event.subscribe('dosomething', a)
event.publish('dosomething', 'chifan')
event.off('dosomething', a);
event.publish('dosomething', 'chifan')
event.off('dosomething', a);