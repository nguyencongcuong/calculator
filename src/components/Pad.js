import React from 'react'
import PadItem from './PadItem'
import { operatorString, operatorReset, operatorBack, operatorEqual, result } from '../actions'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import { keyList } from './KeyList'

function Pad() {

    const operatorCurrentString = useSelector(state => state.operatorReducer)
    const dispatch = useDispatch()

    // ? Check if the state operater matchs the string "+, -, *, /" at the beginning and the bottom of the tring
    const isCalAble = () => {
        const regex = new RegExp(/^(\+|-|\*|\/)|(\+|-|\*|\/)$/, "g")
        const regex2 = new RegExp(/\./, "g")
        const matchedItems = operatorCurrentString.match(regex)
        const match2 = operatorCurrentString.match(regex2)
        if (matchedItems === null) {
            return true
        } else {
            if (matchedItems.length !== 0) {
                return false
            } else if (match2.length >= 2) {

            } else {
                return true
            }
        }
    }

    // ? Match 2 or more +, -, *, /

    const isInputError = () => {
        const regex1 = new RegExp(/(^\.)|(\.{2,})|(\D{2,})/, "g")
        const regex2 = new RegExp(/\./, "g")

        return  (operatorCurrentString.match(regex1) !== null) || 
                (operatorCurrentString.match(regex2) !== null && 
                operatorCurrentString.match(regex2).length >= 2) ? 
                true : 
                false
    }

    const handleClick = (element) => {
        if (isInputError() && element !== "AC" && element !== "<") {
            console.log("Lỗi nhập. Không thể nhập tiếp.")
        } else {
            if (element === "AC") {

                dispatch(operatorReset())
                dispatch(result(""))

            } else if (element === "<") {

                dispatch(operatorBack())

            } else if (element === "=") {

                dispatch(result(eval(operatorCurrentString)))
                dispatch(operatorEqual(operatorCurrentString))

            } else if (element === "") {

            } else {

                dispatch(operatorString(element))

            }
        }
        
    }


    useEffect(() => {
        isCalAble() && !isInputError() && dispatch(result(eval(operatorCurrentString)))
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
        <div className="grid grid-cols-4 gap-1">
            { PadItems() }
        </div>
    )
}

export default Pad