window.addEventListener('load', function(){

    const game = document.getElementById("game");
    
    const WIDTH = game.width = 500;
    const HEIGHT = game.height = 500;
    const NO_FRUITS = 3;
    const MAX_FRUIT = 5;
    
    const ctx = game.getContext("2d");
    
    
    const background = new Image();
    background.src = "sky_background.png";
    
    let fruitList = []
    for(let i = 0; i < NO_FRUITS; i++){
        let fruitImg = new Image();
        fruitImg.src = "fruit" + String(i + 1) + ".png";
        fruitList.push(fruitImg);
    }

    let x = 0
    let y = 0
    const orange = new Image();
    orange.src = "fruit2.png";
    
    function drawBackground(){
        ctx.drawImage(background, 0, 0);
    }
    function drawOrange(x,y){
        ctx.drawImage(orange, x, y, 60, 60);
    }
    function move(){
        drawBackground();
        x += 2;
        drawOrange(x, y);
        requestAnimationFrame(move);
    }
    move();
});
