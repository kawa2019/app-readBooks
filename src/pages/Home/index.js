import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/index';
import All from "../../components/All-books/index";
import Register from "../../components/Register/index";
import Login from "../../components/Login/index";
import Nav from '../../components/Nav/index';
import Authors from "../../components/Authors/index";
import Title from "../../components/Title/index";
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
  const [numberForm, setNumberForm] = useState("http://localhost:3000/?#/");
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
  const [duplicateSearchT, setDuplicateSearchT] = useState("")
  const [foundTitles, setFoundTitle] = useState([])

  const startToSearch = () => {
    if (name.length < 3) {
      setSearching1(prevState => prevState + 1);
      setCounter(1);
      setHelper(1);
      alert("minimum 3 znaki")
    } else { return setSearching(prevState => prevState + 1) }
  }

  useEffect(async () => {
    const response = await fetch(url.http + url.part2)
    const data = await response.json()
    const filTitle = await data.map(b => b.title).filter((item, index, arr) => arr.indexOf(item) == index)
      .sort((a, b) => a.replace(/[([\n,„« ]/, "").localeCompare(b.replace(/[/[([\n,„« ]/, "")));
    setTitle(filTitle); setBooksNumber(data.length)
    const filAuthors = await data.map(b => b.author).filter((item, index, arr) => arr.indexOf(item) == index).sort();
    setAuthor(filAuthors)
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

  //forms
  const handleForm = (form) => {
    if (form === 1) {
      setName("");
      setSearching1(prevState => prevState + 1);
      setCounter(1);
      setHelper(1);

    }
    setNumberForm(form);
  }

  const beginToSearchT = () => {
    if (searchTitle.length >= 3) {
      let foundTitle = title.filter(x => {
        if (searchTitle.length >= 3)
          return x.toLowerCase().includes(searchTitle.toLocaleLowerCase())
      });
      setFoundTitle(foundTitle)
      setDuplicateSearchT(searchTitle)
    } else {
      alert("minimum 3 znaki");
      setDuplicateSearchT("")
    }
  }
  const beginToSearch = () => {
    if (searchAuthor.length >= 3) {
      let foundBook = author.filter(x => {
        if (searchAuthor.length >= 3)
          return (x.toLowerCase().includes(searchAuthor.toLocaleLowerCase()))
      });
      setFoundBooks(foundBook)
      setDuplicateSearch(searchAuthor)
    } else {
      alert("minimum 3 znaki");
      setDuplicateSearch("")
    }
  }

  const authorFind = (author1) => {
    window.location.href = "http://localhost:3000/?#/"
    setName(author1);
    setSearching(prevState => prevState + 1);
    setNumberForm(1);
  };
  return (
    <HashRouter>
      <Nav handleForm={handleForm} helper={helper} setHelper={setHelper} />
      <Switch>
        <Route exact path="/" >
          <Search setName={setName} name={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
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
          <Search setter={setName} value={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
          <Authors authorFind={authorFind} author={author} setAuthor={setAuthor}
            duplicateSearch={duplicateSearch} foundBooks={foundBooks} />
        </Route>
        <Route path="/search/title">
          <Search setter={setName} value={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
          <Alpha_listing />
          <Title authorFind={authorFind} title={title} setTitle={setTitle} foundTitles={foundTitles}
            duplicateSearchT={duplicateSearchT} />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Home;