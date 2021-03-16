import Router from "koa-router";
import admin from "./admin";

const api = new Router();

api.use("/admin", admin.routes());

api.get("/", );
api.get("/home", );
api.get("/profile", );
api.get("/activity", );
api.get("/post/:id", );

api.post("/signup",);
api.post("/login",);
api.post("/logout",);

export default api;