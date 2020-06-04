import React from 'react';


const AuthorsTitles = ({ authorsTitles, authorsTitlesFind, duplicateSearch, foundBooks,allAlphaSeries }) => {
  const handleAuthorRender = (series) => {
    const array_authorsTitles_by_alpha = alpha => authorsTitles.filter(b => b.toUpperCase().replace("(", "")[0] === alpha);

    const authorsTitles_by_alpha = alpha => {
      if (alpha != "Z") {
        return (array_authorsTitles_by_alpha(alpha).map((one_author, index) => {
          return <li key={index} onClick={() => {authorsTitlesFind(one_author);window.scrollTo(0,300)}} >{one_author}</li>
        }))
      } else {
        return (authorsTitles.slice(authorsTitles.indexOf(authorsTitles.find((e) => e[0] === "Z")), authorsTitles.length).map((b, index) =>
          <li key={index} onClick={() => { authorsTitlesFind(b);window.scrollTo(0,300) }}>{b}</li>))
      }
    };
    return (series.map((alpha, index) => {
      return (
        <>
          <div>
            <h2 id={series[index]} onClick={()=>window.scrollTo(0,0)}>{series[index]}</h2>
            <ul className="authors">
              {authorsTitles_by_alpha(alpha)}
            </ul>
          </div>
        </>
      )
    }))
  }

  if (authorsTitles.length < 1) {
    return "Loading...";
  }
  return (
    <div className="container">
      <div className="columns">
        {duplicateSearch && <ul className="authors">{foundBooks.map((b, index) => <li key={index} onClick={() => authorsTitlesFind(b)}>{b}</li>)}</ul>}
        {!duplicateSearch &&
          <>
            {allAlphaSeries.map(series => {
              return (<div className="series_col">
                {handleAuthorRender(series)}
              </div>)
            })}
          </>}
      </div>
    </div>
  )
}


export default AuthorsTitles