const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://badr:01068118614@cluster0.qylph.mongodb.net/online-shop?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to mongo successfully')
})
.catch((err)=>{
    console.error(err);
    process.exit(1);
})