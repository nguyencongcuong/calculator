import React from 'react'
import PadItem from './PadItem'
import { operatorString, operatorReset, operatorBack, operatorEqual, result } from '../actions'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

function Pad() {

    const operatorCurrentString = useSelector(state => state.operatorReducer)
    const operatorResult = useSelector(state => state.resultReducer)
    const dispatch = useDispatch()

    // ? Check if the state operater matchs the string "+, -, *, /" at the beginning and the bottom of the tring
    const isMatch = () => {
        const regex = new RegExp(/^(\+|\-|\*|\/)|(\+|\-|\*|\/)$/, "g")
        const matchedItems = operatorCurrentString.match(regex)
        if (matchedItems === null) {
            return false
        } else {
            return matchedItems.length !== 0 ? true : false
        }
    }

    // ? Match 2 or more +, -, *, /
    const regex2 = new RegExp(/\D{2,}/, "g")

    const keyList = [
        "AC",
        "<",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "=",
        "0",
        "."
    ]

    const handleClick = (element) => {
        if(element === "AC") {

            dispatch(operatorReset())
            dispatch(result(""))

        } else if (element === "<") {

            dispatch(operatorBack())

        } else if(element === "=") {

            dispatch(result(eval(operatorCurrentString)))
            dispatch(operatorEqual(operatorCurrentString))

        } else {

            dispatch(operatorString(element))  

        }
    }


    

    useEffect(() => {
        if (!isMatch()) {
            return dispatch(result(eval(operatorCurrentString)))
        }
        if (operatorCurrentString.match(regex2) !== null) {
            dispatch(operatorReset())
        }
    }, [operatorCurrentString])

    const PadItems = () => {
        return keyList.map(e => 
            <PadItem 
                key={e} 
                id={
                    e === "+" ? "key-plus" :
                    e === "-" ? "key-minus" :
                    e === "*" ? "key-multiply" :
                    e === "/" ? "key-division" :
                    e === "." ? "key-decimal" :
                    e === "=" ? "key-equal" :
                    e === "<" ? "key-back" :
                    `key-${e}`
                }
                style={{ background: `${e === "AC" && "#d17354"}` }}
                symbol={e} 
                onClick={() => handleClick(e)}
                />
            )
    }

    return (
        <div className="grid grid-cols-4">
            { PadItems() }
        </div>
    )
}

export default Pad