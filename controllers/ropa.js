require('mongoose');
const Ropa = require('../models/ropa');


const addRopa = async (nombre, imagen, tipo, descripcion) => {

    const nuevaRopa = new Ropa(
        {
            nombre: nombre,
            imagen: imagen,
            tipo: tipo,
            descripcion: descripcion
        }
    );

    let ropa = await nuevaRopa.save();
    console.log("ropa nueva");
    console.log(ropa);
    return { ropa };

}

const getAllRopas = async (limit, offset) => {

    const ropas = await Ropa.find({}).limit(limit).skip(offset);

    return ropas;
}

const getRopaByTipo = async (tipo, limit, offset) => {

    const ropas = await Ropa.find({ tipo: tipo }).limit(limit).skip(offset);

    return ropas;
}

const getRopa = async (id) => {

    const ropa = await Ropa.findById(id);

    return ropa;
}

const editRopa = async (ropa) => {

    const result = await Ropa.findByIdAndUpdate(ropa._id, ropa, { new: true });

    return result;
}

const deleteRopa = async (id) => {

    const result = await Ropa.findByIdAndDelete(id);

    return result;
}

module.exports = { addRopa, getAllRopas, getRopa, editRopa, deleteRopa, getRopaByTipo }