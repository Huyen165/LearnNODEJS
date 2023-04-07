import express from "express";
let router = express.Router();
//ng dẫn đường
import homeController from "../controllers/homeController";

let iniWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  //Rest api
  router.get("/hoidanit", (req, res) => {
    return res.send("hello hoi dan IT");
  });

  return app.use("/", router); //mặc định route đầu tiên
};

module.exports = iniWebRoutes;
