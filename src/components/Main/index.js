import React from 'react';

const Main =({setter,value,startToSearch,numberForm,beginToSearch,beginToSearchT,searchAuthor,
searchTitle,setSearchAuthor,setSearchTitle})=>{
   const myturn =(numberForm)=>{ if(numberForm==1){
      return (
        <form onSubmit={startToSearch}>
                <input  value={value} onChange={e=>setter(e.target.value.toLowerCase())} type="text" placeholder="wpisz tytuł,autora,tytuł,rodzaj,gatunek"/>
                <input type="submit" className="button"/>
        </form>
      )
    } else if (numberForm==2) {
      return ( <form onSubmit={beginToSearchT}>
        <input  value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)} type="text" placeholder="podaj tytuł..."/>
        <input type="submit" className="button"/>
  </form>)
    } else {
      return (<form onSubmit={beginToSearch}>
        <input  value={searchAuthor} onChange={e=>{ return setSearchAuthor(e.target.value)}} type="text" placeholder="podaj autora..."/>
        <input type="submit" className="button"/>
</form>)
    }}
    return (
      <main>
        <section className="container">
          <div className="row menu col-12">
           {myturn(numberForm)}
            
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
          