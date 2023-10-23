const express = require('express');
const { fileURLToPath } = require('url');
const { dirname, join } = require('path');
const app = express();
const port = 1819;
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});
const startServer = () => {
  app.listen(port, () => {
    console.log("Server started on http://localhost:" + port);
  });
};
console.log("Starting server...");
startServer();
