import express from "express";
import bodyParser from "body-parser"; //lấy đc tham số user sd
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

let app = express();

app.use(bodyParser.json()); //lấy dữ liệu nhập vào
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969; //lấy port
//Port == undefined => port = 6969 -> chỉ dùng khi quên khai báo port.

app.listen(port, () => {
  //chạy app
  console.log("Backend NodeJS is running on port : " + port);
});
