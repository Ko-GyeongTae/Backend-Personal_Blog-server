import Router from "@koa/router";
import { accountTest, accountTest2, accountTest3 } from "./account/account.controller";
import admin from "./admin";
import { Test } from "./admin/admin.controller";
import { login, logout, signup } from "./auth/auth.controller";
import { activity, profile, postview, home } from "./post/post.controller";

const api = new Router();

api.use("/admin", admin.routes()); //Admin Route설정

api.get("/", Test); //API Test 
api.get("/home", home); //Home 정보 호출
api.get("/profile", profile); //Profile 정보 호출
api.get("/activity", activity); //Acitivity 정보 호출
api.get("/post", postview);

api.post("/signup", signup); //회원가입
api.post("/login", login); //로그인
api.post("/logout", logout); //로그아웃

api.get("/account", accountTest);
api.get("/account2", accountTest2);
api.get("/account3", accountTest3);

export default api;