require('mongoose');
const Personaje = require('../models/personaje');


const addPersonaje = async (nombre, imagen, descripcion) => {

    let personajeExiste = await Personaje.findOne({ nombre: nombre });
    if (!personajeExiste) {

        const nuevoPersonaje = new Personaje(
            {
                nombre: nombre,
                imagen: imagen,
                descripcion: descripcion
            }
        );

        let personaje = await nuevoPersonaje.save();
        console.log("personaje nuevo");
        console.log(personaje);
        return { personaje };

    } else {
        return false;
    }
}

const getAllPersonajes = async (limit, offset) => {

    const personajes = await Personaje.find({}).limit(limit).skip(offset);

    return personajes;
}

const getPersonaje = async (id) => {

    const personaje = await Personaje.findById(id);

    return personaje;
}

const editPersonaje = async (personaje) => {

    const result = await Personaje.findByIdAndUpdate(personaje._id, personaje, { new: true });

    return result;
}

const deletePersonaje = async (id) => {

    const result = await Personaje.findByIdAndDelete(id);

    return result;
}

module.exports = { addPersonaje, getAllPersonajes, getPersonaje, editPersonaje, deletePersonaje }