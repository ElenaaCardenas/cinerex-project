import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Peliculas() {
  const [peliculas, setPeliculas] = useState<any[]>([]);
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [duracion, setDuracion] = useState('');
  const [esAdmin, setEsAdmin] = useState(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;

    // Obtener películas
    axios.get('http://localhost:3000/peliculas', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setPeliculas(res.data));

    // Decodificar el token para obtener el rol
    const payload = JSON.parse(atob(token.split('.')[1]));
    setEsAdmin(payload.rol === 'admin');
  }, [token]);

  const agregarPelicula = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/peliculas', {
        titulo,
        genero,
        duracion: parseInt(duracion)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Película agregada');
      window.location.reload();
    } catch (err) {
      alert('Error al agregar película');
    }
  };

  return (
    <div className="container">
      <h2>Cartelera</h2>
      <ul>
        {peliculas.map((p) => (
          <li key={p._id}>
            <strong>{p.titulo}</strong> - {p.genero} - {p.duracion} min
          </li>
        ))}
      </ul>

      {esAdmin && (
        <form onSubmit={agregarPelicula}>
          <h3>Agregar Película</h3>
          <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
          <input placeholder="Género" value={genero} onChange={e => setGenero(e.target.value)} />
          <input placeholder="Duración (min)" type="number" value={duracion} onChange={e => setDuracion(e.target.value)} />
          <button type="submit">Guardar</button>
        </form>
      )}
    </div>
  );
}
