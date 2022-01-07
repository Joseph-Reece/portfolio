import './styles/main.scss';
import { Suspense, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/BaseRoutes';
import Preloader from './components/UIElements/Preloader/Preloader';
import ReactGa from 'react-ga';

const App = () => {
  
  useEffect(() => {
    ReactGa.initialize('G-JL5SHBX2BM');
    ReactGa.pageview(window.location.pathname + window.location.search);
}, [])

  return (
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
    </Suspense>
  );
};

export default App;
