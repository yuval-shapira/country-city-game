import React, { useState } from "react";

export default function GameBoard({ data }) {
  const [dataArr, setDataArr] = useState(() => createDataArray(data));
  const [firstSelected, setFirstSelected] = useState(null);
  const [wrongGuesses, setWrongGuesses] = useState(null);

  function createDataArray(data) {
    let objToArr = Object.entries(data);
    const tempArr = [];
    for (let i = 0; i < objToArr.length; i++) {
      tempArr.push(objToArr[i][0], objToArr[i][1]);
    }
    const rndArr = [];
    while (tempArr.length > 0) {
      const rnd = Math.floor(Math.random() * tempArr.length);
      rndArr.push(tempArr[rnd]);
      tempArr.splice(rnd, 1);
    }
    return rndArr;
  }
  function changeDataArray(dataArr, index) {
    if (index > firstSelected[1]) {
      dataArr.splice(index, 1);
      dataArr.splice(firstSelected[1], 1);
    } else {
      dataArr.splice(firstSelected[1], 1);
      dataArr.splice(index, 1);
    }
    return dataArr;
  }
  function handleClick(select, index) {
    setWrongGuesses(null);
    if (index !== firstSelected?.[1]) {
      if (firstSelected === null) {
        setFirstSelected([select, index]);
      } else {
        if (
          data[select] === firstSelected[0] ||
          data[firstSelected[0]] === select
        ) {
          setDataArr(changeDataArray(dataArr, index));
        } else {
          const wringFirstSelected = firstSelected[1];
          setWrongGuesses({index, wringFirstSelected});
        }
        setFirstSelected(null);
      }
    }
  }
  return (
    <div className="buttons">
      {dataArr.map((item, index) => {
        return (
          <div
            key={index}
            className={"button" 
            + (firstSelected?.[1] === index ? " selected" : "") 
            + (wrongGuesses?.index === index || wrongGuesses?.wringFirstSelected === index ? " wrong" : "")}  
            onClick={() => handleClick(item, index)}
          >
            {item} 
          </div>
        );
      })}
    </div>
  );
}
