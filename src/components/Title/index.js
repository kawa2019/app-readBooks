import React from 'react'
import {Link} from 'react-router-dom'

const Title=({authorFind,title,foundTitles,duplicateSearchT})=>{
    
   if (title.length<1){
     return "Loading ..."
   }
    return(
        <>
        <div className="columns"> 
      {duplicateSearchT && <ul className="authors">{foundTitles.map((t,index)=><li key={index}><Link to="/" onClick={()=>authorFind(t)}>{t}</Link></li>)}</ul>}
          {!duplicateSearchT &&
          <>
          <ul className="authors">
            {title.filter(t=>t.toUpperCase().replace("(","").charAt(0)=="A"|| t.toUpperCase().replace("(","").charAt(0)=="B" 
            || t.toUpperCase().replace("(","").charAt(0)=="C" || t.toUpperCase().replace("(","").charAt(0)=="D" || t.toUpperCase().replace("(","").charAt(0)=="E" || t.toUpperCase().replace("(","").charAt(0)=="F"
            || t.toUpperCase().replace("(","").charAt(0)=="G" || t.toUpperCase().replace("(","").charAt(0)=="H" || t.toUpperCase().replace("(","").charAt(0)=="I"
            || t.toUpperCase().replace("(","").charAt(0)=="J" || t.toUpperCase().replace("(","").charAt(0)=="K"
          ).map((t,index)=><li key={index}><Link to="/" onClick={()=>authorFind(t)} >{index}{t}</Link></li>)}
          </ul>
          <ul className="authors">
            {title.filter(t=>t.toUpperCase().replace("(","").charAt(0)=="L" || t.toUpperCase().replace("(","").charAt(0)=="M" || t.toUpperCase().replace("(","").charAt(0)=="N" || t.toUpperCase().replace("(","").charAt(0)=="O"
             || t.toUpperCase().replace("(","").charAt(0)=="P" ).map((t,index)=><li key={index}><Link to="/" onClick={()=>authorFind(t)}>{t}</Link></li>)}
          </ul>
          <ul className="authors">
            {title.filter(t=> 
            t.toUpperCase().replace("(","").charAt(0)=="R" || 
             t.toUpperCase().replace("(","").charAt(0)=="S" || t.toUpperCase().replace("(","").charAt(0)=="T"
            || t.toUpperCase().replace("(","").charAt(0)=="V" || 
            t.toUpperCase().replace("(","").charAt(0)=="W").map((t,index)=><li key={index}><Link to="/" onClick={()=>authorFind(t)}>{t}</Link></li>)}
            {title.slice(title.indexOf(title.find((e)=>e.toUpperCase().replace("(","").charAt(0)=="Z")),title.length).map((t,index)=>
              <li key={index}><Link to="/" onClick={()=>{authorFind(t)}}>{index}{t}</Link></li>)}
          </ul>
          </>}
          </div>
        </>
    )
}

export default Title//.Reactmemo(Title);