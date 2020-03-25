import React, { useEffect, useState } from 'react'

const Authors=()=>{
    const [author,setAuthor] =useState([])
    useEffect(()=>{fetch("http://localhost:4000/books")
    .then(res=>res.json())
    .then(res=>{ 
    const filAuthors = res.map(b=>b.author).filter((item,index,arr)=>arr.indexOf(item)==index).sort();
    setAuthor(filAuthors)   
    })},[])
    console.log(author)
    if (author.length<1) {
        return "Loading...";
    }    
    return (
        <div className="columns">
        <ul className="authors">
          {author.filter(b=>b.charAt(0)=="A"|| b.charAt(0)=="B" 
          || b.charAt(0)=="C" || b.charAt(0)=="D" || b.charAt(0)=="E" || b.charAt(0)=="F"
          || b.charAt(0)=="G").map((b,index)=><li key={index}>{b}</li>)}
        </ul>
        <ul className="authors">
          {author.filter(b=>
          b.charAt(0)=="H" || b.charAt(0)=="I" || b.charAt(0)=="J" || b.charAt(0)=="K" || b.charAt(0)=="L"||
          b.charAt(0)=="M").map((b,index)=><li key={index}>{b}</li>)}
        </ul>
        <ul className="authors">
           {author.filter(b=> 
             b.charAt(0)=="N" || b.charAt(0)=="O" || b.charAt(0)=="P"
           || b.charAt(0)=="R" || b.charAt(0)=="S" || b.charAt(0)=="T"
           || b.charAt(0)=="V" || b.charAt(0)=="W" || b.charAt(0)=="W").map((b,index)=><li key={index}>{b}</li>)}
          {author.slice(author.indexOf(author.find((e)=>e.charAt(0)=="W")),author.length).map((b,index)=>
            <li key={index}>{b}</li>)}
        </ul>
        </div>       
    )
}


export default Authors