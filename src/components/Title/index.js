import React from 'react';

const Title = ({ authorFind, title, foundTitles, duplicateSearchT }) => {

  const handleList = () => {
    const lists = document.querySelectorAll('.authors');
    if (lists.length >= 3) {
      let txtValue = [];
      for (let i = 0; i < lists.length; i++) {
        const oneListLenght = lists[i].querySelectorAll('li').length
        console.log(oneListLenght)
        for (let j = 0; j < oneListLenght; j++) {
          const li = lists[i].getElementsByTagName('li')[j];
          let txtValue1 = li.textContent || li.innerText
          switch (txtValue1.toUpperCase().replace("(", "").charAt(0)) {
            case "A":
              li.classList.add("A");
              break;
            case "B":
              li.classList.add("B");
              break;
            case "C":
              li.classList.add("C");
              break;
            case "D":
              li.classList.add("D");
              break;
            case "E":
              li.classList.add("E");
              break;
            case "F":
              li.classList.add("F");
              break;
            case "G":
              li.classList.add("G");
              break;
            case "H":
              li.classList.add("H");
              break;
            case "I":
              li.classList.add("I");
              break;
            case "J":
              li.classList.add("J");
              break;
            case "K":
              li.classList.add("K");
              break;
            case "L":
              li.classList.add("L");
              break;
            case "M":
              li.classList.add("M");
              break;
            case "N":
              li.classList.add("N");
              break;
            case "O":
              li.classList.add("O");
              break;
            case "P":
              li.classList.add("P");
              break;
            case "R":
              li.classList.add("R");
              break;
            case "S":
              li.classList.add("S");
              break;
            case "Ś":
              li.classList.add("Ś");
              break;
            case "T":
              li.classList.add("T");
              break;
            case "U":
              li.classList.add("U");
              break;
            case "V":
              li.classList.add("V");
              break;
            case "W":
              li.classList.add("W");
              break;
            case "Z":
              li.classList.add("Inne");
              break
          }
        }
      }
      return txtValue
    }
  }
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