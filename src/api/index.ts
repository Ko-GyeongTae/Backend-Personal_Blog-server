import Router from "@koa/router";
import admin from "./admin";
import { login, logout, signup } from "./auth/auth.controller";
import { createComment, deleteComment, getComment } from "./post/post.controller";

const api = new Router();

api.use("/admin", admin.routes()); //Admin Route설정

api.get("/comment", getComment); //댓글조회
api.get("/logout", logout); //로그아웃

api.post("/signup", signup); //회원가입
api.post("/login", login); //로그인
api.post("/comment", createComment); //댓글작성

api.delete("/comment", deleteComment); //댓글삭제

export default api;