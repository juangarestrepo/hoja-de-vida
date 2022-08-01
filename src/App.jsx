import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'layouts/Layout';
import { IndexPage } from 'pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
