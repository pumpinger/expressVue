import express = require('express');
//import compression from "compression";
import { config } from "./config";
// Create a new express application instance 12233
const app: express.Application = express();


const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
app.use(myLogger)


app.use('/static', express.static(config.staticFilePath))
// app.use(compression());
app.get('/hello', (req, res) => {
    res.send('Hello World!');
  });

app.get('/json', (req, res) =>
{
    res.json({name: 'json'});
});

let port = 3000;
const startServer = (port) => {
    const server = app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });

    server.on('error', (error:ErrnoException) => {
        if (error.code === 'EADDRINUSE') {
            console.log(`Port ${port} is busy, trying with port ${++port}`);
            startServer(port);
        } else {
            // handle other types of errors
        }
    });
}
startServer(port);

import { UserController } from "./controller/userController";
import ErrnoException = NodeJS.ErrnoException;

export const getRouter = () => {
    const userController = new UserController(); // 实例化controller
    const router = express.Router();
    router.get("/user", userController.getUser); // 配置路由执行的方法，当访问/user路径时，执行getUser方法
    return router;
};

app.use("/api", getRouter()); // 挂载路