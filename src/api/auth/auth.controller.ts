export const signup = (async(ctx) => {
    console.log(ctx.request); 
    const { id } = ctx.request.body;
    console.log(id);
    ctx.body = "signup";
});

export const login = (async(ctx) => {
    console.log(ctx.request.body);
    ctx.body = "login";
});

export const logout = (async(ctx) => {
    console.log(ctx.request.body);
    ctx.body = "logout";
})