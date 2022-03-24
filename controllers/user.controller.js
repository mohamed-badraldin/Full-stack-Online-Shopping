const User = require('../models/user.model')
const CustomError = require('../helpers/customEerror')

const getSignup = async (req, res, next) => {
    res.render('signup', {
        authError: req.flash('authError')[0],
        data: req.flash('data'),
        isAdmin: req.session.isAdmin,
        isAuth: req.session.userId
    })
};

const postSignup = async (req, res, next) => {
    try {
        const createUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        const emailExist = !! await User.findOne({ email: req.body.email })
        if (emailExist) throw new CustomError('This Email already exist',401)

        const user = await createUser.save();
        res.redirect('/login')
    } catch (err) {
        next(err)
    }
};

const getLogin = async (req, res, next) => {
    res.render('login',{
        authError: req.flash('authError')[0],
        data: req.flash('data'),
        isAdmin: req.session.isAdmin,
        isAuth: req.session.userId
    })
};

const postLogin = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new CustomError('Wrong username or password',401)
        
        const isMatch = await user.checkPassword(req.body.password);
        if (!isMatch) throw new CustomError('Wrong username or password',401)
        
        req.session.userId = user._id;
        req.session.isAdmin = user.isAdmin;
        res.redirect('/')
    } catch (err) {
        next(err)
    }
};

const logout = async(req,res,next)=>{
    req.session.destroy(_=> res.redirect('/'));
}


const getProfile = [
    async(req,res,next)=>{
        res.send()
    }    
]

module.exports = { getSignup, getLogin, postSignup, postLogin, getProfile, logout};