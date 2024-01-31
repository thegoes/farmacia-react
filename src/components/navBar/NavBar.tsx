import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-end space-x-4">
        <li><Link to="/" className="text-white">Farmácia do Góes</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
