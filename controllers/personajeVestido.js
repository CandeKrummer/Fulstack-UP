require('mongoose');
const PersonajeVestido = require('../models/personajeVestido');


const addPersonajeVestido = async (nombreVestuario, personaje, torso, piernas, pies, idUsuario) => {

    const nuevoPersonajeVestido = new PersonajeVestido(
        {
            nombreVestuario: nombreVestuario,
            personaje: personaje,
            torso: torso,
            piernas: piernas,
            pies: pies,
            idUsuario
        }
    );

    let personajeVestido = await nuevoPersonajeVestido.save();
    console.log("personaje vestido nuevo");
    console.log(personajeVestido);
    return { personajeVestido };

}

const getAllPersonajesVestidos = async (limit, offset) => {

    const personajeVestidos = await PersonajeVestido.find({}).limit(limit).skip(offset);

    return personajeVestidos;
}

const getPersonajesVestidosByIdUsuario = async (idUsuario, limit, offset) => {

    const personajeVestidos = await PersonajeVestido.find({ idUsuario: idUsuario }).limit(limit).skip(offset);

    return personajeVestidos;
}

const getUltimos5PersonajesVestidos = async () => {

    const personajeVestidos = await PersonajeVestido.find({}).sort({ createdAt: "descending" }).limit(5)

    return personajeVestidos;
}

const getPersonajeVestido = async (id) => {

    const personajeVestido = await PersonajeVestido.findById(id);

    return personajeVestido;
}

const editPersonajeVestido = async (personajeVestido) => {

    const result = await PersonajeVestido.findByIdAndUpdate(personajeVestido._id, personajeVestido, { new: true });

    return result;
}

const deletePersonajeVestido = async (id) => {

    const result = await PersonajeVestido.findByIdAndDelete(id);

    return result;
}

module.exports = { addPersonajeVestido, getAllPersonajesVestidos, getPersonajeVestido, editPersonajeVestido, deletePersonajeVestido, getUltimos5PersonajesVestidos, getPersonajesVestidosByIdUsuario }