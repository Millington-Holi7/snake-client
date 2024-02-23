const { connect } = require('./client'); // to extract the connect function from client.js
const { setupInput } = require('./input'); // to extract the setupInput function from input.js

console.log("Connecting ...");

// Store the connection object returned by connect() in a variable named conn
const conn = connect();

// Pass the connection object to setupInput so it can use it to send data to the server
setupInput(conn);


