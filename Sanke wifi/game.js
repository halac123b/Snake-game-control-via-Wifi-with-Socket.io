const NUM_COL = 20;
const NUM_ROW = 15;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 300;

var game = function(){
  this.speed = 1000; // Speed of the snake, in milisecond
  this.snake = null;
  this.food = null;
  // Socket để điều khiển rắng bằng điệnt thoại thông qua wifi
  this.socket = null;
  // Canvas and context cho game
  this.canvas = null;
  this.context = null;

  var self = this;
  this.init = function(){
    // Init game canvas
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.canvas.width = GAME_WIDTH;
    this.canvas.height = GAME_HEIGHT;

    // Init snake
    this.snake = new snake(this);
    this.snake.init();

    // Init food
    this.food = new food(this);
    this.food.init();

    // Init socket
    this.socket = io();
    this.listenServer();

    this.loop();

    this.listenEvent();
  }

  // Main loop của game
  this.loop = function(){
    self.clearScreen();
    self.food.draw();
    self.snake.go();
    self.snake.draw();
    
    setTimeout(self.loop, self.speed); // Delay per loop
  }
  // Clear screen để vẽ lại snake mỗi frame
  this.clearScreen = function(){
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }

  // Listen key đc nhấn để move snake
  this.listenEvent = function(){
    document.addEventListener("keydown", (event) => {
      switch(event.key){
        case "ArrowDown":
          if(self.snake.direction != "up")
            self.snake.direction = "down";
          break;
        case "ArrowRight":
          if(self.snake.direction != "left")
            self.snake.direction = "right";
          break;
        case "ArrowLeft":
          if(self.snake.direction != "right")
            self.snake.direction = "left";
          break;
        case "ArrowUp":
          if(self.snake.direction != "down")
            self.snake.direction = "up";
          break;
      }
    });
  }
  
  this.listenServer = function(){
    this.socket.on("directionFromServer", (direction) => {
      self.snake.direction = direction;
    });
  }
  // Init game again when game over
  this.gameOver = function(){
    this.snake = new this.snake();
    this.snake.init();
  }
}

var g = new game();
g.init();