require('./db')
const express = require('express');
const path = require('path');
const authRouter = require('./routes/user.router')
const homeRouter = require('./routes/home.router')
const productRouter = require('./routes/product.router')
const cartRouter = require('./routes/cart.router')
const orderRouter = require('./routes/order.router')
const addressRouter = require('./routes/address.router')
const adminRouter = require('./routes/admin.router')
const aboutRouter = require('./routes/about.router')
const documentationRouter = require('./routes/documentation.router')
const flash = require('connect-flash')
const errorHandler = require('./middleware/errorsHandler')


const app = express()
const port = process.env.PORT || 3000;

//Create a session middleware 
const session = require('express-session');
const SessionStore = require('connect-mongodb-session')(session);

//create collection in db for saving sessions
const STORE = new SessionStore({
  uri:'mongodb+srv://badr:01068118614@cluster0.qylph.mongodb.net/online-shop?retryWrites=true&w=majority',
  collection:'session'
})

//making flash function in request
app.use(flash())

//define assets folder as static file for requests with absolute path.
app.use(express.static(path.join(__dirname,'assets')));

// It parses incoming requests with urlencoded payloads.
app.use(express.urlencoded({ extended: true }));

//making session object in the request 
app.use(session({
  secret: 'myScret',
  saveUninitialized: false, 
  resave: true,
  cookie:{
    maxAge: 10*60*60*100
  },
  store: STORE,
}))


//a simple templating language which is used to generate HTML markup with plain JavaScript.
app.set('view engine','ejs');

app.use('/', homeRouter)
app.use('/', authRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/address', addressRouter)
app.use('/order', orderRouter)
app.use('/admin', adminRouter)
app.get('/about', aboutRouter)
app.get('/documentation', documentationRouter)
app.use((req, res)=>res.render('404'))
//////////////////////////////////////////////////////////////////////////// Error handler /////////
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})