const db = require("../model/db");
async function addUser(users) {
  try {
    const usersInfo = await db.Users.create(users);
    console.log(usersInfo);
    return {
      success: true,
      statusCode: 200,
      message: "user created successfully",
      user: usersInfo.get(),
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: "internal server error",
      error: error.message,
    };
  }
}

async function getUser(id = null) {
  try {
    const usersDetails = await db.Users.findAll({ where: id ? { id } : {} });
    console.log(usersDetails);
    if (usersDetails.length > 0) {
      return {
        success: true,
        statusCode: 200,
        message: "got user details",
        user: usersDetails,
      };
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 404,
      message: "user not found",
      error: error.message,
    };
  }
}

module.exports = { addUser, getUser };
