import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import About from './pages/about/about';
import Support from './pages/support/support';
import Login from './pages/login/login'; 
import Register from './pages/register/register';
import Details from './pages/details/details';
import Dashboard from './pages/dashboard/dashboard';
import PrivateRoutes from './routes/PrivateRoutes';
import Complaint from './components/mainarea/complaint';
import Bin from './pages/dashboard/bin/bin';
import ChangeEmail from './pages/dashboard/settings/changeEmail';
import SettingsRoutes from './routes/SettingsRoutes';
// import Sidebar from './components/sidebar/sidebar';

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
        <Route 
          path="/"
          element={<PrivateRoutes/>}
        >
          <Route 
            path="dashboard" 
            element={<Dashboard />}/>
          <Route 
            path="/dashboard/complaint" 
            element={<Complaint />}/>
          <Route
            path="/dashboard/bin"
            element={<Bin />}
          />
          <Route path="/dashboard/settings" element={<SettingsRoutes />}>
            <Route path='dashboard/settings/changemail' element={<ChangeEmail />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;