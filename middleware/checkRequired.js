const CustomError = require('../helpers/customEerror')
const { check, validationResult } = require('express-validator');

const signupRequiredArguments = [
  // username must be not empty
  check('username').isLength({ min: 3 }).withMessage('Username must be not empty and more than 2 characters'),

  // email must be a valid email
  check('email').isEmail().withMessage('Email must be a valid email'),

  // password must be at least 5 chars long
  check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),

  // confirmPassword equal password
  check('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Password confirmation does not match password');
    }
    return true;
  }),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const err = new CustomError('Validation Error', 422, errors.mapped())
      return next(err)

    }
    else return next();
  }
]

const loginRequiredArguments = [
  // email must be a valid email
  check('email').isEmail().withMessage('Email must be a valid email'),

  // password must be at least 5 chars long
  check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 chars long'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const err = new CustomError('Validation Error', 422, errors.mapped())
      return next(err)
    }
    else return next();
  }
]

const cartRequiredArguments = [
  check('amount').not().isEmpty().withMessage('Amount is required')
    .isInt({ min: 1 }).withMessage('Amount must be greater than 0'),

  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const err = new CustomError('Validation Error', 400, errors.mapped())
      return next(err)
    }
    else return next();
  }
]

const addProductRequiredArguments = [
  check('id').custom((value, { req }) => {
    if (!req.body.id) {
      throw new Error('id is required');
    }
    return true;
  }),

  check('title').custom((value, { req }) => {
    if (!req.body.title) {
      throw new Error('title is required');
    }
    return true;
  }),

  check('price').custom((value, { req }) => {
    if (!req.body.price) {
      throw new Error('price is required');
    }
    return true;
  }),

  check('category').custom((value, { req }) => {
    if (!req.body.category) {
      throw new Error('category is required');
    }
    return true;
  }),

  check('description').custom((value, { req }) => {
    if (!req.body.description) {
      throw new Error('description is required');
    }
    return true;
  }),
  


  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      if (typeof (req.file) === 'undefined') {
        // errors.mapped to return object of errors
        const errorsObject = errors.mapped() 
        // add image error
        errorsObject.image = {msg:'image is required'}
        const err = new CustomError('Validation Error', 422, errorsObject)
        return next(err)
      }
    }
    else return next();
  }
]

module.exports = {
  signupRequiredArguments,
  loginRequiredArguments,
  cartRequiredArguments,
  addProductRequiredArguments
} 
