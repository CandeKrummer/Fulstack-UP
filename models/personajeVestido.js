const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonajeVestidoSchema = new Schema({

    nombreVestuario: {
        type: String,
        required: false
    },
    personaje: {
        type: Object,
        required: true
    },
    torso: {
        type: Object,
        required: true
    },
    piernas: {
        type: Object,
        required: true
    },
    pies: {
        type: Object,
        required: true
    },
    idUsuario: {
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


const PersonajeVestido = mongoose.model('personajesVestido', PersonajeVestidoSchema);
module.exports = PersonajeVestido;