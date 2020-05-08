import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Nav = ({ handleForm }) => {
   const [helper, setHelper] = useState(1)
   const backgroundOneMenu = (param) => {
      let style = {}
      if (helper == param) {
         return style = {
            background: "#ddd"
         }
      }
   }

   return (
      <>
         <section>
            <div className="container">
               <header>
                  <ul>
                     <li><Link to="/register">Zarejestruj się</Link></li>
                     <li><Link to="/login">Zaloguj się</Link></li>
                  </ul>
               </header>
               <nav>
                  <ul>
                     <li><Link to="/" onClick={() => { setHelper(1); return handleForm(1) }} style={backgroundOneMenu(1)}>Zacznij czytac!</Link></li>
                     <li><Link to="/" onClick={() => { setHelper(2); return handleForm(1) }} style={backgroundOneMenu(2)} >Gatunek</Link></li>
                     <li><Link to="/" onClick={() => { setHelper(3); return handleForm(1) }} style={backgroundOneMenu(3)}>Rodzaj</Link></li>
                     <li><Link to="/search/title" onClick={() => { setHelper(4); return handleForm(2) }} style={backgroundOneMenu(4)}>Tytuł</Link></li>
                     <li><Link to="/search/authors" onClick={() => { setHelper(5); return handleForm(3) }} style={backgroundOneMenu(5)}>Autorzy</Link></li>
                  </ul>
               </nav>
            </div>
         </section>
      </>
   )
}

export default Nav