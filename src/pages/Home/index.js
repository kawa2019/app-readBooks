import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/index';
import Books from "../../components/Books/index";
import Register from "../../components/Register/index";
import Login from "../../components/Login/index";
import Header from '../../components/Header/index';
import AuthorsTitles from "../../components/AuthorsTitles/index";
import Alpha_listing from '../../components/Alpha_listing/index'
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

const Home = () => {
  const [books, setBooks] = useState([]);
  // console.log(books)
  useEffect(()=>{
    fetch('https://wolnelektury.pl/api/books')
        .then(res=>res.json())
        .then(res=> {
          setBooks(res)
        })
  }, [])
  const allAlphaSeriesTitle = [["A", "B", "C", "D", "D", "E", "F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O", "P"], ["R", "S", "T", "U", "V", "W", "Z"]];
  const allAlphaSeriesAuthor = [["A", "B", "C", "D", "D", "E", "F", "G"],
  ["H", "I", "J", "K", "L", "M"], ["N", "O", "P", "R", "S", "T", "V", "W", "Z"]]

  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path="/" >
          <Search/>
          <Books books={books}/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>/>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path="/search/authors">
          <Search/>
          <Alpha_listing/>
          <AuthorsTitles/>
        </Route>
        <Route path="/search/title">
          <Search  />
          <Alpha_listing />
          <AuthorsTitles />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Home;