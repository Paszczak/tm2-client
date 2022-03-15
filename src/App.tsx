// Node libs
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import School from './pages/School';

// Components
import { Layout } from './components/layout/layout';

// Style
import './App.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/school' element={<School />} />
        </Routes>
      </Layout>
    </Router>
  );
}
