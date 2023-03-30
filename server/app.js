// to create our express app
const express = require("express");
// package to handle file paths
const path = require("path");
// our custom routes
const appRoutes = require("./routes");

// initialize the express app
const app = express();

// set the port (you could use any but usually it is 5000)
const port = process.env.PORT || 5000;

// next two lines tells parse requests of content-type
// which are application/x-www-form-urlencoded and json respectively
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// to make build folder static
app.use(express.static("build"));

// appRoutes are the routes your backend will use
// by convention we use /api before any backend routes
app.use("/api", appRoutes);

// ...

// If user hits the / route we will be
// shown our react frontend app as we are
// returning the content of build folder
app.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Launch app to listen to specified port
app.listen(port, () => {
  console.log(`Your server is running on Port: ${port}`);
});
