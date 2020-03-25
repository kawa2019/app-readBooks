import React,{useState,useEffect} from 'react';
//import Button from '../../components/Button/index';
import Main from '../../components/Main/index'
import All from "../../components/All-books/index"
import Register from "../../components/Register/index"
import Login from "../../components/Login/index"
import Nav from '../../components/Nav/index'
import Authors from "../../components/Authors/index"

import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

// <Switch>
        //   <Route exact path='/main' component={Main} />
          //  <Route path='/aboutus' component={AboutUs} /> 
            //<Route  component={Error} /> 
           // </Switch>
const Home = () => {

  const [name,setName] = useState('');
  const [books,setBooks] = useState([])
  const [searching,setSearching] = useState(1)
  const startToSearch= ()=>{return setSearching(prevState=>prevState+1)}
  console.log(searching)
  useEffect(()=>{
    if(name.length < 3){
       return;
    } 
    if (searching==1){
      return;
    }

    fetch(`http://localhost:4000/books?q=${name.toLocaleLowerCase()}`)
    .then((res1)=>{return res1.json()})
    .then((thumb1)=>setBooks(thumb1))
    },[searching])

    
     
    const [counter,setCounter] = useState(1);
    const [pages,setPages]=useState([0,1,2,3,4,5,6]);
    const [changeNumber,setChNumber] = useState(0)
    const [deleteCNumber, setDCNumber] = useState(7)
   
    const minusPage = ()=>{
      setDCNumber(prevState=>prevState-1)
      setCounter(prevState=>prevState-1);
      setPages(prevState=>
     {;return [prevState.length-deleteCNumber,...prevState,]})
      setPages(prevState=>{prevState.splice(prevState.length-1,1);return prevState})
   } ;
    const plusPage = ()=>{
       setChNumber(prevState=>prevState+1)
       setCounter(prevState=>prevState+1);
       setPages(prevState=>
      {;return [...prevState,prevState.length+changeNumber]})
       setPages(prevState=>{prevState.splice(0,1);return prevState})
    } ;
    

    useEffect(()=>{fetch(`http://localhost:4000/books?_page=${counter}`)
    .then((res)=>{return res.json()})
    .then((thumb)=>setBooks(thumb))
    },[counter]) ; 
      
      
         
    const handleClick=(number)=>{
       setCounter(number)
    }  
    
    
    
    return (
        <HashRouter>
            <Nav/>
            <Switch>
              <Route exact path="/" >
                <Main setter={setName} value={name} startToSearch={startToSearch}/>
                <All books={books} pages={pages} minusPage={minusPage} plusPage={plusPage} handleClick={handleClick}/>}/>  
              </Route>     
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <Route path="/authors" component={Authors}/>
            </Switch>
        </HashRouter>
    )
}

export default Home;