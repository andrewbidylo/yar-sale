// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieSession = require('cookie-session');
const path = require('path');

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect(
  console.log('db connected!')
);

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
  })
);

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

// renders the index.html file in the public folder
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
const loginRoutes = require("./routes/login");
const itemsRoutes = require("./routes/items");
const favouritesRoutes = require("./routes/favourites");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/users", usersRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/items", itemsRoutes(db));
app.use("/favourites", favouritesRoutes(db));




// Note: mount other resources here, using the same pattern above

//const DataHelpers = require("./lib/data-helpers.js")(db);
//const tweetsRoutes = require("./routes/tweets")(DataHelpers);
//app.use("/tweets", tweetsRoutes);

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// app.get("/", (req, res) => {
//   res.send("index");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
