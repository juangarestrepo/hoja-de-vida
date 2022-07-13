import React, { useState, useEffect } from 'react';

const IndexAdmin = () => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
  });

  useEffect(() => {
    if (
      formData.nombre.toLowerCase() === 'daniel' &&
      formData.apellido === 'Saldarriaga'
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [formData]);

  return (
    <div className='p-10'>
      {error && (
        <div className='text-4xl text-red-500 font-extrabold'>
          ERROR! ESE NOMBRE NO ESTÁ PERMITIDO
        </div>
      )}
      <form>
        <input
          name='nombre'
          placeholder='Tu nombre'
          className='outline-none border border-gray-300 rounded-lg p-2 focus:border-indigo-500'
          value={formData.nombre}
          onChange={(e) => {
            setFormData({ ...formData, nombre: e.target.value });
          }}
        />
        <input
          name='apellido'
          placeholder='Tu apellido'
          className='outline-none border border-gray-300 rounded-lg p-2 focus:border-indigo-500'
          value={formData.apellido}
          onChange={(e) => {
            setFormData({ ...formData, apellido: e.target.value });
          }}
        />
      </form>
    </div>
  );
};

export default IndexAdmin;
