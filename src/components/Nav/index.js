import React from 'react';
import "../../scss/main.scss";
import {Link} from 'react-router-dom'

const Nav = ()=>{

    return (
       <>
       <h1></h1>
       <Link to="/register">Zarejestruj się</Link>
       <Link to="/login">Zaloguj się</Link>
       <header> 
        <section className="container">
          <div className="row menu col-12"> 
             <nav>
                <a href="#">Zacznij czytac!</a>   
                <ul>
                  <li>Gatunek</li>
                  <li>Rodzaj</li>
                  <li><Link to="/title">Tytuł</Link></li>
                  <li><Link to="/authors">Autorzy</Link></li>
                </ul>
             </nav>   
          </div>
        </section>
        </header>
        </> 
    )
}

export default Nav