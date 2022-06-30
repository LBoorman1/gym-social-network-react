import './App.css';
import Timeline from './pages/Timeline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GymMap from './pages/GymMap';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div  id='page-body' className='h-full'>
        <Routes>
          <Route exact path='/' element={<Timeline />} />
          <Route exact path='/GymMap' element={<GymMap />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path='/Login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
