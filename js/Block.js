class Block{
    constructor(x, y, width, height) {
      this.Visibility = 255;
        var options = {
            restitution :0.4,
            friction :0.0,
            //isStatic:true           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();

        if(this.body.speed > 3) {
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          this.body = Bodies.rectangle(-100,-100,-100,-100);
          pop();
        }
      }
}