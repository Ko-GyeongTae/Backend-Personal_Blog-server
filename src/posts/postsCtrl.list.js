exports.getHome = async(ctx, next) => {
    ctx.body = "Home";
};

exports.getProfile = async(ctx, next) => {
    ctx.body = "Profile";
};

exports.getActivity = async(ctx, next) => {
    ctx.body = "Activity";
}