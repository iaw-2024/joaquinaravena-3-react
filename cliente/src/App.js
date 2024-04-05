import React, { useState, useEffect } from 'react';
import Listado from './componentes/Listado';

function agruparJugadoresPorPosicion(jugadores){
  const posicionesIds = {
    "Arquero": "arquero",
    "Defensor": "defensor",
    "Mediocampista": "mediocampista",
    "Delantero": "delantero"
  };

  const jugadoresPorPosicion = jugadores.reduce((acc, jugador) => {
    const posicionId = posicionesIds[jugador.posicion];
    acc[posicionId] = acc[posicionId] || [];
    acc[posicionId].push(jugador);
    return acc;
  }, {});
  return jugadoresPorPosicion;
}

function App() {
  const [jugadoresAgrupados, setJugadoresAgrupados] = useState({});
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    const obtenerJugadores = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/jugadores');
        const data = await response.json();
        const agrupados = agruparJugadoresPorPosicion(data.jugadores);
        setJugadoresAgrupados(agrupados);
        setCargando(false);
      } catch (error) {
        console.error('Error al obtener los jugadores:', error);
        setCargando(false);
      }
    };

    obtenerJugadores();
  }, []);

  return (
    <div>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <Listado jugadoresPorPosicion={jugadoresAgrupados} />
      )}
    </div>
  );
}

export default App;
