/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

const IndexPage = () => {
  const [datosCuriosos, setDatosCuriosos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultarDatosCuriosos = async () => {
      setLoading(true);
      const response = await axios.get('https://cat-fact.herokuapp.com/facts');
      const arrayOfFacts = response.data.map((fact) => fact.text);
      setDatosCuriosos(arrayOfFacts);
      setLoading(false);
    };

    consultarDatosCuriosos();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <main>
      <div className='flex flex-col gap-4'>
        {datosCuriosos.map((dato) => (
          <span key={nanoid()}>{dato}</span>
        ))}
      </div>
    </main>
  );
};

export { IndexPage };
