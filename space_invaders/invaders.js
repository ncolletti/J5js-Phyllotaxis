function Invader (x,y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.hit = false;

    this.show = function (){
        fill(266,0,244);
        noStroke();
        ellipse(this.x, this.y, 15, 15);
    }
    // Unsure if I want the invader to be a triangle right now.

    // this.x1 = 30;
    // this.y1 = 75;
    // this.x2 = 58;
    // this.y2 = 30;
    // this.x3 = 86;
    // this.y3 = 75;

    // this.show = function() {
    //     fill(255,0,244);
    //     noStroke();
    //     triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    // }

    this.hits = function (ship, mouseX, mouseY) {
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.r + ship.r){
            console.log("INVADER HIT YOU!");
            return true;
        } else {
            return false;
        }
    }

}
