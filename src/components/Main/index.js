import React,{useState,useEffect} from 'react';

const Main =({setter,value,startToSearch
})=>{  
    return (
      <main>
        <section className="container">
          <div className="row menu col-12">
            <form onSubmit={startToSearch}>
                <input  value={value} onChange={e=>setter(e.target.value)} type="text" placeholder="wpisz tytuł,autora,tytuł,rodzaj,gatunek"/>
                <input type="submit" className="button"/>
            </form>
          </div>       
        </section> 
        </main>    
    )
}

export default Main;



// const search_books=()=>{
    //   let foundBooks = objBooks.filter(x=>{
    //      if(name.length>=1)
    //       return  (x.title.toLowerCase().includes(name))})
    //       setFiltered(foundBooks)
    //       console.log(foundBooks)}
          