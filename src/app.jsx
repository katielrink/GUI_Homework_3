import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import { ROUTES } from './routes';
import {Header} from './app/header'

export function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>    
          {
            ROUTES.map((route, index) => <Route key={index} { ...route } />)
          }                
        </Routes>
      </Router>
    </>
  );
}