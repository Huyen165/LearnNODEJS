import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log("____________________________________");
    console.log(data);
    console.log("--------------------------------------");

    return res.render("homePage", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
//Trong xử lý bất đồng bộ, lấy dữ liệu cần nhiều tg nên sử dụng async await

module.exports = {
  getHomePage: getHomePage,
};
