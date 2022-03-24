const multer = require('multer');

module.exports = multer({
    storage : multer.diskStorage({
        destination: (req, file, callback)=>{
            // errors = null
            callback(null, 'assets/images/products') 
        },
        filename: (req, file, callback)=>{
            // errors = null // set unique name foreach image
            callback(null, Date.now() + '-' + file.originalname) 
        }
    })
}).single('image')