import React, { useState, useEffect } from 'react';
//import Button from '../../components/Button/index';
import Main from '../../components/Main/index';
import All from "../../components/All-books/index";
import Register from "../../components/Register/index";
import Login from "../../components/Login/index";
import Nav from '../../components/Nav/index';
import Authors from "../../components/Authors/index";
import Title from "../../components/Title/index"
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

  console.log(booksNumber)
  const startToSearch = () => {
    if (name.length < 3) {
      setSearching1(prevState => prevState + 1);
      setCounter(1)
    } else { return setSearching(prevState => prevState + 1) }
  }

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(res => {
        const filTitle = res.map(b => b.title).filter((item, index, arr) => arr.indexOf(item) == index)
          .sort((a, b) => a.replace(/[([\n,„« ]/, "").localeCompare(b.replace(/[/[([\n,„« ]/, "")));
        setTitle(filTitle); setBooksNumber(res.length)
      })
  }, [])
  console.log()

  useEffect(() => {

    if (name.length < 3) {
      return;
    }
    if (searching == 1) {
      return;
    }
    fetch(`http://localhost:4000/books?q=${name.toLocaleLowerCase()}${name.toLocaleLowerCase()}`)
      .then((res1) => { return res1.json() })
      .then((thumb1) => setBooks(thumb1))
  }, [searching])
  useEffect(() => {
    fetch(`http://localhost:4000/books?_page=${counter}`)
      .then((res) => { return res.json() })
      .then((thumb) => setBooks(thumb))
  }, [searching1, counter]);

  //forms
  const [numberForm, setNumberForm] = useState([1])

  const handleForm = (form) => {
    setNumberForm(form);
  }
  //title 
  const [searchTitle, setSearchTitle] = useState("")
  const [duplicateSearchT, setDuplicateSearchT] = useState("")
  const [foundTitles, setFoundTitle] = useState([])

  const beginToSearchT = () => {
    let foundTitle = title.filter(x => {
      if (searchTitle.length >= 3)
        return (x.toLowerCase().includes(searchTitle))
    });
    setFoundTitle(foundTitle)
    setDuplicateSearchT(searchTitle)
  }

  //title

  //authors
  const [searchAuthor, setSearchAuthor] = useState("")
  const [duplicateSearch, setDuplicateSearch] = useState("")
  const [foundBooks, setFoundBooks] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then(res => res.json())
      .then(res => {
        const filAuthors = res.map(b => b.author).filter((item, index, arr) => arr.indexOf(item) == index).sort();
        setAuthor(filAuthors)
      })
  }, [])

  const beginToSearch = () => {
    let foundBook = author.filter(x => {
      if (searchAuthor.length >= 3)
        return (x.toLowerCase().includes(searchAuthor))
    });
    setFoundBooks(foundBook)
    setDuplicateSearch(searchAuthor)
    console.log(foundBooks)
  }

  const authorFind = (author1) => {
    setName(author1);
    setSearching(prevState => prevState + 1)
  };
  return (
    <HashRouter>
      <Nav handleForm={handleForm} />
      <Switch>
        <Route exact path="/" >
          <Main setter={setName} value={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
          <All setCounter={setCounter} books={books} booksNumber={booksNumber}
            counter={counter} />
        </Route>
        <Route exact path="/main">
          <Main setter={setName} value={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
        </Route>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path="/main/authors">
          <Main setter={setName} value={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
          <Authors authorFind={authorFind} author={author} setAuthor={setAuthor}
            duplicateSearch={duplicateSearch} foundBooks={foundBooks} />
        </Route>
        <Route path="/main/title">
          <Main setter={setName} value={name} startToSearch={startToSearch} numberForm={numberForm}
            beginToSearch={beginToSearch} beginToSearchT={beginToSearchT} searchAuthor={searchAuthor}
            searchTitle={searchTitle} setSearchAuthor={setSearchAuthor} setSearchTitle={setSearchTitle} />
          <Title authorFind={authorFind} title={title} setTitle={setTitle} foundTitles={foundTitles}
            duplicateSearchT={duplicateSearchT} />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default Home;