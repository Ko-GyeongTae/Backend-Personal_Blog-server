import crypto from "crypto";
import dotenv from "dotenv";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";
dotenv.config();

export const signup = (async(ctx) => {
    const req = ctx.request.body
    console.log(req); 
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    const user = new User();
    if(req.password !== req.confirm){
        throw Error("Password is not same");
    }
    user.name = req.name;
    user.email = req.email;
    user.password = req.password;
    user.createdAt = date;
    ctx.body = req;
    await connection.manager.save(user);
});

export const login = (async(ctx) => {
    console.log(ctx.request.body);
    ctx.body = "login";
});

export const logout = (async(ctx) => {
    console.log(ctx.request.body);
    ctx.body = "logout";
})