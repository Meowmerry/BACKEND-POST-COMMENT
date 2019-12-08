const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postService = require("./services/post");
const commentService = require("./services/comment");
const cors = require("cors");

const db = require("./models");

app.use(cors());

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: false }).then(() => {
  postService(app, db);
  commentService(app, db);

  app.listen(8080, () => {
    console.log("Server is reunning on port 8080");
  });
});
