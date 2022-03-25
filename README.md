March 2022

Design and Implementation of E-Commerce Site for Online Shopping

Mohamed Badraldin Information Technology Institute

LEARNING OUTCOMES Hands-on

*   Build a full-stack e-commerce website.
*   UI UX design.
*   Responsive web design.
*   Authentication and Authorization processes.
*   Three tier architecture.
*   Node Modular Architecture.
*   Error handler middleware.
*   Naming conventions.
*   Best practices for writing documentation
*   Deploying and hosting

NPM PACKAGES

*   express
*   mongodb
*   mongoose
*   ejs
*   bcrypt
*   express-validator
*   multer
*   express-session
*   connect-mongodb-session
*   connect-flash

INTRODUCTION

*   An online store is a virtual store on the Internet where customers can browse the catalog and select products of interest.
*   The selected items may be collected in a shopping cart.
*   The items in the shopping cart will be presented as an order.
*   Usually, the customer will be asked to Fill in a billing address.
*   You can look at each product separately through its own page.
*   You can choose a specific category while searching for your own product.
*   There is a part on the site for the administrators, where they can control the status of the orders, as well as search for orders through a specific category, and they can also add a new product to the site.

Web Pages

*   HOME PAGE
*   PRODUCT PAGE
*   CHART VIEW FOR USER
*   ORDER VIEW FOR USER
*   ADDRESS PAGE
*   DOCUMENTATION PAGE
*   ABOUT PAGE
*   ADMIN PAGE
*   ADD NEW PRODUCT
*   EDIT ORDERS PAGE
*   REGISTER PAGE
*   LOGIN
*   NOT FOUND PAGE
*   SERVER ERROR PAGE

Description

*   Any member can register and view available products, documentation and about pages
*   Only registered member can purchase multiple products regardless of quantity.
*   There are three roles available: Visitor, User and Admin.
    *   Visitor can view available products.
    *   User can view and purchase products.
    *   An Admin has some extra privilege including all privilege of visitor and user.
        *   Admin can add products.
        *   Admin can add track and edit orders.

Master page details

OnlineShopping Master Page (Similar MasterPage for Visitor, User and Admin)

Project Detail

Three Tier Architechture

![](/images/documentation/3-tier.jpg)

SYSTEM REQUREMENTS USE-CASE DIAGRAM: ![](/images/documentation/usecase digram.png)

ONLINE SHOPPING APPLICATION:

*   Anyone can view the Online Shopping portal and available products, but every user must log in by his/her email and password in order to purchase or order products.
*   Unregistered members can register by navigating to the registration page.
*   Only Admin will have access to modify roles, by default developer can only be an Admin.
*   Once the user registers the site, his default role will be User.

HOME PAGE:

*   The Home Screen will consist of screen were one can browse through the products which we have on our website.
*   you can add product to cart foreach product.
*   you can show product page foreach product.

![](/images/documentation/home.png)

PRODUCT PAGE:

*   This page consists of product details.
*   This page appears same for both visitors and users.
*   you can add product to cart from add to cart button.
*   you can back to home.

![](/images/documentation/product.png)

CART PAGE:

*   This page consists of product details.
*   count of each product.
*   you can update count of each product.
*   you can delete each product from cart.
*   button to make your order.
*   summary: count of products, total price.

![](/images/documentation/cart.png)

ADDRESS PAGE:

*   This page consists of input field to set order's address

![](/images/documentation/address.png)

ORDERS PAGE:

*   This page consists of details of orders foreach user
*   details: name, description, quantity, total of each product, address, date total of all order
*   defualt status of any order is pendding

![](/images/documentation/orders.png)

DASHBOARD HOME PAGE:

*   This page consists just picture reprsent dummy information
*   Sidebar to navigate between dashboard pages with animation and buttons to open and close it
*   Sidebar: dashboard home page, add product page, manage orders page and back to home button

![](/images/documentation/dashboard.png)

ADD PRODUCT PAGE:

*   This page consists of add new product form
*   There ara validation errors foreach field
*   There are alert appear after adding a product successfly

![](/images/documentation/add-product.png)

MANAGE ORDERS PAGE:

*   This page consists of all orders with details
*   admin can update the status of order
*   admin can get orders with specific status

![](/images/documentation/manage.png)

SIGNUP PAGE:

*   This page consists of form to signup
*   button to redirect login page if you have an account and you can go to home from the logo
*   validation errers: if the email already exist, valid email, username must be more than 5 characters and password must identical the confirmation password

![](/images/documentation/signup.png)

LOGIN PAGE:

*   This page consists of form to login
*   validation errers: if the email already not exist and if the email and password not correct

![](/images/documentation/login.png)

Data Management

Data Description This database consists of

*   users: User and Admin information is added to database with Unique ID based on their roles.
*   products: Complete products information is stored in this table.
*   orders: Customer ordered products and status is stored in this table.
*   carts: Customer cart's products information.
*   sessions: Customer session for Authentication and Authorization.

Data Objects

*   User: Id, username, email, password and isAdmin
*   Product: Id, title, price, description, category, image and rating
*   Order: Id, Client, Product, Quantity, Price, Date, OrderShipped
*   Order: Id, userId, userEmail, productsOfCart, address, status, total and timestamp
*   Cart: Id, title, price, image, description, amount, userId, productId and timestamp
