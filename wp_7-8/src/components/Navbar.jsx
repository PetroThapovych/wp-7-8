import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Склад</Link>
      <Link to="/favorites">Улюблені</Link>
      <Link to="/admin">Адмін</Link>
    </nav>
  );
}