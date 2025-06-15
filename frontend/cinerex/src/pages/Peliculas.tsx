import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/peliculas', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setPeliculas(res.data))
    .catch(() => alert('Error al cargar películas'));
  }, []);

  return (
    <div className="container">
      <h2>Cartelera</h2>
      <ul>
        {peliculas.map(p => (
          <li key={p._id}>
            <strong>{p.titulo}</strong> - {p.genero} - {p.duracion} min
          </li>
        ))}
      </ul>
    </div>
  );
}
