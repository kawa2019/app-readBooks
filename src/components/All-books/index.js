import React from 'react';
import Pagination from '../Pagination/Pagination'
const All = ({ books, counter, setCounter, booksNumber }) => {

  //array of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(booksNumber / 10); i++) {
    pageNumbers.push(i);
  }

  if (books.length == 0) {
    return <h1>Loading...</h1>
  }

  return (
    <article>
      <div className="container">
        {books.map((p) => {
          return (
            <section key={p.slug} className='row elem'>
              <div className='col-4 cover'>
                <img src={p.simple_thumb} />
              </div>
              <div className='col-8 right-side' >
                <a href={p.url} target="_blank  " className="title">{p.title}</a>
                <p className="author">{p.author}</p>
                <p className="fragment">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum ut magnam dolor, minus hic recusandae cumque libero quod incidunt perspiciatis ad aut architecto, modi pariatur fuga voluptatem culpa mollitia eaque.
              </p>
                <a className="wolneLektury" href={`https://wolnelektury.pl/media/book/pdf/${p.slug}.pdf`} >zacznij czytać</a>
                <div className='downL'>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/pdf/${p.slug}.pdf`} rel="noopener noreferrer">Pobierz pdf</a>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/epub/${p.slug}.epub`} rel="noopener noreferrer">Pobierz epub</a>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/mobi/${p.slug}.mobi`} rel="noopener noreferrer">Pobierz mobi</a>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/html/${p.slug}.html`} rel="noopener noreferrer">Pobierz html</a>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/txt/${p.slug}.txt`} rel="noopener noreferrer">Pobierz txt</a>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/fb2/${p.slug}.fb2b`} rel="noopener noreferrer">Pobierz fb2</a>
                  <a target="_blank" href={`https://wolnelektury.pl/media/book/xml/${p.slug}.xml`} rel="noopener noreferrer">Pobierz xml</a>
                </div>
              </div>
            </section>)
        })}
        <Pagination setCounter={setCounter} pageNumbers={pageNumbers} counter={counter} />
      </div>
    </article>
  )
}


export default All;