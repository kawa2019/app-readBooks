import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
export default ({books}) => {
    console.log(books)
    // const fragmentTextBookFun = id => {
    //     const oneBook = fragmentTextBook.find(book => book.id === id)
    //     if (typeof oneBook !== "undefined") {
    //         const bookText = oneBook.html
    //         return <div className="fragment" dangerouslySetInnerHTML={{ __html: bookText }}></div>
    //     } else {
    //         return "loading..."
    //     }
    // }

    // const coverFun = id => {
    //     const oneBook = fragmentTextBook.find(book => book.id === id)
    //     if (typeof oneBook !== "undefined") {
    //         return <div className='cover' style={{ backgroundImage: `url(${oneBook.cover})` }}></div>
    //     } else {
    //         return "loading..."
    //     }
    // }
    //a
  return (
    <>
      <section>
        <div className="container all-books">
            {books.lenght===0?'Loading...':books.map(book => {
                    return (
                        <article key={book.slug} className='elem'>
                            <div className='left-side' >
                                {/*{coverFun(book.href)}*/}
                                <span className="textUnderCover">
                    <a href={book.url} target="_blank  " className="title">{book.title}</a>
                    <p className="author">{book.author}</p>
                                    {/*{fragmentTextBookFun(book.href)}*/}
                  </span>
                            </div>
                            <div className='right-side'>
                                <h2>Pobierz:</h2>
                                <ul>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/html/${book.slug}.html`} rel="noopener noreferrer">Zacznij czytać</a>
                                    </li>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/pdf/${book.slug}.pdf`} rel="noopener noreferrer">Pobierz pdf</a>
                                    </li>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/epub/${book.slug}.epub`} rel="noopener noreferrer">Pobierz epub</a>
                                    </li>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/mobi/${book.slug}.mobi`} rel="noopener noreferrer">Pobierz mobi</a>
                                    </li>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/txt/${book.slug}.txt`} rel="noopener noreferrer">Pobierz txt</a>
                                    </li>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/fb2/${book.slug}.fb2b`} rel="noopener noreferrer">Pobierz fb2</a>
                                    </li>
                                    <li><a target="_blank" href={`https://wolnelektury.pl/media/book/xml/${book.slug}.xml`} rel="noopener noreferrer">Pobierz xml</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    )
                })}}
        </div>
      </section >
      <Pagination/>
    </>
  )
}