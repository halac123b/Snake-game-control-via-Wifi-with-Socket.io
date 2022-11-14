var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");
 
io.listen(5500);

function handler(req, res){
  fs.readFile(__dirname + '/index.html',
    function (err, data){
      if (err){
        res.writeHead(500);
        return res.end("Error loading index.html");
      }
      res.writeHead(200);
      res.end(data);
  });
}

io.on("connection", (socket) => {
  socket.on("direction", (direction) => {
    console.log(direction);
    socket.broadcast.emit("directionFromServer", direction);
  });
});