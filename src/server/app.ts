import express = require('express');
//import compression from "compression";
import { config } from "./config";
// Create a new express application instance 12233
const app: express.Application = express();


app.use('/static', express.static(config.staticFilePath))
// app.use(compression());
app.get('/hello', (req, res) => {
    res.send('Hello World!!~~~~~~!');
  });

app.get('/json', (req, res) =>
{
    res.json({name: 'json'});
});

app.listen(3000, ()=> {
  console.log('Example server listening on port 3000!');
});

import { UserController } from "./controller/userController";

export const getRouter = () => {
    const userController = new UserController(); // 实例化controller
    const router = express.Router();
    router.get("/user", userController.getUser); // 配置路由执行的方法，当访问/user路径时，执行getUser方法
    return router;
};

app.use("/api", getRouter()); // 挂载路