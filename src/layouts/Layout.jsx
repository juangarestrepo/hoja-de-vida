import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <main className='h-screen flex flex-col'>
    <nav className='bg-gray-700 p-4 text-white'>Navbar</nav>
    <div className='h-full overflow-y-auto'>
      <Outlet />
    </div>
    <footer className='bg-gray-200 p-3'>footer</footer>
  </main>
);

export { Layout };
