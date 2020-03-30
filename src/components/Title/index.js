import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const Title=({authorFind})=>{
   const [title,setTitle] = useState([])
   const [searchTitle,setSearchTitle] = useState("")
   const [duplicateSearchT,setDuplicateSearchT] = useState("")
   const [foundTitles,setFoundTitle] = useState([])
   

   useEffect(()=>{fetch("http://localhost:4000/books")
      .then(res=>res.json())
      .then(res=>{ 
      const filTitle = res.map(b=>b.title).filter((item,index,arr)=>arr.indexOf(item)==index)
      .sort((a,b)=>a.replace(/[([\n,„« ]/,"").localeCompare(b.replace(/[/[([\n,„« ]/,"")));
      setTitle(filTitle) 
      })},[])
      console.log(title)
      const beginToSearchT=()=>{        
        let foundTitle = title.filter(x=>{
        if(searchTitle.length>=3)
          return  (x.toLowerCase().includes(searchTitle))});
          setFoundTitle(foundTitle)
          setDuplicateSearchT(searchTitle)      
    }
   if (title.length<=0){
     return "Loading ..."
   }
    return(
        <>
        <form >
                  <input onKeyDown={beginToSearchT} value={searchTitle} onChange={e=>{ return setSearchTitle(e.target.value)}} type="text" placeholder="podaj autora..."/>
                  <input type="submit" className="button"/>
        </form>
        <div className="columns"> 
      {duplicateSearchT && <ul className="authors">{foundTitles.map((t,index)=><li key={index}><Link to="/" onClick={()=>authorFind(t)}>{t}</Link></li>)}</ul>}
          {!duplicateSearchT &&
          <>
          <ul className="authors">
            {title.filter(t=>t.toUpperCase().replace("(","").charAt(0)=="A"|| t.toUpperCase().replace("(","").charAt(0)=="B" 
            || t.toUpperCase().replace("(","").charAt(0)=="C" || t.toUpperCase().replace("(","").charAt(0)=="D" || t.toUpperCase().replace("(","").charAt(0)=="E" || t.toUpperCase().replace("(","").charAt(0)=="F"
            || t.toUpperCase().replace("(","").charAt(0)=="G" || t.toUpperCase().replace("(","").charAt(0)=="H" || t.toUpperCase().replace("(","").charAt(0)=="I"
            || t.toUpperCase().replace("(","").charAt(0)=="J" || t.toUpperCase().replace("(","").charAt(0)=="K"
            ).map((t,index)=><li key={index}><Link to="/" onClick={()=>authorFind(t)} >{t}</Link></li>)}
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

export default Title;