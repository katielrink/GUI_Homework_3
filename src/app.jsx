import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import { ROUTES } from './routes';

export function App() {
  return (
    <>
      <Router>
        <Routes>    
          {
            ROUTES.map((route, index) => <Route key={index} { ...route } />)
          }                 
        </Routes>
      </Router>
    </>
  );
}