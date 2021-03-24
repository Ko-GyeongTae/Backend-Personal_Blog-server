import "reflect-metadata";
import {getConnection, Timestamp} from "typeorm";
import * as dotenv from "dotenv";
import {User} from "../../entity/User";
dotenv.config();

export const accountTest = async(ctx) => {
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    const user = new User();
    user.id = 22;
    user.name = 'taegyeong';
    user.email= 'qwerty@gmail.com';
    user.password = 'qwerty';
    user.createdAt = date;
    user.updatedAt = date;
    ctx.body = user;
    await connection.manager.save(user);
    console.log("succcess : " + user.id);
}

export const accountTest2 = async(ctx) => {
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    const user = new User();
    user.id = 23;
    user.name = '홍길동';
    user.email = 'hong@gmail.com';
    user.password = 'qewe';
    user.createdAt = date;
    user.updatedAt = date;
    ctx.body = user;
    await connection.manager.save(user);
    console.log("succcess : " + user.id);
}

export const accountTest3 = async(ctx) => {
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    ctx.body = date;
}