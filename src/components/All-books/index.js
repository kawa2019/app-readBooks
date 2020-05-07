import React,{useState,useEffect} from 'react';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
 const All = ({books, handleClick,minusPage,plusPage,pages})=>{
   
    if (books.length==0){
        return <h1>Loading...</h1>
    }    

     return (
        <article className='container'>
          {books.map((p)=>{ 
           return ( 
          <section  key={p.slug} className='row elem'>
            <div className='col-4 cover'>
              <img src={p.simple_thumb}/>
            </div>
            <div className='col-8 right-side' >
              <a href={p.url} target="_blank  " className="title">{p.title}</a>
              <p className="author">{p.author}</p> 
              <p className="fragment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ut magnam dolor, minus hic recusandae cumque libero quod incidunt perspiciatis ad aut architecto, modi pariatur fuga voluptatem culpa mollitia eaque.
              </p>
              <a  className="wolneLektury" href={`https://wolnelektury.pl/media/book/pdf/${p.slug}.pdf`} >zacznij czytać</a>
              <div className='downL'>
              <a target="_blank" href={`https://wolnelektury.pl/media/book/pdf/${p.slug}.pdf`}>Pobierz pdf</a>
              <a target="_blank" href={`https://wolnelektury.pl/media/book/epub/${p.slug}.epub`}>Pobierz epub</a>
              <a target="_blank" href={`https://wolnelektury.pl/media/book/mobi/${p.slug}.mobi`}>Pobierz mobi</a>
              <a target="_blank" href={`https://wolnelektury.pl/media/book/html/${p.slug}.html`}>Pobierz html</a>
              <a target="_blank" href={`https://wolnelektury.pl/media/book/txt/${p.slug}.txt`}>Pobierz txt</a>
              <a target="_blank" href={`https://wolnelektury.pl/media/book/fb2/${p.slug}.fb2b`}>Pobierz fb2</a>             
              <a target="_blank" href={`https://wolnelektury.pl/media/book/xml/${p.slug}.xml`}>Pobierz xml</a>
              </div>
            </div> 
          </section>)})}
          <div className="pagination">
          <a className='active'  href="#">&laquo;</a>
          <a className='active'  href="#" onClick={minusPage}>&lt;</a>          
            {pages.map((number, item)=> {   
              return (
              <a className='active'  href="#" key={item} onClick={(e)=>{e.preventDefault(); handleClick(number)}}>{number}</a>
               )})}
             <a className='active'  href="#" onClick={plusPage}>&gt;</a>             
            <a className='active' href="#">&raquo;</a>
          </div>  
        </article>
        
     )
 }
 

 export default All;
       
      //   <ul>
      //     {value.map((p,index)=>{ 
      //      return (<li key={index}>
      //        <img src={p.simple_thumb} style={{}}/>
      //        <h2>{p.title}</h2>
      //        <p>{p.author}</p>
      //     </li>)})}
      //   </ul>
//coś z childem problem z mapowaniem po tablicy 
 //1.<ul>
 //{value.map(p=><li>{p}</li>)}
 //</ul>


//  <div className="pagination">
//         <a className='active' href="#">&laquo;</a>
//         <a className='active' href="#">1</a>
//         <a className='active' href="#">2</a>
//         <a className='active' href="#">3</a>
//         <a className='active' href="#">4</a>
//         <a className='active' href="#">5</a>
//         <a className='active' href="#">6</a>
//         <a className='active' href="#">&raquo;</a>
//       </div>   


//  setPages(prevState=>[...prevState,prevState.length])
    // setPages(prevState=>prevState.splice(1,prevState.length-1))

    // const [valueD,setDaisy] = useState([]);

    // const scope= value1.length/10 ;
    //   const array = Array.from({length:scope},(v, k) => k);