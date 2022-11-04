import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';

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
      /> */}
    </Routes>
    </div>
  );
}

export default App;