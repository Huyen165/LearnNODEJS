import express from "express";
let router = express.Router();
//ng dẫn đường

let inniWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("hello");
  });
  return app.use("/", router);
};

module.exports = inniWebRoutes;
