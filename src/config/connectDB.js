const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("learnbe", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  //hàm bất đồng bộ, khi khai báo async await tức là nói hàm này cần tg để trả ra kqua.
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
