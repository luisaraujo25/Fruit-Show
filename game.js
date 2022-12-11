const game = document.getElementById("game");

const WIDTH = game.width = 500;
const HEIGHT = game.height = 500;
const NO_FRUITS = 3;

const ctx = game.getContext("2d");

const background = new Image();
background.src = "sky_background.png";
let fruitList = []
for(let i = 1; i <= NO_FRUITS; i++){
    let fruit = new Image();
    fruit.src = "fruit" + String(i) + ".png";
    fruitList.push(fruit);
}
console.log(fruitList)

function drawBackground(){
    ctx.drawImage(background, 0, 0);
}

class Fruit{
    constructor(ctx){
        this.height = 80;
        this.width = 80;
        this.ctx = ctx;
        this.index = Math.floor(Math.random() * NO_FRUITS);
    }

    draw(x, y){
        this.ctx.drawImage(fruitList[this.index], x, y, 70, 70);
    }
}


function gamePlay(){

    let gameOver = false
    const start = document.getElementById("start");
    start.style.visibility = 'hidden';
    drawBackground();
    const fruit = new Fruit(ctx);
    fruit.draw(0,0);
}