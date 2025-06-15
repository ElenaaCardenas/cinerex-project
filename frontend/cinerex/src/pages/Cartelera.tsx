import { useEffect, useState } from 'react';
import axios from 'axios';

const Cartelera = () => {
  const [funciones, setFunciones] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/funciones')
      .then(res => setFunciones(res.data))
      .catch(err => console.error('Error al cargar funciones:', err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Cartelera</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {funciones.map((funcion) => (
          <div key={funcion._id} className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
            <h2 className="text-xl font-semibold">{funcion.pelicula?.titulo || 'Sin título'}</h2>
            <p><strong>Fecha:</strong> {funcion.fecha}</p>
            <p><strong>Hora:</strong> {funcion.hora}</p>
            <p><strong>Sala:</strong> {funcion.sala?.nombre || 'Sin sala'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cartelera;
