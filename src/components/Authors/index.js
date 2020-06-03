import React from 'react';

const allAlphaSeries = [["A", "B", "C", "D", "D", "E", "F", "G"],
["H", "I", "J", "K", "L", "M"], ["N", "O", "P", "R", "S", "T", "V", "W", "Z"]]
const Authors = ({ author, authorFind, duplicateSearch, foundBooks }) => {
  const handleAuthorRender = (series) => {
    const array_authors_by_alpha = alpha => author.filter(b => b[0] === alpha);

    const authors_by_alpha = alpha => {
      if (alpha != "Z") {
        return (array_authors_by_alpha(alpha).map((one_author, index) => {
          return <li key={index} onClick={() => authorFind(one_author)} >{one_author}</li>
        }))
      } else {
        return (author.slice(author.indexOf(author.find((e) => e[0] === "Z")), author.length).map((b, index) =>
          <li key={index} onClick={() => { authorFind(b) }}>{b}</li>))
      }
    };
    return (series.map((alpha, index) => {
      return (
        <>
          <a id={series[index]}></a>
          <div>
            <h2><a href="">{series[index]}</a></h2>
            <ul className="authors">
              {authors_by_alpha(alpha)}
            </ul>
          </div>
        </>
      )
    }))
  }

  if (author.length < 1) {
    return "Loading...";
  }
  return (
    <div className="container">
      <div className="columns">
        {duplicateSearch && <ul className="authors">{foundBooks.map((b, index) => <li key={index} onClick={() => authorFind(b)}>{b}</li>)}</ul>}
        {!duplicateSearch &&
          <>
            {allAlphaSeries.map(series => {
              return (<div className="series_col">
                {handleAuthorRender(series)}
              </div>)
            })}

            {/* <ul className="authors">
              {author.filter(b => b[0] === "A" || b[0] === "B"
                || b[0] === "C" || b[0] === "D" || b[0] === "E" || b[0] === "F"
                || b[0] === "G").map((b, index) => <li key={index} onClick={() => authorFind(b)} >{b}</li>)}
            </ul>
            <ul className="authors">
              {author.filter(b =>
                b[0] === "H" || b[0] === "I" || b[0] === "J" || b[0] === "K" || b[0] === "L" ||
                b[0] === "M").map((b, index) => <li key={index} onClick={() => authorFind(b)}>{b}</li>)}
            </ul>
            <ul className="authors">
              {author.filter(b =>
                b[0] === "N" || b[0] === "O" || b[0] === "P"
                || b[0] === "R" || b[0] === "S" || b[0] === "T"
                || b[0] === "V" || b[0] === "W").map((b, index) => <li key={index} onClick={() => authorFind(b)}>{b}</li>)}
              {author.slice(author.indexOf(author.find((e) => e[0] === "Z")), author.length).map((b, index) =>
                <li key={index} onClick={() => { authorFind(b) }}>{b}</li>)}
            </ul> */}
          </>}
      </div>
    </div>
  )
}


export default Authors