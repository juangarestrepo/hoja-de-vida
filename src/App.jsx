import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { IndexPage } from './pages';
import { Page2 } from './pages/page2';
import { Page3 } from './pages/page3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/pagina2' element={<Page2 />} />
          <Route path='/pagina3' element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
