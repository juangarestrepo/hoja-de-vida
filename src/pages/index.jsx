import { nanoid } from 'nanoid';
import { DatoCurioso } from 'components/datos-curiosos/DatoCurioso';
import { useLoadDatosCuriosos } from 'hooks/datos-curiosos/useLoadDatosCuriosos';

const IndexPage = () => {
  const { datosCuriosos, loading } = useLoadDatosCuriosos();

  if (loading) return <div>Cargando...</div>;

  return (
    <main className='p-10'>
      <div className='flex gap-4'>
        {datosCuriosos.map((dato) => (
          <DatoCurioso key={nanoid()} dato={dato} />
        ))}
      </div>
    </main>
  );
};

export { IndexPage };
