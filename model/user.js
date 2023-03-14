const db = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        type: db.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // defaultValue: db.DataTypes.UUIDV4
      },
      name: {
        type: db.DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "name should not be null",
          },
          notEmpty: {
            msg: "name is required",
          },
          checkLength(value) {
            if (value.length < 7) {
              throw new Error("name Length must be 7 or greater!");
            }
          },
        },

        // unique: true,
        // get() {
        //   const rawValue = this.getDataValue("name");
        //   return rawValue ? rawValue.toUpperCase() : null;
        // },
        // set(value) {
        //   this.setDataValue("name", value + " hutech solution");
        // },
      },
      email: {
        type: db.DataTypes.STRING,
        allowNull: false,
        // unique: true,
        validate: {
          notNull: {
            msg: "email should not be null",
          },
          notEmpty: {
            msg: "email is required",
          },
          isEmail: {
            msg: "Please use the correct email format:user@example.com",
          },
        },
      },
      phone: { type: db.DataTypes.STRING, allowNull: false },
      password: {
        type: db.DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          len: {
            args: [8, 20],
            msg: "The Pssword must be 8 to 20 characters long",
          },
        },
      },
    },
    { tableName: "users" }
  );

  return Users;
};
