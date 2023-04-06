import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));
  //phía client sẽ biết truy cập những file nào
  app.set("view engine", "ejs");
  //nodeJS sẽ biết cta dùng thư viện ejs
  app.set("views", "./src/views");
  //Để hiển thị
};

module.exports = configViewEngine;
