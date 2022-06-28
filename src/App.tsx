// Node libs
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import School from './pages/School';

// Components
import { Layout } from './components/layout/layout';
import { ClassContent } from './components/school/class-content';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route
              path='school'
              element={
                <Suspense fallback={<div>Coś poszło nie tak :(</div>}>
                  <School />
                </Suspense>
              }>
              <Route path=':classId' element={<ClassContent />} />
            </Route>
            <Route path='*' element={<p>Tu nic nie ma :(</p>} />
          </Route>
        </Routes>
      </Router>
      <div id='backdrop-root'></div>
      <div id='modal-root'></div>
    </>
  );
}
