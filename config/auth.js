module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            req.flash("error_msg", "Plase log in to view thir resource");
            res.redirect("/users/login");
        }
    }
}