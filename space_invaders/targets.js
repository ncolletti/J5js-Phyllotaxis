function Target (x,y) {
    let one = loadImage("assets/one.png");
    let two = loadImage("assets/two.png");
    let three = loadImage("assets/three.png");
    let four = loadImage("assets/four.png");
    let five = loadImage("assets/five.png");
    let six = loadImage("assets/six.png");
    let seven = loadImage("assets/seven.png");
    let eight = loadImage("assets/eight.png");
    let nine = loadImage("assets/nine.png");
    
    this.x = x;
    this.y = y;
    this.r = 25;
    this.image = 0;
    this.hit = false;

    this.show = function() {
        fill(50, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
        image(this.image, this.x - 25, this.y - 25);
    }

    this.assignNumber = function() {
        let numVal = getRandomArbitrary(1,9);
        numVal = Math.round(numVal);
        switch(true){
            case numVal === 1:
            this.image = one;
            break;
            case numVal === 2:
            this.image = two;
            break;
            case numVal === 3:
            this.image = three;
            break;
            case numVal === 4:
            this.image = four;
            break;
            case numVal === 5:
            this.image = five;
            break;
            case numVal === 6:
            this.image = six;
            break;
            case numVal === 7:
            this.image = seven;
            break;
            case numVal === 8:
            this.image = eight;
            break;
            case numVal === 9:
            this.image = nine;
            break;
            default:
            console.log("assignNumber error.");
        }
    }

    this.hits = function (ship, mouseX,mouseY) {
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.r + ship.r){
            console.log("WELL DONE!");
            return true;
        } else {
            return false;
        }
    }


}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}