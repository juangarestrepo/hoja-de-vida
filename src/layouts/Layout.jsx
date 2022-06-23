import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main className='h-screen flex flex-col'>
      <nav className='bg-gray-700 p-4'>Navbar</nav>
      <div className='h-full'>
        <Outlet />
      </div>
      <footer className='bg-gray-200 p-3'>footer</footer>
    </main>
  );
};

export { Layout };
