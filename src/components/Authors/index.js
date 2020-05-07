  import React, { useEffect, useState } from 'react';
  import {Link} from "react-router-dom"

  const Authors=({author,setAuthor,authorFind,duplicateSearch,foundBooks})=>{
      
      
      

      console.log(author)
      if (author.length<1) {
          return "Loading...";
      }    
      return (              
          <div className="columns"> 
      {duplicateSearch && <ul className="authors">{foundBooks.map((b,index)=><li key={index}><Link to="/" onClick={()=>authorFind(b)}>{b}</Link></li>)}</ul>}
          {!duplicateSearch &&
          <>
          <ul className="authors">
            {author.filter(b=>b.charAt(0)=="A"|| b.charAt(0)=="B" 
            || b.charAt(0)=="C" || b.charAt(0)=="D" || b.charAt(0)=="E" || b.charAt(0)=="F"
            || b.charAt(0)=="G").map((b,index)=><li key={index}><Link to="/" onClick={()=>authorFind(b)} >{b}</Link></li>)}
          </ul>
          <ul className="authors">
            {author.filter(b=>
            b.charAt(0)=="H" || b.charAt(0)=="I" || b.charAt(0)=="J" || b.charAt(0)=="K" || b.charAt(0)=="L"||
            b.charAt(0)=="M").map((b,index)=><li key={index}><Link to="/" onClick={()=>authorFind(b)}>{b}</Link></li>)}
          </ul>
          <ul className="authors">
            {author.filter(b=> 
              b.charAt(0)=="N" || b.charAt(0)=="O" || b.charAt(0)=="P"
            || b.charAt(0)=="R" || b.charAt(0)=="S" || b.charAt(0)=="T"
            || b.charAt(0)=="V" || b.charAt(0)=="W").map((b,index)=><li key={index}><Link to="/" onClick={()=>authorFind(b)}>{b}</Link></li>)}
            {author.slice(author.indexOf(author.find((e)=>e.charAt(0)=="Z")),author.length).map((b,index)=>
              <li key={index}><Link to="/" onClick={()=>{authorFind(b)}}>{b}</Link></li>)}
          </ul>
          </>}
          </div>      
      )
  }


  export default Authors