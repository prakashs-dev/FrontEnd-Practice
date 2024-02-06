const express = require("express"); //express is function which gives invoked when we need
const http = require("http");
const socketIo = require("socket.io"); // socketIo is a object class
// here I am taking serverClass from socketIo Object
const ServerClass = socketIo.Server;

// 1.npm i express install
// 2.npm i socket.io
// my server right now pure server
const expressServer = express();

// I am modifying my express server to http server
const httpServer = http.createServer(expressServer);

// It's taking httpServer and converting it into socketIoCompatibleServer
const io = new ServerClass(httpServer);

// .on is equivalent to .addEventListener
io.on("connection", (socket) => {
  // so the IO is unique and it's associted with my server
  // everytime some hits connection event it serves a unique socket
  socket.on("secret message", (data) => {
    io.emit("io secret message", data);
  });
});

// which doesn't support socket io
// server.use -> it's a middleware
// express.static -> is a inbuilt fn that serves
// public folder
// public folder holds static UI files
expressServer.use(express.static("Node"));

// server.get("/sample", function getHandled(request, response) {
//   response.send("Welcome to this is a Sample Express JavaScript");
// });

// server.get("/hello", (request, response) => {
//   response.set("Content-Type", "text/html");
//   response.status(200).send("<h1>Hello Express JS Learner!</h1>");
// });

// server.post("/", (request, response) => {
//   response.send("GooD Morning Prakash");
// });

httpServer.listen(9000);
