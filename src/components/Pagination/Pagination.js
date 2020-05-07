import React, { useState } from "react";

export default function ({ pageNumbers, setCounter, counter }) {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [minusPage2, setMinusPage2] = useState(1);
    const [plusPage2, setPlusPage2] = useState(1);
    //index to slice
    const indexOfLastTodoPage = currentPageNumber * 6;
    const indexOfFirstTodoPage = indexOfLastTodoPage - 6;
    //border of page
    const myBorderPage = (param1) => {
        let style = {}
        if (counter == param1) {
            return style = {
                border: "0.075rem solid #3c3c3c"
            }
        }
    }
    //display pages
    const renderPageNumbers = pageNumbers.slice(indexOfFirstTodoPage, indexOfLastTodoPage).map(number => {
        return (
            <span
                className="active"
                key={number}
                id={number}
                style={myBorderPage(number)}
                onClick={e => setCounter(e.target.id)}
            >
                {number}
            </span>
        );
    });
    const handleMinusPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber(prevState => prevState - 1)
        }
    }

    const handlePlusPage = () => {
        if (currentPageNumber < (pageNumbers.length / 6)) {
            setCurrentPageNumber(prevState => prevState + 1)
        }
    }


    return (
        <div className="pagination">
            <span className='active' onClick={() => setCurrentPageNumber(1)}>&laquo;</span>
            <span className='active' onClick={handleMinusPage}>&lt;</span>
            {renderPageNumbers}
            <span className='active' onClick={handlePlusPage}>&gt;</span>
            <span className='active' onClick={() => setCurrentPageNumber((pageNumbers.length / 6))}>&raquo;</span>
        </div>
    )
}