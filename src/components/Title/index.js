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
          switch (txtValue1.toUpperCase().replace("(", "")[0]) {
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
  const sortTitleA_K = () => {
    const titleFilter = title.filter(t => {
      return (t.toUpperCase().replace("(", "")[0] === "A" || t.toUpperCase().replace("(", "")[0] === "B"
        || t.toUpperCase().replace("(", "")[0] === "C" || t.toUpperCase().replace("(", "")[0] === "D" || t.toUpperCase().replace("(", "")[0] === "E" || t.toUpperCase().replace("(", "")[0] === "F"
        || t.toUpperCase().replace("(", "")[0] === "G" || t.toUpperCase().replace("(", "")[0] === "H" || t.toUpperCase().replace("(", "")[0] === "I"
        || t.toUpperCase().replace("(", "")[0] === "J" || t.toUpperCase().replace("(", "")[0] === "K"
      )
    })
    let titleFilterRenderId = [];


    // const example = (kamil)=>{
    //   return kamil
    // }
    // const titleFilterRenderStatement=()=>{
    //   if (titleFilter[i][0] && (titleFilterRenderIdInclude(titleFilter[i][0])[0]))
    // }
    // console.log(titleFilterRenderIdInclude("titleFilter[i]"[0])[0])
    for (let i = 0; i < titleFilter.length; i++) {
      const titleFilterRenderIdInclude = (character) => {
        const titleFilterRenderIdType = titleFilterRenderId.find(title => title.props.id === character)
        //console.log(titleFilterRenderIdType)
        if (typeof titleFilterRenderIdType === 'undefined') {
          return ""
        } else {
          return titleFilterRenderIdType
        }
      };
      // console.log(titleFilterRenderId)
      // const titleFilterRender = titleFilter.map((t, index) => {
      if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "A") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="A" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "B") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="B" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "C") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="C" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "D") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="D" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "E") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="E" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "F") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="F" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "G") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="G" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "H") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="H" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "I") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="I" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "J") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="J" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else if (titleFilterRenderIdInclude(titleFilter[i][0])[0] !== "K") {
        titleFilterRenderId = [...titleFilterRenderId, <li id="K" onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
      else {

        titleFilterRenderId = [...titleFilterRenderId, <li onClick={() => authorFind(titleFilter[i])} >{titleFilter[i]}</li>]
      }
    }
    // }

    // )

    return titleFilterRenderId.map(title => title)
  }

  const sortTitleL_P = () => {
    return (title.filter(t => {
      return (t.toUpperCase().replace("(", "")[0] === "L" || t.toUpperCase().replace("(", "")[0] === "M" || t.toUpperCase().replace("(", "")[0] === "N" || t.toUpperCase().replace("(", "")[0] === "O"
        || t.toUpperCase().replace("(", "")[0] === "P")
    })).map((t, index) => <li key={index} onClick={() => authorFind(t)}>{t}</li>)
  }

  const sortTitleR_W = () => {
    return title.filter(t => {
      return (
        t.toUpperCase().replace("(", "")[0] === "R" ||
        t.toUpperCase().replace("(", "")[0] === "S" || t.toUpperCase().replace("(", "")[0] === "Ś" || t.toUpperCase().replace("(", "")[0] === "T"
        || t.toUpperCase().replace("(", "")[0] === "V" ||
        t.toUpperCase().replace("(", "")[0] === "W")
    }).map((t, index) => <li key={index} onClick={() => authorFind(t)}>{t}</li>)
  }

  const sortTitleZ_Rest = () => {
    return title.slice(title.indexOf(title.find((e) => e.toUpperCase().replace("(", "")[0] === "Z")), title.length).map((t, index) => {
      return <li key={index} onClick={() => { authorFind(t) }}>{t}</li>
    })
  }

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
              {sortTitleA_K()}
            </ul>
            <ul className="authors">
              {sortTitleL_P()}
            </ul>
            <ul className="authors">
              {sortTitleR_W()}
              {sortTitleZ_Rest()}
            </ul>

          </>}
      </div>
    </>
  )
}

export default Title