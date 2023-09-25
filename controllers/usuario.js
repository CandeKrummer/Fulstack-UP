require('mongoose');
const Usr = require('../models/usuario');


const addUsuario = async (nombre, pin) => {

    let usuarioExiste = await Usr.findOne({ nombre: nombre });
    if (!usuarioExiste) {

        const cryptoPin = require('crypto')
            .createHash('sha256')
            .update(pin)
            .digest('hex');

        const nuevoUsuario = new Usr(
            {
                nombre: nombre,
                pin: cryptoPin
            }
        );

        let usuario = await nuevoUsuario.save();
        console.log("usuario nuevo");
        console.log(usuario);
        return { usuario };

    } else {
        return false;
    }
}

const getAllUsuarios = async (limit, offset) => {

    const usuarios = await Usr.find({}).limit(limit).skip(offset);

    return usuarios;
}

const getUsuario = async (id) => {

    const usuario = await Usr.findById(id);

    return usuario;
}

const editUsuario = async (usuario) => {

    const result = await Usr.findByIdAndUpdate(usuario._id, usuario, { new: true });

    return result;
}

const deleteUsuario = async (id) => {

    const result = await Usr.findByIdAndDelete(id);

    return result;
}

module.exports = { addUsuario, getAllUsuarios, getUsuario, editUsuario, deleteUsuario }