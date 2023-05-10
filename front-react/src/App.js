// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
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
import Article from './pages/Article/Article';
import EventPage from './pages/Notice/EventPage';
import PerfumePage from './pages/PerfumePage/Perfume';
import PerfumeListPage from './pages/PerfumePage/ProductsDtail/PerfumeList';
import Products from './pages/Products/Products';
import TestResult from './pages/imageTest/TestResult';
import NoteFinderMain from './pages/NoteFinder/NoteFinderMain';
import NoteCategory from './pages/NoteFinder/NoteCategory';
import Draft from './pages/Article/NewArticle';
import MyPage from './pages/MyPage/MyPage';
import News from './pages/Notice/News';
import UserStore from './context/UserInfo';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EventDesc from './pages/Notice/EventDesc';
import Update from './pages/Article/UpdateArticle';
import NoticeList from './pages/Notice/NoticeList';
import Notice from './pages/Notice/Notice';

function App() {
  
  return (
    <UserStore>
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/community' element={<Community />} />
        <Route path='/imagetest' element={<ImageTest />} />
        <Route path='/Testmain' element={<TestMain />} />
        <Route path='/information' element={<Information />} />
        <Route path='/userdeal' element={<UserDeal />} />
        <Route path='/article/:anum' element={<Article />} />
        <Route path='/EventPage' element={<EventPage />} />
        <Route path='/Notice' element={<NoticeList />} />
        <Route path='/imagetest1' element={<ImageTest1 />} />
        <Route path='/imagetest2' element={<ImageTest2 />} />
        <Route path='/PerfumePage' element={<PerfumePage />} />
        <Route path='/PerfumeList/:perfumeId' element={<PerfumeListPage />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/imagetest3' element={<ImageTest3 />} />
        <Route path='/imagetest4' element={<ImageTest4 />} />
        <Route path='/imagetest5' element={<ImageTest5 />} />
        <Route path='/imagetest6' element={<ImageTest6 />} />
        <Route path='/testresult' element={<TestResult />} />
        <Route path='/notefindermain' element={<NoteFinderMain />} />
        <Route path='/notecategory' element={<NoteCategory />} />
        <Route path='/newarticle' element={<Draft />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/News' element={<News />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/EventDesc/:eNum' element={<EventDesc />} />
        <Route path='/update/:num' element={<Update />} />
        <Route path='/Notice/:anum' element={<Notice />} />

      </Routes>
    </Router>
    </UserStore>
    
  );
}

export default App;
