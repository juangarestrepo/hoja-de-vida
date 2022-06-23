import { LinkComponent } from '../components/LinkComponent';
import { Layout } from '../layouts/Layout';

const IndexPage = () => {
  return (
    <main>
      <div>
        <h1>Hola Mundo</h1>
        <LinkComponent text='Ir a pagina 2' path='/pagina2' />
      </div>
    </main>
  );
};

export { IndexPage };
