import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <main className='h-screen bg-gray-200 flex flex-col '>
    <nav className="bg-blue-900 float-left fixed left-0 h-screen p-9 w-4/12  text-white font-['Roboto']">
      <h1 className=' font-bold text-5xl text-white'>
        JUAN ESTEBAN GARCIA RESTREPO
      </h1>
      <br />
      Desarrollador
      <br />
      <section className='text-right'>
        juan.garcia142@udea.edu.co
        <br />
        github.com/juangrestrepo
      </section>
      <br />
      <br />
      Desarrollador y estudiante de octavo semestre de ingeniería de sistemas,
      durante mi trayectoria laboral y académica he participado en el desarrollo
      de varios sistemas de información orientados a la web.
    </nav>
    <div className='h-full absolute align-bottom float-right w-7/12	right-0 overflow-y-auto'>
      <Outlet />
    </div>
    <footer className='bg-gray-200 p-3'>footer</footer>
  </main>
);

export { Layout };
