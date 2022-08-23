import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
// import AllArticles from './components/AllArticles';
import SingleArticle from './components/SingleArticle';
import Users from './components/Users';
import './App.css';
import ArticlesByCategory from './components/ArticlesByCategory';

function App() {
  return (
  <BrowserRouter>
     <div>
      <Header />
    </div>
    <Routes>
      <Route path="/" element={ <ArticlesByCategory />}/>
      <Route path="/articles/:topic" element={<ArticlesByCategory/>}/>
      <Route path="/article/:article_id" element={ <SingleArticle />}/>
      <Route path="/sign-in" element={ <Users/> }/>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
