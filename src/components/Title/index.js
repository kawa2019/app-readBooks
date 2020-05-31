import React from 'react';

const Title = ({ authorFind, title, foundTitles, duplicateSearchT }) => {

  const handleList = () => {
    const lists = document.querySelectorAll('.authors');
    if (lists.length >= 3) {
      //let txtValue1;
      for (let i = 0; i < lists.length; i++) {
        const oneListLenght = lists[i].querySelectorAll('li').length
        for (let j = 0; j < oneListLenght; j++) {
          const li = lists[i].getElementsByTagName('li')[j];
           const txtValue1 = li.textContent || li.innerText
          switch (txtValue1.toUpperCase().replace("(", "").charAt(0)) {
            case "A":
              li.setAttribute("id", "A");
              break;
            case "B":
              li.setAttribute("id", "B");
              break;
            case "C":
              li.setAttribute("id", "C");
              break;
            case "D":
              li.setAttribute("id", "D");
              break;
            case "E":
              li.setAttribute("id", "E");
              break;
            case "F":
              li.setAttribute("id", "F");
              break;
            case "G":
              li.setAttribute("id", "G");
              break;
            case "H":
              li.setAttribute("id", "H");
              break;
            case "I":
              li.setAttribute("id", "I");
              break;
            case "J":
              li.setAttribute("id", "J");
              break;
            case "K":
              li.setAttribute("id", "K");
              break;
            case "L":
              li.setAttribute("id", "L");
              break;
            case "M":
              li.setAttribute("id", "M");
              break;
            case "N":
              li.setAttribute("id", "N");
              break;
            case "O":
              li.setAttribute("id", "O");
              break;
            case "P":
              li.setAttribute("id", "P");
              break;
            case "R":
              li.setAttribute("id", "R");
              break;
            case "S":
              li.setAttribute("id", "S");
              break;
            case "Ś":
              li.setAttribute("id", "Ś");
              break;
            case "T":
              li.setAttribute("id", "T");
              break;
            case "U":
              li.setAttribute("id", "U");
              break;
            case "V":
              li.setAttribute("id", "V");
              break;
            case "W":
              li.setAttribute("id", "W");
              break;
            case "Z":
              li.setAttribute("id", "Inne");
              break
          }       
        }
      }

    }
    
  }
  console.log(1)
  console.log(handleList())
  if (title.length < 1) {
    return "Loading ..."
  }
  return (
    <>  
      <div className="container columns">
        {duplicateSearchT && <ul className="authors">{foundTitles.map((t, index) => <li key={index} onClick={() => authorFind(t)}>{t}</li>)}</ul>}
        {!duplicateSearchT &&
          <>
            <ul className="authors">
              {title.filter(t => t.toUpperCase().replace("(", "").charAt(0) === "A" || t.toUpperCase().replace("(", "").charAt(0) === "B"
                || t.toUpperCase().replace("(", "").charAt(0) === "C" || t.toUpperCase().replace("(", "").charAt(0) === "D" || t.toUpperCase().replace("(", "").charAt(0) === "E" || t.toUpperCase().replace("(", "").charAt(0) === "F"
                || t.toUpperCase().replace("(", "").charAt(0) === "G" || t.toUpperCase().replace("(", "").charAt(0) === "H" || t.toUpperCase().replace("(", "").charAt(0) === "I"
                || t.toUpperCase().replace("(", "").charAt(0) === "J" || t.toUpperCase().replace("(", "").charAt(0) === "K"
              ).map((t, index) => <li key={index} onClick={() => authorFind(t)} >{t}</li>)}
            </ul>
            <ul className="authors">
              {title.filter(t => t.toUpperCase().replace("(", "").charAt(0) === "L" || t.toUpperCase().replace("(", "").charAt(0) === "M" || t.toUpperCase().replace("(", "").charAt(0) === "N" || t.toUpperCase().replace("(", "").charAt(0) === "O"
                || t.toUpperCase().replace("(", "").charAt(0) === "P").map((t, index) => <li key={index} onClick={() => authorFind(t)}>{t}</li>)}
            </ul>
            <ul className="authors">
              {title.filter(t =>
                t.toUpperCase().replace("(", "").charAt(0) === "R" ||
                t.toUpperCase().replace("(", "").charAt(0) === "S" || t.toUpperCase().replace("(", "").charAt(0) === "Ś" || t.toUpperCase().replace("(", "").charAt(0) === "T"
                || t.toUpperCase().replace("(", "").charAt(0) === "V" ||
                t.toUpperCase().replace("(", "").charAt(0) === "W").map((t, index) => <li key={index} onClick={() => authorFind(t)}>{t}</li>)}
              {title.slice(title.indexOf(title.find((e) => e.toUpperCase().replace("(", "").charAt(0) === "Z")), title.length).map((t, index) =>
                <li key={index} onClick={() => { authorFind(t) }}>{t}</li>)}
            </ul>
                      
          </>} 
      </div>
    </>
  )
}

export default Title