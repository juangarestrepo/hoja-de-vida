// import { nanoid } from 'nanoid';
// import { DatoCurioso } from 'components/datos-curiosos/DatoCurioso';
// import { useLoadDatosCuriosos } from 'hooks/datos-curiosos/useLoadDatosCuriosos';
import { Certificaciones } from 'components/hoja-de-vida/Certificaciones';
import { Educacion } from 'components/hoja-de-vida/Educacion';
import { Experiencia } from 'components/hoja-de-vida/Experiencia';
import { Habilidades } from 'components/hoja-de-vida/Habilidades';
import { Hobbies } from 'components/hoja-de-vida/Hobbies';

const IndexPage = () => (
  <main className='p-10 lg:w-8/12 right-0 text-gray-700'>
    <div className='gap-4'>
      <Experiencia />
      <br />
      <Habilidades />
      <br />
      <Educacion />
      <br />
      <Certificaciones />
      <br />
      <h1>HOBBIES</h1>
      <Hobbies />
    </div>
  </main>
);

export { IndexPage };
