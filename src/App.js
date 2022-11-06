import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import Login from './pages/login/login'; 
import Register from './pages/register/register';
import Details from './pages/details/details';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route
        exact path='/'
        element={<Landing />}
      />
      {/* <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/support'
        element={<Support />}
      />
      */}
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/register'
        element={<Register />}
      />
      <Route
        path='/register/details'
        element={<Details />}
      />
    </Routes>
    </div>
  );
}

export default App;