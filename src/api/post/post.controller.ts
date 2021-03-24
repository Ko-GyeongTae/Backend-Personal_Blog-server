import { getConnection } from "typeorm";
import { Comment } from "../../entity/Comment";

export const getComment = (async(ctx) => {
    

});

export const createComment = (async(ctx) => {
    const request = ctx.request.body;
    ctx.body = request;
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    const comment = new Comment();

    comment.id = request.id;
    comment.writer = request.writer;
    comment.context = request.context;
    comment.createdAt = date;
    await connection.manager.save(comment);
    console.log("succcess : " + comment.id);
})