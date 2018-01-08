let bg, ship;
let targets = [];
let invaders = [];
let targets_spawn = [];
let score = 0;

/*
Need to fix a few things:
1) Random number can generate the same number, needs to be unique in 1-9
2) Can't allow targets to collide.

Next up to do:
1) create collision mapping for ship and target. 
    a) when ship collides, mark as point. remove target. add new target. add new invader.
2) create collision mapping for ship to invader.
    a) when ship collides with invader, minus from health. remove invader. remove a target.
3) give targets animations.
4) give invaders animations? have them follow the ship?

*/
function preload() {
    bg = loadImage("assets/space.png");
    ship = loadImage("assets/ship.png");
    ship.r = 30;
}

function setup() {
    createCanvas(800, 600);
    // for (let i = 0; i < 5; i++){
    //     invaders[i] = new Invader();
    // }
    for (let i = 0; i < 5; i++){
        let invaderX = getRandomArbitrary(1,750);
        let invaderY = getRandomArbitrary(1,550);
        invaders[i] = new Invader(invaderX,invaderY);
    }

    for (let i = 0; i < 5; i++){
        let targetX = getRandomArbitrary(1,750);
        let targetY = getRandomArbitrary(1,550);
        targets[i] = new Target(targetX,targetY);
        targets[i].assignNumber();
        targets_spawn[i] = new Target(targetX,targetY);
        targets_spawn[i].assignNumber();
    }


    noCursor();
}

function draw() {
    background(255);
    image(bg, 0, 0);
    image(ship, mouseX - 25, mouseY - 25);

    for (let i = 0; i < invaders.length; i++){
        if(!invaders[i].hit){
            invaders[i].show();
        }
        if(invaders[i].hits(ship, mouseX, mouseY)){
            score -= 10;
            applyScore(score);
            invaders[i].hit = true;
        }
    }
    for (let i = 0; i < targets.length; i++){
        if(!targets[i].hit){
            targets[i].show();
        }
        if(targets[i].hits(ship, mouseX, mouseY)){
            score += 1;
            applyScore(score);
            targets[i].hit = true;
            targets_spawn[i].show();
                       
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function applyScore(score){
    let scoreElm = document.getElementById("score");
    scoreElm.textContent = score;
}