import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

export default () => {
   return (
            <header className={styles.introduction}>
               <nav className="container">
                  <ul>
                     <li><Link to="/register">Zarejestruj się</Link></li>
                     <li><Link to="/login">Zaloguj się</Link></li>
                  </ul>
                  <ul>
                     <li><Link to="/" >Start</Link></li>
                     <li><Link to="/" >Gatunek</Link></li>
                     <li><Link to="/" >Rodzaj</Link></li>
                     <li><Link to="/search/title" >Tytuł</Link></li>
                     <li><Link to="/search/authors" >Autorzy</Link></li>
                  </ul>
               </nav>
            </header>
   )
}