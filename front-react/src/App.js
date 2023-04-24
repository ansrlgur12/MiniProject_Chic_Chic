// import logo from './logo.svg';
// import './App.css';
import Community from './pages/Community/Community';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageTest from './pages/imageTest/imageTest';
import ImageTest1 from './pages/imageTest/imageTest1';
import TestMain from './pages/imageTest/TestMain';
import ImageTest2 from './pages/imageTest/imageTest2';
import ImageTest3 from './pages/imageTest/imageTest3';
import ImageTest4 from './pages/imageTest/imageTest4';
import ImageTest5 from './pages/imageTest/imageTest5';
import ImageTest6 from './pages/imageTest/imageTest6';
import Information from './pages/Community/Infomation';
import UserDeal from './pages/Community/Userdeal';
import Article from './pages/Article';
import EventPage from './pages/EventPage';
import Notice from './pages/Notice';
import PerfumePage from './pages/Perfume';
import PerfumeListPage from './pages/PerfumeList';
import TestResult from './pages/imageTest/TestResult';
import NoteFinderMain from './pages/NoteFinder/NoteFinderMain';
import Draft from './pages/NewArticle';
import MyPage from './pages/MyPage/MyPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/community' element={<Community />} />
        <Route path='/imagetest' element={<ImageTest />} />
        <Route path='/Testmain' element={<TestMain />} />
        <Route path='/information' element={<Information />} />
        <Route path='/userdeal' element={<UserDeal />} />
        <Route path='/article' element={<Article />} />
        <Route path='/EventPage' element={<EventPage />} />
        <Route path='/Notice' element={<Notice />} />
        <Route path='/imagetest1' element={<ImageTest1 />} />
        <Route path='/imagetest2' element={<ImageTest2 />} />
        <Route path='/PerfumePage' element={<PerfumePage />} />
        <Route path='/PerfumeListPage' element={<PerfumeListPage />} />
        <Route path='/imagetest3' element={<ImageTest3 />} />
        <Route path='/imagetest4' element={<ImageTest4 />} />
        <Route path='/imagetest5' element={<ImageTest5 />} />
        <Route path='/imagetest6' element={<ImageTest6 />} />
        <Route path='/testresult' element={<TestResult />} />
        <Route path='/notefindermain' element={<NoteFinderMain />} />
        <Route path='/newarticle' element={<Draft />} />
        <Route path='/MyPage' element={<MyPage />} />




      </Routes>
    </Router>
    
  );
}

export default App;
