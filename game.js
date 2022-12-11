window.addEventListener('load', function(){

    const game = document.getElementById("game");
    
    const WIDTH = game.width = 500;
    const HEIGHT = game.height = 500;
    const NO_FRUITS = 3;
    const MAX_FRUIT = 5;
    const SPEED = 2;

    const ctx = game.getContext("2d");
    
    const background = new Image();
    background.src = "sky_background.png";

    const appleImg = new Image();
    appleImg.src = "apple.png";
    
    class Apple{
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.width = 60;
            this.height = 60;
        }
        update(){
            this.x += SPEED;
        }
        draw(){
            ctx.drawImage(appleImg, this.x, this.y, this.width, this.height);
        }
    }
    
    function drawBackground(){
        ctx.drawImage(background, 0, 0);
    }

    const apple = new Apple(0, 0);
    let angle = 0;

    function move(){
        drawBackground();
        apple.update();
        ctx.save();
        apple.draw();
        angle += 2 * Math.PI / 180;
        requestAnimationFrame(move);
    }
    move();
});
