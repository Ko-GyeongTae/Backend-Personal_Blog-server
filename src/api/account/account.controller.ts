import "reflect-metadata";
import {getConnection, Timestamp} from "typeorm";
import * as dotenv from "dotenv";
import {User} from "../../entity/User";
import { Post } from "../../entity/Post";
dotenv.config();

export const accountTest = async(ctx) => {
    const connection = await getConnection();
    //console.log(ctx.request.body);
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
    //console.log(ctx.request.body);
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
    const post = new Post();
    post.id = 1;
    post.title = '테스트';
    post.context = '첫 DB연결 테스트';
    post.writer = '테스터';
    post.createdAt = date;
    post.updatedAt = date;
    ctx.body = post;
    await connection.manager.save(post);
    console.log("success : " + post.id);
}