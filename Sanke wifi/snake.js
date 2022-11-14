// Object 'snake' of the game
var snake = function(game){
  this.game = game;
  this.dots = []; // Snake đc tạo từ array các dot
  this.direction = "right";

  this.init = function(){
    this.createDots();
  }

  // Init snake lúc đầu game gồm 3 dot
  this.createDots = function(){
    var dot1 = new dot(this.game, 0, 0);
    dot1.init();
    this.dots.push(dot1);

    var dot2 = new dot(this.game, 0, 1);
    dot2.init();
    this.dots.push(dot2);

    var dot3 = new dot(this.game, 0, 2);
    dot3.init();
    this.dots.push(dot3);
  }
  // Check if the snake can turn right
  this.canMoveRight = function(){
    let headDot = this.dots[this.dots.length - 1];
    return headDot.col < NUM_COL - 1;
  }
  // The snake turn right
  this.moveRight = function(){
    if(this.canMoveRight()){
      let headDot = this.dots[this.dots.length - 1];
      var newDot = new dot(this.game, headDot.row, headDot.col + 1);
      this.dots.push(newDot); // Thêm dot mới vào đầu
      this.dots.shift(); // Xóa dot cuối đi
      this.direction = "right";
    }
  }

  this.canMoveLeft = function(){
    let headDot = this.dots[this.dots.length - 1];
    return headDot.col > 0;
  }
  this.moveLeft = function(){
    if(this.canMoveLeft()){
      let headDot = this.dots[this.dots.length - 1];
      var newDot = new dot(this.game, headDot.row, headDot.col - 1);
      this.dots.push(newDot); // Thêm dot mới vào đầu
      this.dots.shift(); // Xóa dot cuối đi
      this.direction = "left";
    }
  }

  this.canMoveUp = function(){
    let headDot = this.dots[this.dots.length - 1];
    return headDot.row > 0;
  }
  this.moveUp = function(){
    if(this.canMoveUp()){
      let headDot = this.dots[this.dots.length - 1];
      var newDot = new dot(this.game, headDot.row - 1, headDot.col);
      this.dots.push(newDot); // Thêm dot mới vào đầu
      this.dots.shift(); // Xóa dot cuối đi
      this.direction = "up";
    }
  }
  this.canMoveDown = function(){
    let headDot = this.dots[this.dots.length - 1];
    return headDot.row < NUM_ROW - 1;
  }
  this.moveDown = function(){
    if(this.canMoveDown()){
      let headDot = this.dots[this.dots.length - 1];
      var newDot = new dot(this.game, headDot.row + 1, headDot.col);
      this.dots.push(newDot); // Thêm dot mới vào đầu
      this.dots.shift(); // Xóa dot cuối đi
      this.direction = "down";
    }
  }

  this.go = function(){
    switch(this.direction){
      case "right":
        this.moveRight();
        break;
      case "left":
        this.moveLeft();
        break;
      case "up":
        this.moveUp();
        break;
      case "down":
        this.moveDown();
        break;
    }
  }

  this.draw = function(){
    this.dots.forEach( function(dot){
      dot.draw();
    });
  }
}