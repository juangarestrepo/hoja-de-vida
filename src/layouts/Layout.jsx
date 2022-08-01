import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <main className='lg:h-screen h-40 bg-gray-200 lg:flex lg:flex-col  '>
    <nav className="bg-blue-900 lg:float-left lg:fixed lg:left-0 lg:h-screen p-9 lg:w-4/12 text-white font-['Roboto']">
      <h1 className=' font-bold text-5xl text-white'>
        JUAN ESTEBAN GARCIA RESTREPO
      </h1>
      <br />
      Desarrollador
      <br />
      <section className='text-right'>
        <a href='https://github.com/juangarestrepo'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
            alt='Github'
            className='w-9 float-right'
          />
        </a>
        <a href='https://www.linkedin.com/in/juan-esteban-garcía-a64833208/'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
            alt='LinkedIn'
            className='w-10 float-right border-r-8 border-r-transparent'
          />
        </a>
        <a href='mailto:juanestebangarcia5@gmail.com'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/281/281769.png'
            alt='Gmail'
            className='w-10 float-right border-r-8 border-r-transparent'
          />
        </a>
      </section>
      <br />
      <br />
      Desarrollador y estudiante de octavo semestre de ingeniería de sistemas,
      durante mi trayectoria laboral y académica he participado en el desarrollo
      de varios sistemas de información orientados a la web.
    </nav>
    <div className='h-full absolute align-bottom float-right lg:w-7/12	right-0 overflow-y-auto'>
      <Outlet />
    </div>
    <footer className='bg-gray-200 p-3'>footer</footer>
  </main>
);

export { Layout };
