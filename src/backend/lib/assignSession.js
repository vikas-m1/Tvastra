exports.setSession = (req,user) => {
    req.session.name = user.name;
    req.session.email = user.email;
    req.session.userId = user._id;
    console.log(req.session);
}