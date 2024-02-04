import React, { useState } from "react"
import "./style.css";
import data from './data'
// single selection 
//multiple selection 
export default function Accordian() {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleSetMultipleSelected(getCurrentId) {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId)

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(cpyMultiple)


    }
    console.log(selected, multiple)
    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultiSelection(true)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ?
                    data.map(dataItem => (
                        <div className="item">
                            <div className="title"
                                key={data.id}
                                onClick={enableMultiSelection ?
                                    () => handleSetMultipleSelected(dataItem.id) :
                                    () => handleSingleSelection(dataItem.id)}>
                                <h3> {dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ||
                                    (multiple.includes(dataItem.id)) ?
                                    <div className="content"> {dataItem.answer}</div>
                                    : null
                            }
                        </div>
                    )) :
                    <div> No data found
                    </div>
                }
            </div>
        </div>
    )
}