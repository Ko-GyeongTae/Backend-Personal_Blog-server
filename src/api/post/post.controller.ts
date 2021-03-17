export const profile = (async(ctx) => {
    ctx.body = "profile";
});

export const activity = (async(ctx) => {
    ctx.body = "activity";
});

export const postview = (async(ctx) => {
    const { id } = ctx.request.query;
    ctx.body = id;
});