const express = require("express");
const app = express();
const mongoose = require("mongoose")
const http = require("http").createServer(app);
const cors = require("cors")
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI
const { MongoClient, ServerApiVersion } = require('mongodb');

const AuthController = require('./controllers/auth');
const Middleware = require('./middleware/auth-middleware');
const UsuarioController = require('./controllers/usuario');
const RopaController = require('./controllers/ropa');
const PersonajeController = require('./controllers/personaje');
const PersonajeVestidoController = require('./controllers/personajeVestido');

// Acceso a la DB 

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected");
    })
    .catch((err) => console.log(err));


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
client.connect(err => {
    console.log(err)
    client.close();
});

app.use(cors())
app.use(express.json()); // Para utilizar json

http.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
})

app.post("/auth/login", async (req, res) => {
    const nombre = req.body.nombre;
    const pin = req.body.pin;
    try {
        const result = await AuthController.login(nombre, pin);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(401).send("No puede estar aqui")
        }
    } catch (error) {
        res.status(500).send("Error");
    }
})

app.get("/usuarios", Middleware.verify, async (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    try {
        const results = await UsuarioController.getAllUsuarios(limit, offset);
        console.log(results)
        res.status(200).json(results);

    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/usuarioById/:id", async (req, res) => {
    let idUsuario = req.params.id;
    try {
        const results = await UsuarioController.getUsuario(idUsuario);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/personajes", async (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    try {
        const results = await PersonajeController.getAllPersonajes(limit, offset);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/ropaByTipo/:tipo", async (req, res) => {
    let tipoRopa = req.params.tipo;
    let limit = req.query.limit;
    let offset = req.query.offset;
    try {
        const results = await RopaController.getRopaByTipo(tipoRopa, limit, offset);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/ropa", async (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    try {
        const results = await RopaController.getAllRopas(limit, offset);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/personajesVestidos", async (req, res) => {
    let limit = req.query.limit;
    let offset = req.query.offset;
    try {
        const results = await PersonajeVestidoController.getAllPersonajesVestidos(limit, offset);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/personajesVestidosByIdUsuario/:idUsuario", async (req, res) => {
    let idUsuario = req.params.idUsuario;
    let limit = req.query.limit;
    let offset = req.query.offset;
    try {
        const results = await PersonajeVestidoController.getPersonajesVestidosByIdUsuario(idUsuario, limit, offset);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/ultimos5PersonajesVestidos", async (req, res) => {
    try {
        const results = await PersonajeVestidoController.getUltimos5PersonajesVestidos();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/personajeVestido", Middleware.verify, async (req, res) => {
    let nombreVestuario = req.body.nombreVestuario;
    let personaje = req.body.personaje;
    let torso = req.body.torso;
    let piernas = req.body.piernas;
    let pies = req.body.pies;
    let idUsuario = req.body.idUsuario;
    try {
        const result = await PersonajeVestidoController.addPersonajeVestido(nombreVestuario, personaje, torso, piernas, pies, idUsuario);
        if (result) {
            res.status(201).send("Personaje vestido creado correctamente");
        } else {
            res.status(409).send("No se ha podido crear el personaje vestido");
        }
    } catch (error) {
        res.status(500).send("Error al crear el personaje vestido.");
    }
});

