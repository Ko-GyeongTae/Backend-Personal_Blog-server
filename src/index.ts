import Koa from "koa";
import Router from "@koa/router";
import logger from "koa-logger";
import koaBody from "koa-bodyparser";
import http from "http";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as dotenv from "dotenv";
dotenv.config(); //환경변수 제거

import api from "./api";

const app = new Koa();
const router = new Router();

app.use(helmet()); 
app.use(cors());
app.use(logger());
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

router.use('/api', api.routes());

createConnection({ //MySQL 서버 연결
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "test",
    synchronize: true,
    entities: [
        __dirname + "/entity/*.{js,ts}" //Entity 경로 설정
    ]
}).then(async connection => {
    console.log("MySQL Server running on port 3306!");
    console.log("Connect to MySQL successfully!");
}).catch(error => console.log(error));

let serverCallback = app.callback();
let httpServer = http.createServer(serverCallback);

httpServer.listen(4000, () => { console.log("Server is running on port 4000!")});