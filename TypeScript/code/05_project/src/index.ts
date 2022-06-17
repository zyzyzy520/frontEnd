import './css/index.less'
// 引入Food类
import Food from './modules/Food'
// 引入ScorePanel类
import ScorePanel from './modules/ScorePanel';



const food = new Food();
const panel = new ScorePanel(100, 10);
console.log(food.X);
let btn = document.getElementById('btn');
btn!.onclick = (() => {
    food.change_coordinate();
    panel.addScore();

})