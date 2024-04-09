const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const jugadores = require('./datos.json');


app.use(express.static(path.join(__dirname, '../cliente/build')));

app.listen(PORT, () => console.log(`Servidor Express corriendo en el puerto ${PORT}`));

//datos
app.get('/api/jugadores' , (req, res) => {
    res.send(jugadores);
  });

module.exports = app;