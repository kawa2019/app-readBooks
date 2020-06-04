import React from 'react';

const Search = ({ setNameSearch, name_search, startToSearch, placeholderSearch,array_to_filter
  ,set_wt_found, propsForMain}) => {
  const myturn = () => {
    return (
      <form onSubmit={()=>startToSearch(name_search,array_to_filter,set_wt_found,propsForMain)}>
        <input value={name_search} onChange={e => setNameSearch(e.target.value.toLowerCase())} type="text" placeholder={placeholderSearch} />
        <input type="submit" className="button" />
      </form>)
  }
  return (
    <main id="search">
      <section className="container">
        <div className="row menu col-12">
          {myturn()}
        </div>
      </section>
    </main>
  )
}

export default Search;