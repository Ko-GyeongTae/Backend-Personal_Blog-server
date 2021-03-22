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
dotenv.config();

import api from "./api";
import { User } from "./entity/User";

const app = new Koa();
const router = new Router();

app.use(helmet());
app.use(cors());
app.use(logger());
app.use(koaBody());

app.use(router.routes()).use(router.allowedMethods());

router.use('/api', api.routes());

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: "test",
    synchronize: true,
    entities: [
        "/src/entity/*.{js,ts}"
    ]
}).then(async connection => {
    console.log("Account Controller connect to MySQL successfully!");
    console.log("succcess");
}).catch(error => console.log(error));

let serverCallback = app.callback();
let httpServer = http.createServer(serverCallback);

httpServer.listen(4000, () => { console.log("success 4000")});