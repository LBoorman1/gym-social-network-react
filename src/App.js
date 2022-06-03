import './App.css';
import NavBar from './components/NavBar';
import Timeline from './pages/Timeline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GymMap from './pages/GymMap';

function App() {
  return (
    <Router>
    <div id='app' className="App">
      <NavBar />
      <div  id='page-body' className=''>
        <Routes>
          <Route exact path='/' element={<Timeline />} />
          <Route exact path='/GymMap' element={<GymMap />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
