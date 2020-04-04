import React from 'react';
import {Link} from 'react-router-dom'

const Nav = ({handleForm})=>{

    return (
       <>
       <h1></h1>
       <Link to="/register">Zarejestruj się</Link>
       <Link to="/login">Zaloguj się</Link>
       <header> 
        <section className="container">
          <div className="row menu col-12"> 
             <nav>   
                <ul>
                  <li><Link to="/" onClick={()=>handleForm(1)}>Zacznij czytac!</Link></li>
                  <li>Gatunek</li>
                  <li>Rodzaj</li>
                  <li><Link to="/main/title"onClick={()=>handleForm(2)}>Tytuł</Link></li>
                  <li><Link to="/main/authors" onClick={()=>handleForm(3)}>Autorzy</Link></li>
                </ul>
             </nav>   
          </div>
        </section>
        </header>
        </> 
    )
}

export default Nav