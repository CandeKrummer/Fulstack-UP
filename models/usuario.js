const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsuarioSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    }

}, { timestamps: true }).set('toJSON', {
    transform: (document, object) => {
        object.id = document.id;
        delete object._id;
        delete object.password;
    }
});


const Usuario = mongoose.model('usuario', UsuarioSchema);
module.exports = Usuario;