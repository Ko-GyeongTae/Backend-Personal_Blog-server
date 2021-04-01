import { getConnection } from "typeorm";
import { Comment } from "../../entity/Comment";

export const getComment = (async(ctx) => {
    const comments = await getConnection().createQueryBuilder()
    .select("comment")
    .from(Comment, "comment")
    .getMany();
    ctx.body = comments;
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
    comment.isRemoved = false;
    await connection.manager.save(comment);
});

export const deleteComment = (async(ctx) => {
    const req = ctx.request.body;
    console.log(req);
    const comment = await getConnection().createQueryBuilder()
    .update(Comment)
    .set({
        isRemoved: true
    })
    .where("id = :id", {id: req.id})
    .execute();
    ctx.body = req.id;
});