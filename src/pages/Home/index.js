import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/index';
import All from "../../components/All-books/index";
import Register from "../../components/Register/index";
import Login from "../../components/Login/index";
import Nav from '../../components/Nav/index';
import AuthorsTitles from "../../components/AuthorsTitles/index";
import Alpha_listing from '../../components/Alpha_listing/index'
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const [books, setBooks] = useState([]);
  const [booksNumber, setBooksNumber] = useState(0)
  const [searching, setSearching] = useState(1)
  const [searching1, setSearching1] = useState(1)
  const [author, setAuthor] = useState([]);
  const [counter, setCounter] = useState(1);
  const [title, setTitle] = useState([]);
  const [helper, setHelper] = useState(1);
  const [userReg, setUserReg] = useState({ email: "", password: "" });

  //basic url
  const url = { http: "http://localhost:4000/", part2: "books" }

  //authors
  const [searchAuthor, setSearchAuthor] = useState("")
  const [duplicateSearch, setDuplicateSearch] = useState("")
  const [foundBooks, setFoundBooks] = useState([])
  //title 
  const [searchTitle, setSearchTitle] = useState("")
  const [foundTitles, setFoundTitle] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url.http + url.part2)
      const data = await response.json()
      const filTitle = await data.map(b => b.title).filter((item, index, arr) => arr.indexOf(item) == index)
        .sort((a, b) => a.replace(/[([\n,„« ]/, "").localeCompare(b.replace(/[/[([\n,„« ]/, "")));
      setTitle(filTitle); setBooksNumber(data.length)
      const filAuthors = await data.map(b => b.author).filter((item, index, arr) => arr.indexOf(item) == index).sort();
      setAuthor(filAuthors)
    }; fetchData()
  }, [])
  //fetch specific books
  const booksByPage = `?_page=${counter}`
  const booksBySearch = `?q=${name.toLocaleLowerCase()}`
  const fetchSetBook = async (booksWay) => {
    const response = await fetch(`${url.http + url.part2}${booksWay}`)
    const data = await response.json()
    setBooks(data)
  }

  useEffect(() => {
    if (name.length < 3) {
      return;
    }
    if (searching == 1) {
      return;
    }
    fetchSetBook(booksBySearch)
  }, [searching])
  useEffect(() => {
    fetchSetBook(booksByPage)
  }, [searching1, counter]);

  //option to register/login
  const optionsToLogReg = (oneOfdata) => {
    return ({
      method: "POST",
      body: JSON.stringify(oneOfdata),
      headers: {
        "Content-Type": "application/json"
      }
    })
  };

  const startToSearch = (wtSearch,array_to_filter, set_wt_found) => {
    if (wtSearch === Object.keys(name)[0]) {
      if (name.length >= 3) {
        setSearching(prevState => prevState + 1)
      } else {
        setSearching1(prevState => prevState + 1);
        setCounter(1);
        setHelper(1);
        alert("minimum 3 znaki")
      }
    } else {
      if (wtSearch.length >= 3) {
        let foundTitlesAuthors = array_to_filter.filter(x => {
          if (wtSearch.length >= 3)
            return x.toLowerCase().includes(wtSearch.toLocaleLowerCase())
        });
        set_wt_found(foundTitlesAuthors)
        setDuplicateSearch(wtSearch)
      } else {
        alert("minimum 3 znaki");
        setDuplicateSearch("")
      }
    }
  }

  const authorsTitlesFind = (author1) => {
    window.location.href = "http://localhost:3000/?#/"
    setName(author1);
    setSearching(prevState => prevState + 1);
  };

  const allAlphaSeriesTitle = [["A", "B", "C", "D", "D", "E", "F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O", "P"], ["R", "S", "T", "U", "V", "W", "Z"]];
  const allAlphaSeriesAuthor = [["A", "B", "C", "D", "D", "E", "F", "G"],
  ["H", "I", "J", "K", "L", "M"], ["N", "O", "P", "R", "S", "T", "V", "W", "Z"]]

  return (
    <HashRouter>
      <Nav helper={helper} setHelper={setHelper} setDuplicateSearch={setDuplicateSearch} />
      <Switch>
        <Route exact path="/" >
          <Search setNameSearch={setName} name_search={name} startToSearch={startToSearch}
            placeholderSearch="wpisz tytuł,autora,tytuł,rodzaj,gatunek" />
          <All setCounter={setCounter} books={books} booksNumber={booksNumber}
            counter={counter} />
        </Route>
        <Route path='/register'>
          <Register url={url} userReg={userReg} setUserReg={setUserReg}
            optionsToLogReg={optionsToLogReg} />
        </Route>/>
        <Route path='/login'>
          <Login url={url} optionsToLogReg={optionsToLogReg} />
        </Route>
        <Route path="/search/authors">
          <Search startToSearch={startToSearch} name_search={searchAuthor}
            setNameSearch={setSearchAuthor} placeholderSearch="podaj autora..."
            array_to_filter={author} set_wt_found={setFoundBooks} />
          <Alpha_listing allAlphaSeries={allAlphaSeriesAuthor} />
          <AuthorsTitles authorsTitlesFind={authorsTitlesFind} authorsTitles={author} setAuthorsTitles={setAuthor}
            duplicateSearch={duplicateSearch} foundBooks={foundBooks} allAlphaSeries={allAlphaSeriesAuthor} />
        </Route>
        <Route path="/search/title">
          <Search startToSearch={startToSearch} name_search={searchTitle} setNameSearch={setSearchTitle}
            placeholderSearch="podaj tytuł..."
            array_to_filter={title} set_wt_found={setFoundTitle} />
          <Alpha_listing allAlphaSeries={allAlphaSeriesTitle} />
          <AuthorsTitles authorsTitlesFind={authorsTitlesFind} authorsTitles={title} setAuthorsTitles={setTitle}
            duplicateSearch={duplicateSearch} foundBooks={foundTitles} allAlphaSeries={allAlphaSeriesTitle} />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Home;