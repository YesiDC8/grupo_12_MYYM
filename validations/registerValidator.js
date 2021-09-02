let { check, body } = require('express-validator');

module.exports = [
    check('usuario')
    .notEmpty()
    .withMessage("Debe ingresar un nombre de usuario").bail()
    .isLength({min: 5})
    .withMessage("Ingrese un usuario minimo de 5 caracteres"),

    check('email')
    .notEmpty()
    .withMessage("Debe ingresar su email").bail()
    .isEmail()
    .withMessage("Debe ingresar un email valido")
    ,
    
    check('password')
    .notEmpty()
    .withMessage('Debe ingresar una contraseña').bail()
    .isLength({min: 4, max: 10})
    .withMessage('Debe ingresar una contraseña de 4-10 caracteres')
  /*   .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
    .withMessage('Debe ingresar una contraseña valida') */,
    /* .equals('password', 'repassword') */
    /* .withMessage('Las contraseñas no coinciden'), */

    body('repassword')
    .custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage("Las contraseñas no coinciden"),

    /*check('repassword')
    .notEmpty()
    .withMessage('Debe re-ingresar la contraseña') 
    .equals('password', 'repassword')
    .withMessage('Las contraseñas no coinciden') */
    

]