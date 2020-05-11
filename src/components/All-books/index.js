import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination'
const All = ({ books, counter, setCounter, booksNumber }) => {
  const [fragmentTextBook, setFragmentTextBook] = useState([]);
  useEffect(() => {
    setFragmentTextBook([]);
    books.map(book => {
      fetch(book.href)
        .then(response => response.json())
        .then(response => {
          if (response.fragment_data !== null && !fragmentTextBook.includes(response.fragment_data.html)) {
            setFragmentTextBook(prevState => [...prevState, { id: book.href, html: response.fragment_data.html, cover: response.cover }])
          } else {
            setFragmentTextBook(prevState => [...prevState, { id: book.href, html: "", cover: response.cover }])
          }
        })
    }
    )
  }, [books])
  const fragmentTextBookFun = id => {
    const oneBook = fragmentTextBook.find(book => book.id === id)
    if (typeof oneBook !== "undefined") {
      const bookText = oneBook.html
      return <div className="fragment" dangerouslySetInnerHTML={{ __html: bookText }}></div>
    } else {
      return "loading..."
    }
  }

  const coverFun = id => {
    const oneBook = fragmentTextBook.find(book => book.id === id)
    if (typeof oneBook !== "undefined") {
      return <div className='cover' style={{ backgroundImage: `url(${oneBook.cover})` }}></div>
    } else {
      return "loading..."
    }
  }
  //array of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(booksNumber / 10); i++) {
    pageNumbers.push(i);
  }
  if (books.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <section>
        <div className="container all-books">
          {books.map(p => {
            return (
              <article key={p.slug} className='elem'>
                <div className='left-side' >
                  {coverFun(p.href)}
                  <span className="textUnderCover">
                    <a href={p.url} target="_blank  " className="title">{p.title}</a>
                    <p className="author">{p.author}</p>
                    {fragmentTextBookFun(p.href)}
                  </span>
                </div>
                <div className='right-side'>
                  <h2>Pobierz:</h2>
                  <ul>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/html/${p.slug}.html`} rel="noopener noreferrer">Zacznij czytać</a>
                    </li>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/pdf/${p.slug}.pdf`} rel="noopener noreferrer">Pobierz pdf</a>
                    </li>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/epub/${p.slug}.epub`} rel="noopener noreferrer">Pobierz epub</a>
                    </li>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/mobi/${p.slug}.mobi`} rel="noopener noreferrer">Pobierz mobi</a>
                    </li>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/txt/${p.slug}.txt`} rel="noopener noreferrer">Pobierz txt</a>
                    </li>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/fb2/${p.slug}.fb2b`} rel="noopener noreferrer">Pobierz fb2</a>
                    </li>
                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/xml/${p.slug}.xml`} rel="noopener noreferrer">Pobierz xml</a>
                    </li>
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section >
      <Pagination setCounter={setCounter} pageNumbers={pageNumbers} counter={counter} />
    </>
  )
}
export default All;