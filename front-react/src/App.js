// import logo from './logo.svg';
// import './App.css';
import Header from './Header/Header';
import Community from './pages/Community';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/community' element={<Community />} />
      </Routes>
    </Router>
    
  );
}

export default App;
