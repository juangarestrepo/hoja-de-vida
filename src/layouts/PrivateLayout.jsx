import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/navigation/Navbar';

const PrivateLayout = () => (
  <main className='flex h-screen'>
    <aside className='hidden md:block w-64 bg-gray-900'>
      Este es el sidebar
    </aside>
    <div className='w-full h-screen flex flex-col flex-grow'>
      <Navbar />
      <div className='flex h-full'>
        <Outlet />
      </div>
      <footer className='p-2 bg-gray-200 md:hidden'>Este es el footer</footer>
    </div>
  </main>
);

export default PrivateLayout;
