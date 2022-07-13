import React, { useState } from 'react';

import { MdMenu, MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const clickBoton = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <div>
      <nav className='flex items-center gap-3 p-3 bg-gray-900 md:hidden text-white'>
        <button type='button' onClick={clickBoton} className='text-3xl'>
          {mostrarMenu ? <MdMenuOpen /> : <MdMenu />}
        </button>
        <span>Este es el navbar</span>
      </nav>
      {mostrarMenu && (
        <div className='bg-gray-300 p-3 flex flex-col'>
          <span>Opcion 1</span>
          <span>Opcion 2</span>
          <span>Opcion 3</span>
          <span>Opcion 4</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
