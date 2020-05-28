import React from 'react';

const Search = ({ setName, name, startToSearch, numberForm, beginToSearch, beginToSearchT, searchAuthor,
  searchTitle, setSearchAuthor, setSearchTitle }) => {
  const myturn = (numberForm) => {
    if (numberForm === 1|| numberForm===window.location.href) {
      return (
        <form onSubmit={startToSearch}>
          <input value={name} onChange={e => setName(e.target.value.toLowerCase())} type="text" placeholder="wpisz tytuł,autora,tytuł,rodzaj,gatunek" />
          <input type="submit" className="button" />
        </form>
      )
    } else if (numberForm === 2 || window.location.href==="http://localhost:3000/?#/search/title") {
      return (<form onSubmit={beginToSearchT}>
        <input value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} type="text" placeholder="podaj tytuł..." />
        <input type="submit" className="button" />
      </form>)
    } else {
      return (<form onSubmit={beginToSearch}>
        <input value={searchAuthor} onChange={e => { return setSearchAuthor(e.target.value) }} type="text" placeholder="podaj autora..." />
        <input type="submit" className="button" />
      </form>)
    }
  }
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

export default Search;