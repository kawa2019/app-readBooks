import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const AuthorsTitles = ({ authorsTitles, authorsTitlesFind, duplicateSearch, foundBooks, allAlphaSeries }) => {
  const handleAuthorRender = (series) => {
    const array_authorsTitles_by_alpha = alpha => authorsTitles.filter(b => b.toUpperCase().replace("(", "")[0] === alpha);

    const authorsTitles_by_alpha = alpha => {
      if (alpha != "Z") {
        return (array_authorsTitles_by_alpha(alpha).map((one_author_title, index) => {
          return (<li key={index} onClick={() => { authorsTitlesFind(one_author_title); window.scrollTo(0, 300) }}>{one_author_title}</li>)
        }))
      } else {
        return (authorsTitles.slice(authorsTitles.indexOf(authorsTitles.find((one_author_title) => one_author_title[0] === "Z")), authorsTitles.length).map((one_author_title, index) => {
          return <li key={index} onClick={() => { authorsTitlesFind(one_author_title); window.scrollTo(0, 300) }}>{one_author_title}</li>
        }))
      }
    };
    return (series.map((alpha, index) => {
      return (
        <>
          <div>
            <h2 id={series[index]} onClick={() => window.scrollTo(0, 0)}>{series[index]}</h2>
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
        {duplicateSearch && <div className="series_col">
          <ul className="authors">{foundBooks.map((one_author_title, index) => {
            return (<li key={index}>
              <ScrollLink to="search" onClick={() => authorsTitlesFind(one_author_title)} smooth={true} duration={0}>{one_author_title}</ScrollLink>
            </li>)
          })}</ul>
        </div>}
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