const path = require('path');
module.exports = (err, req, res, next) => {
    console.error(err);
    err.statusCode = err.statusCode || 500;
    switch (err.statusCode) {
        case 401:
            res.status(401)
            req.flash('authError', err.message);
            res.redirect(req.url)
            break;
        case 400:
            res.status(400)
            req.flash('validationErrors', err.errors)
            console.log(req.body);
            res.redirect(req.body.redirectTo)
            break;
        case 422:
            res.status(422)
            // resend data of inputs and errors
            req.flash('data', [err.errors, req.body])
            res.redirect(req.url)
            break;
        default:
            res.status(500)
            res.render('500')
    }
}