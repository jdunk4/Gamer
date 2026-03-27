const express = require("express");
const { WebSocketServer } = require("ws");
const { EditableNetworkedDOM } = require("@mml-io/networked-dom-server");
const fs = require("fs");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Load the MML document
const mmlDocument = new EditableNetworkedDOM(
  "http://localhost/arcade.html",
  (htmlPath) => fs.readFileSync("./arcade.html", "utf8")
);

// Handle WebSocket connections
wss.on("connection", (ws) => {
  mmlDocument.addWebSocket(ws);
  ws.on("close", () => {
    mmlDocument.removeWebSocket(ws);
  });
});

// Health check endpoint
app.get("/", (req, res) => {
  res.send("MML Arcade Server is running!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`MML server running on port ${PORT}`);
});