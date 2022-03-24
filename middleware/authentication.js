const auth = (req, res, next)=>{
    req.session.userId ? next() : res.redirect('/login');
}

const notAuth = (req, res, next)=>{
    ! req.session.userId ? next() : res.redirect('/');
}

const admin = (req, res, next)=>{
    req.session.isAdmin ? next() : res.redirect('/');
}

module.exports = {auth, notAuth, admin}