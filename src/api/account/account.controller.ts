import "reflect-metadata";
import {getConnection} from "typeorm";
import * as dotenv from "dotenv";
import {User} from "../../entity/User";
dotenv.config();

export const accountTest = async(ctx) => {
    const connection = getConnection();
    console.log(ctx.request.body);
    const user = new User();
    user.id = '22';
    user.firstName = 'ko';
    user.lastName = 'taegyeong';
    user.age = 18;
    await connection.manager.save(user);
    console.log("succcess : " + user.id);
}

export const accountTest2 = async(ctx) => {
    const connection = getConnection();
    console.log(ctx.request.body);
    const user = new User();
    user.id = '23';
    user.firstName = '홍';
    user.lastName = '길동';
    user.age = 19;
    await connection.manager.save(user);
    console.log("succcess : " + user.id);
}