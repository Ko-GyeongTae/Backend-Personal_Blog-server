import Router from "@koa/router";
import admin from "./admin";
import { login, logout, signup } from "./auth/auth.controller";
import { activity, profile, postview } from "./post/post.controller";

const api = new Router();

api.use("/admin", admin.routes());

api.get("/", );
api.get("/home", );
api.get("/profile", profile);
api.get("/activity", activity);
api.get("/post", postview);

api.post("/signup", signup);
api.post("/login", login);
api.post("/logout", logout);

export default api;