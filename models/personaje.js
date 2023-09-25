const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonajeSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: false
    }

}, { timestamps: true }).set('toJSON', {
    transform: (document, object) => {
        object.id = document.id;
        delete object._id;
        delete object.password;
    }
});


const Personaje = mongoose.model('personaje', PersonajeSchema);
module.exports = Personaje;