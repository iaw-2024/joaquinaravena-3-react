const jugadores = [
  { id: 12, nombre: "Leandro Brey", posicion: "Arquero" },
  { id: 42, nombre: "Lucas Blondel", posicion: "Defensor" },
  { id: 38, nombre: "Aaron Anselmino", posicion: "Defensor" },
  { id: 6, nombre: "Marcos Rojo", posicion: "Defensor" },
  { id: 23, nombre: "Lautaro Blanco", posicion: "Defensor" },
  { id: 21, nombre: "Equi Fernandez", posicion: "Mediocampista" },
  { id: 47, nombre: "Jabes Saralegui", posicion: "Mediocampista" },
  { id: 22, nombre: "Kevin Zenón", posicion: "Mediocampista" },
  { id: 39, nombre: "Vicente Taborda", posicion: "Mediocampista" },
  { id: 16, nombre: "Miguel Merentiel", posicion: "Delantero" },
  { id: 10, nombre: "Edinson Cavani", posicion: "Delantero" }
];

const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3000;

// Permitir solicitudes desde localhost:3001
app.use(cors({ origin: 'http://localhost:3001' }));

app.listen(PORT, () => console.log(`Servidor Express corriendo en el puerto ${PORT}`));

//datos
app.get('/api/jugadores' , (req, res) => {
    const data = {
      jugadores: jugadores
    };
    res.json(data);
  });

module.exports = app;