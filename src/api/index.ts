import Router from "@koa/router";
import { accountTest, accountTest2 } from "./account/account.controller";
import admin from "./admin";
import { login, logout, signup } from "./auth/auth.controller";
import { activity, profile, postview, home } from "./post/post.controller";

const api = new Router();

api.use("/admin", admin.routes());

api.get("/", );
api.get("/home", home);
api.get("/profile", profile);
api.get("/activity", activity);
api.get("/post", postview);

api.post("/signup", signup);
api.post("/login", login);
api.post("/logout", logout);

api.get("/account", accountTest);
api.get("/account2", accountTest2);

export default api;