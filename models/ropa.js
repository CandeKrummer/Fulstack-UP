const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RopaSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: true
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


const Ropa = mongoose.model('ropa', RopaSchema);
module.exports = Ropa;