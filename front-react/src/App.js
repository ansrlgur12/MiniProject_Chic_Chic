// import logo from './logo.svg';
// import './App.css';
import Header from './Header/Header';
import Community from './pages/Community';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageTest from './pages/imageTest/imageTest';
import TestMain from './pages/imageTest/TestMain';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/community' element={<Community />} />
        <Route path='/imagetest' element={<ImageTest />} />
        <Route path='/Testmain' element={<TestMain />} />


      </Routes>
    </Router>
    
  );
}

export default App;
