window.addEventListener('load', function(){
    
    const div = document.getElementById("canvas");
    const game = document.createElement("canvas");
    div.appendChild(game);

    const SCREEN_WIDTH = game.width = 500;
    const SCREEN_HEIGHT = game.height = 500;
    const FRUIT_WIDTH = 80;
    const FRUIT_HEIGHT = 80;
    const MAX_FRUIT = 6;
    const MAX_OUT = 5;
    // 25 frames -> 1s
    const SPAN_MAX = 25;
    const SPAN_MIN = 5;
    const SPEED_MAX = 8;
    const SPEED_MIN = 4;

    // delay -> milliseconds .. 1000 miliseconds / 25 <- frame
    // 40 milliseconds (0,040s) .. new fruit every 300 milliseconds (0,3s) to 3000 milliseconds (3s)
    const FPS = 1000 / 25;
    
    const ctx = game.getContext("2d");
    
    const background = new Image();
    background.src = "sky_background.png";
    
    const appleImg = new Image();
    appleImg.src = "apple.png";
    
    const peachImg = new Image();
    peachImg.src = "peach.png";
    
    const orangeImg = new Image();
    orangeImg.src = "orange.png";
    
    const allFruits = [appleImg, peachImg, orangeImg]
    
    // count how many fruits are on screen
    let counter = 0;
    let current = [];
    let generateTime = 0;
    let generate = true;
    let outOfScreen = 0;
    let interval;
    
    class Fruit{
        constructor(x, y, speed){
            this.x = x;
            this.y = y;
            this.speed = speed;
            const index = Math.floor(Math.random() * allFruits.length);
            this.img = allFruits[index];
        }
        update(){
            this.x += this.speed;
        }
        draw(){
            ctx.drawImage(this.img, this.x, this.y, FRUIT_WIDTH, FRUIT_HEIGHT);
        }
    }

    function drawBackground(){
        ctx.drawImage(background, 0, 0);
    }

    function clickHandler(event){
        
        const x = event.clientX;
        const y = event.clientY;
        
        // reverse loop so if click happens then only the upper fruit is removed
        for(let i = current.length - 1; i >= 0; i--){
            const objX = current[i].x;
            const objY = current[i].y;
            if(x >= objX && x <= (objX + FRUIT_WIDTH) && y >= objY && y <= (objY + FRUIT_HEIGHT)){
                current = removeElementX(i, current);
                counter--;
                //break in case two fruits intersect positions
                break;
            }
        }
    }

    function gameOver(){
        game.style.visibility = 'hidden';
        div.removeChild(game);
        clearInterval(interval);
        div.innerText = "OVER";
    }

    function checkStatus(){
        for(let i = 0; i < current.length; i++){
            const objX = current[i].x;
            if(objX > SCREEN_WIDTH){
                current.shift();
                console.log("um")
                outOfScreen++;
            }
        }
        if(outOfScreen == MAX_OUT){
            gameOver();
        }
        
    }
    
    function start(){
        interval = setInterval(function(){
            drawBackground();
            let span = Math.floor(SPAN_MIN + Math.random() * (SPAN_MAX + 1));
            if(generateTime < span){
                generateTime++;
            }
            else{
                generateTime = 0;
                generate = true;
            }
            if(counter < MAX_FRUIT && generate){
                const y = Math.floor(Math.random() * (SCREEN_HEIGHT - FRUIT_HEIGHT));
                const speed = Math.floor(SPEED_MIN + Math.random() * (SPEED_MAX + 1));
                const obj = new Fruit(-FRUIT_WIDTH, y, speed);
                current.push(obj);
                counter += 1;
                generate = false;
            }
            checkStatus();
            
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
