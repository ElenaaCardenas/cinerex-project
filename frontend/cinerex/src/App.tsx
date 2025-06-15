import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Peliculas from './pages/Peliculas';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/peliculas" element={<Peliculas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
