class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':110,
          'density':0.7
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
        } else {
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          rect(-10000,0, 50, 50);
          pop();
        }
      }
    }
  ;
  