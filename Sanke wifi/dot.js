const DOT_SIZE = 20; // Size của mỗi dot
// Object 'dot' tạo thành 'snake'
var dot = function(game, row, col){
  this.game = game;
  // Tọa độ của mỗi dot
  this.col = col;
  this.row = row;

  this.init = function(){

  }

  this.draw = function(){
    this.game.context.fillStyle = "#88DC3D";
    this.game.context.fillRect(col * DOT_SIZE + 1, row * DOT_SIZE + 1, 
                              DOT_SIZE - 2, DOT_SIZE - 2);
  }
}
