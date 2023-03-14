let express = require("express");
const { Users } = require("../model/db");
const users = require("../model/user");
let route = express.Router();
const { addUser, getUser } = require("../utility/user");

// post user
route.post("/adduser", async (req, res) => {
  try {
    const crtUser = await addUser(req.body);
    res.status(crtUser?.statusCode).json(crtUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
});

//get user
route.get("/getuser", async (req, res) => {
  try {
    const userInf = await getUser();
    res.status(userInf?.statusCode).json(userInf);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
});

//get user by id
route.get("/getbyid/:id", async (req, res) => {
  try {
    let userDetail = await getUser(req?.params?.id);
    res.status(userDetail?.statusCode).json(userDetail);
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "internal server error",
        error: error.message,
      });
  }
});

module.exports = route;
