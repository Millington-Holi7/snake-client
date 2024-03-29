const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: CAM");
    setTimeout(() => {
      conn.write("Say: Let's get those dots!!");
    }, 4000);
    setTimeout(() => {
      conn.write("Say: Yahhh Buddy!!");
    }, 12000);

    setTimeout(() => {
      conn.write("Say: Yahhh Buddy!!");
    }, 20000);

  });

  //manually moved the snake 
  // conn.on("connect", () => {
  //   setTimeout(() => {
  //   conn.write('Move: up');
  //   }, 2000)
  // });

  conn.on("data", (data) => {
    console.log("server says: ", data);
  });

  conn.setEncoding("utf8");

  return conn;
};


module.exports = { connect }