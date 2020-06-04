import React from 'react';

const Search = ({ setNameSearch, name_search, startToSearch, placeholderSearch }) => {
  const myturn = () => {
    return (
      <form onSubmit={startToSearch}>
        <input value={name_search} onChange={e => setNameSearch(e.target.value.toLowerCase())} type="text" placeholder={placeholderSearch} />
        <input type="submit" className="button" />
      </form>)
  }
  return (
    <main>
      <section className="container">
        <div className="row menu col-12">
          {myturn()}
        </div>
      </section>
    </main>
  )
}

export default Search;