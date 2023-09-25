require('mongoose');
const User = require('../models/usuario');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const login = async (nombre, pin) => {

    const cryptoPin = require('crypto')
        .createHash('sha256')
        .update(pin)
        .digest('hex');

    const result = await User.findOne({ nombre: nombre, pin: cryptoPin })

    if (result) {
        // retorno token
        jwt.sign('payload', 'secret_key')
        const token = jwt.sign({ nombre: nombre }, process.env.TOKEN_KEY, { expiresIn: "1h" });
        return token;
    }
    return null; // retorno 

}

module.exports = { login }