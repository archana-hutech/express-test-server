const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let db = require("./model/db");
const userroutes = require("./controller/user");
require("dotenv").config();

const port = process?.env?.port || 3001;

app.use(bodyParser.json());

db.sequelize
  .authenticate()
  .then(() => {
    console.error(
      `express server connected to "${
        process?.env?.SERVERHOST || "NA"
      }" database "${process?.env?.DBNAME || "NA"}"`
    );

    db.sequelize.sync();
  })
  .catch((err) => {
    console.error(
      `ERROR - Unable to connect to the database: "${process.env.DB_NAME}"`,
      err
    );
  });

app.get("/", (req, res) => {
  res.send("welcome to localhost");
});

// app.get('/user', (req, res) => {
//     res.send("welcome to user");
// });

// app.get("/user/q", function (req, res) {
//   res.status(200).json({ userid: req.query.userid });
// });

// app.get("/user/:userId", (req, res) => {
//   res.send(req.params);
// });

// app.get("/company/:compName/emp/:empId", (req, res) => {
//   res.send(req.params);
// });

// app.listen(3001, () => {
//   console.log("listening to port 3001");
// });

app.use("/user", userroutes);

app.listen(port, (err) => {
  if (!err) {
    console.log("server running at port 3001");
  }
});
