import React from 'react';
import Jugador from './Jugador';


function Listado({ jugadoresPorPosicion }) {
  return (
    <main>
      <section className="column">
        <ul className="posicion" id="arquero">Arqueros
          {jugadoresPorPosicion.arquero.map(jugador => (
            <Jugador key={jugador.id} id={jugador.id} nombre={jugador.nombre} />
          ))}
        </ul>
        <ul className="posicion" id="defensor">Defensores
          {jugadoresPorPosicion.defensor.map(jugador => (
            <Jugador key={jugador.id} id={jugador.id} nombre={jugador.nombre} />
          ))}
        </ul>
      </section>
      <section className="column">
        <ul className="posicion" id="mediocampista">Mediocampistas
          {jugadoresPorPosicion.mediocampista.map(jugador => (
            <Jugador key={jugador.id} id={jugador.id} nombre={jugador.nombre} />
          ))}
        </ul>
        <ul className="posicion" id="delantero">Delanteros
          {jugadoresPorPosicion.delantero.map(jugador => (
            <Jugador key={jugador.id} id={jugador.id} nombre={jugador.nombre} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Listado;
