import { useEffect, useState } from 'react';
import axios from 'axios';

const useLoadDatosCuriosos = () => {
  const [datosCuriosos, setDatosCuriosos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const consultarDatosCuriosos = async () => {
      setLoading(true);
      const response = await axios.get('https://catfact.ninja/facts');
      const arrayOfFacts = response.data.data.map((fact) => fact.fact);
      setDatosCuriosos(arrayOfFacts);
      setLoading(false);
    };
    consultarDatosCuriosos();
  }, []);

  return {
    datosCuriosos,
    loading,
  };
};

export { useLoadDatosCuriosos };
