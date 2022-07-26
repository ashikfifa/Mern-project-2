const express= require ('express');
const { body } = require('express-validator');
const router= express.Router();
const {check,validationResult} =require('express-validator/check');


router.post('/', [
    check('name','Name is Required')
    .not()
    .isEmpty(),
    check('email','Please Enter a valid email').isEmail(),
    check('password','Please Enter a password with 6 digit password').isLength({ min:6 })
], (req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    res.send("users Route");

});

module.exports=router;
