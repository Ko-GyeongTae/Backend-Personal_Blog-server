import crypto from "crypto";
import dotenv from "dotenv";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";
dotenv.config();

export const signup = (async(ctx) => {
    const req = ctx.request.body;
    let body, status; 
    console.log(req); 
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    const user = new User();
    if(req.name === "" || req.email === ""){
        status = 400;
        body = "Fill information";
    } else {
        user.name = req.name;
        user.email = req.email;
        user.password = req.password;
        user.createdAt = date;
        status = 200;
        body = user;
    }
    ctx.body = body;
    ctx.status = status;
    //await connection.manager.save(user);
});

export const login = (async(ctx) => {
    const req = ctx.request.body;
    console.log(req);
    ctx.body = req;
});

export const logout = (async(ctx) => {
    const req = ctx.request.body;
    console.log(req);
    ctx.body = req;
})