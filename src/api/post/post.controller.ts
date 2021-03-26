import { getConnection } from "typeorm";
import { Comment } from "../../entity/Comment";

export const getComment = (async(ctx) => {
    const req = ctx.request.body;
    console.log(req);
    ctx.body = req;
});

export const createComment = (async(ctx) => {
    const req = ctx.request.body;
    console.log(req);
    ctx.body = req;
    const connection = await getConnection();
    const TimeStamp = Date.now();
    const date = new Date(TimeStamp);
    const comment = new Comment();

    comment.writer = req.writer;
    comment.context = req.context;
    comment.createdAt = date;
    await connection.manager.save(comment);
});

export const deleteComment = (async(ctx) => {
    const req = ctx.request.body;
    console.log(req);
    ctx.body = req;
});