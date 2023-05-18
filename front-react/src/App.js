
import 'bootstrap/dist/css/bootstrap.min.css';
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

import Information from './pages/Community/Infomation';
import UserDeal from './pages/Community/Userdeal';
import Article from './pages/Article/Article';
import EventPage from './pages/Notice/EventPage';
import Notice from './pages/Notice/Notice';

import PerfumeDetail from './pages/PerfumeDetail';
import Perfume from './pages/Perfume';
import PerfumeSearchFilter from './pages/PerfumeSearchFilter';
import PerfumeSearchResults from './pages/PerfumeSearchResults';
import PerfumeAllSearch from './pages/PerfumeAllSearch';
import PerfumeList from './pages/PerfumeList';

import TestResult from './pages/imageTest/TestResult';
import NoteFinderMain from './pages/NoteFinder/NoteFinderMain';
import NoteCategory from './pages/NoteFinder/NoteCategory';
import Draft from './pages/Article/NewArticle';
import MyPage, { MyPageStyle } from './pages/MyPage/MyPage';
import News from './pages/Notice/News';
import UserStore from './context/UserInfo';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { QueryClient,QueryClientProvider } from 'react-query';
import EventDesc from './pages/Notice/EventDesc';
import Update from './pages/Article/UpdateArticle';
import OtherArticles from './pages/Article/OtherArticles';
import ImageUploader from './pages/imageUploader';
import NoticeList from './pages/Notice/NoticeList';
import NewsL from './pages/Notice/NewsL';
import Search from './pages/Search/Search';
import NtcList from './pages/Notice/NtcList';
import UserProfile from './pages/MyPage/UserProfile';

const queryClient = new QueryClient();


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
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
       
        <Route path='/imagetest1' element={<ImageTest1 />} />
        <Route path='/imagetest2' element={<ImageTest2 />} />


        <Route path='/Perfume' element={<Perfume />} />
        <Route path="/perfumeDetail/:perfumeNumber" element={<PerfumeDetail />} />
        <Route path="/searchResults" element={<PerfumeSearchResults />} />
        <Route path="/" element={<PerfumeSearchFilter />} />
        <Route path='/PerfumeAllSearch' element={<PerfumeAllSearch />} />

        <Route path='/perfumelist' element={<PerfumeList />} />
        <Route path='/imagetest3' element={<ImageTest3 />} />
        <Route path='/imagetest4' element={<ImageTest4 />} />
        <Route path='/imagetest5' element={<ImageTest5 />} />
        
        <Route path='/testresult' element={<TestResult />} />
        <Route path='/notefindermain' element={<NoteFinderMain />} />
        <Route path='/notecategory' element={<NoteCategory />} />
        <Route path='/newarticle' element={<Draft />} />
        <Route path='/MyPage' element={<MyPage />} />
        <Route path='/News' element={<NewsL />} />
        <Route path='/News/:num' element={<News />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/EventDesc/:eNum' element={<EventDesc />} />
        <Route path='/update/:num' element={<Update />} />
        <Route path='/otherArticles' element={<OtherArticles />} />
        <Route path='/imageUploader' element={<ImageUploader />} />
        <Route path='/Notice/:num' element={<Notice />} />
        <Route path='/Notice' element={<NoticeList />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/userProfile/:id' element={<UserProfile />} />
      </Routes>
    </Router>
    
    </UserStore>
    </QueryClientProvider>
    
  );
}

export default App;
