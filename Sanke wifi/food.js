var food = function(game){
  this.game = game;
  this.col = 0;
  this.row = 0;

  this.init = function(){
    do{
      var col = Math.round(Math.random() * (NUM_COL - 1));
      var row = Math.round(Math.random() * (NUM_ROW - 1));
    }
    while (!this.validPos())
    this.row = row;
    this.col = col;
  }

  this.validPos = function(){
    var valid = true;
    this.game.snake.dots.forEach( (dot) => {
      if (dot.row = this.row && dot.col == this.col){
        valid = false;
      }
    });
    return valid;
  }

  this.draw = function(){
    this.game.context.fillStyle = "#ff4122";
    this.game.context.fillRect(this.col * DOT_SIZE + 1, this.row * DOT_SIZE + 1, 
                              DOT_SIZE - 2, DOT_SIZE - 2);
  }
}