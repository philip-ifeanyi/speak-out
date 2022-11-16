import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import About from './pages/about/about';
import Support from './pages/support/support';
import Login from './pages/login/login'; 
import Register from './pages/register/register';
import Details from './pages/details/details';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route
        exact path='/'
        element={<Landing />}
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/support'
        element={<Support />}
      />
     
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
        <Route path='/dashboard' element={<Dashboard />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;