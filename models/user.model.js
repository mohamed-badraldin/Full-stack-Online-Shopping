const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:false
    },
    email: {
        type: String,
        required: true,
    },
    password: String,
    isAdmin:{
        type:Boolean,
        default: false
    }
})

const saltRounds = 13;


///////////////////////////////////////////////////// Hashing password befor saving //////////////

userSchema.pre('save', async function () {
    const currentUser = this;
    if (currentUser.isModified("password")) {
        const salt = await bcrypt.genSalt(saltRounds);
        currentUser.password = await bcrypt.hash(currentUser.password, salt);
    }
})

////////////////////////////////////////////////////////////////////// Check Password ////////////
userSchema.methods.checkPassword = function (plainPassword) {
    const currentDocument = this;
    return bcrypt.compare(plainPassword, currentDocument.password);
}


const User = mongoose.model('user', userSchema);
module.exports = User

