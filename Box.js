class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
      rectMode(CENTER);
      var ra = Math.round(random(1,255));
      fill(ra-23,ra-45,ra)
     // fill(123,175,223);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
  }
};
