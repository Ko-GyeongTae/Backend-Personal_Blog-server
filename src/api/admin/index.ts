import Router from "@koa/router";
import { Test } from "./admin.controller";

const admin = new Router();

admin.get("/home", Test);

export default admin;

