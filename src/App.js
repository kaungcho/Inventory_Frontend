import './App.css';
import { Routes, Route } from 'react-router-dom';
import allRoutes from './router/allRoute';

function App() {
  return (
    <Routes>
        {
          allRoutes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              element={
                  <route.component />
                }
            />
          ))
        }
    </Routes>

  );
}

export default App;
