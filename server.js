const express = require("express");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Add API routes
app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
