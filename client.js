const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: CAM");

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