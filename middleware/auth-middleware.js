const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.TOKEN_KEY);
        next();
    } catch (err) {
        res.status(401).send('No autorizado')
    }
}

module.exports = { verify }