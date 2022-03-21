// Node libs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import School from './pages/School';

// Components
import { Layout } from './components/layout/layout';
import { Params } from './components/testing/params';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='home/:newsId' element={<Params />} />
          <Route path='school' element={<School />}>
            <Route path=':contentId' element={<Params />} />
          </Route>
          <Route path='*' element={<p>Noyhing here</p>} />
        </Route>
      </Routes>
    </Router>
  );
}
