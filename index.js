const express = require("express");
const app = express();
const http = require("http").createServer(app);
const PORT = 5000;

// Acceso a la DB 
/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("x").collection("products");
  // perform actions on the collection object
  console.log("conectado");
  client.close();
});
*/
app.use(express.json()); // Para utilizar json

http.listen(PORT, () => {
    console.log(`listening to ${PORT}`);
})

app.get("/burgers", async (req, res) => {

    let result = { 'junior': 1500, 'big mac': 2000, 'mac pollo': 1800 }
    /*
    let { limit = 5, offset = 0 } = req.params;
    console.log(limit);
    try{
        result = await collection.find({}).skip(parseInt(offset)).limit(parseInt(limit)).toArray();
        console.log(result);
    }catch(error){
        console.log("error");
    }    
    */
    res.json({ burgers: result });
})

app.get("/burgers/:id", async (req, res) => {

    let { id = 0 } = req.params;
    console.log(id);
    let result = { 'junior': 1500 }
    res.json({ burger: result });
})


