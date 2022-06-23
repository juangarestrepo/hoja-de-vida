import React from 'react';
import { LinkComponent } from '../components/LinkComponent';

const Page3 = () => {
  return (
    <div>
      <h1>Page 3</h1>
      <div className='flex flex-col'>
        <LinkComponent path='/pagina2' text='Ir a pagina 2' />
        <LinkComponent path='/' text='Ir a home' />
      </div>
    </div>
  );
};

export { Page3 };
