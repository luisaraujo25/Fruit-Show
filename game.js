window.addEventListener('load', function(){

    const game = document.getElementById("game");
    
    const WIDTH = game.width = 500;
    const HEIGHT = game.height = 500;
    const NO_FRUITS = 3;
    const MAX_FRUIT = 5;
    const SPEED = 2;
    const FPS = 1000 / 25;

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

    
    let counter = 0;
    const RESP = 10000;
    let current = []
    let y = 0;

    function clickHandler(event){
        
        const x = event.clientX;
        const y = event.clientY;
        console.log(x);
        console.log(y);

        for(let i = 0; i < current.length; i++){
            const objX = current[i].x;
            const objY = current[i].y;
            const width = current[i].width;
            const height = current[i].height;
            if(x >= objX && x <= (objX + width) && y >= objY && y <= (objY + height)){
                current.pop();
                console.log("oiii");
            }
        }
    };
    
    function start(){
        setInterval(function(){

            drawBackground();
            if(counter < MAX_FRUIT){
                const obj = new Apple(0,y);
                y += 60;
                current.push(obj);
                counter += 1;
            }
            
            game.addEventListener("click", clickHandler);
            // Draw all current fruits in action
            for(let i = 0; i < current.length; i++){
                current[i].update();
                current[i].draw();
            }
        }
        ,FPS);
    }

    start();
});
