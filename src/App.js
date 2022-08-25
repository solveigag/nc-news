import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import SingleArticle from './components/SingleArticle';
import ChangeUser from './components/ChangeUser';
import './App.css';
import ArticlesByCategory from './components/ArticlesByCategory';
import { UserContext } from './contexts/User';
import { useState } from 'react';


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
  <BrowserRouter>
  <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
     <div>
      <Header />
    </div>
    <Routes>
      <Route path="/" element={ <ArticlesByCategory />}/>
      <Route path="/articles/:topic" element={<ArticlesByCategory/>}/>
      <Route path="/article/:article_id" element={ <SingleArticle />}/>
      <Route path="/sign-in" element={ <ChangeUser/> }/>
    </Routes>
  </UserContext.Provider>
  </BrowserRouter>
   
  );
}

export default App;
