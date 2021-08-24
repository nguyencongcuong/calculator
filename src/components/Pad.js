import React from 'react'
import PadItem from './PadItem'
import { operator_1, operatorString, operatorReset, operatorBack, operatorEqual, result } from '../actions'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { keyList } from './KeyList'

import { isCalAble } from "../actions"

function Pad() {

    let operatorCurrentString = useSelector(state => state.operator)
    
    let calStatus = useSelector(state => state.isCalAble)

    const dispatch = useDispatch()

    const handleClick = (element) => {

        // two decimal "." cannot be accepted
        if (operatorCurrentString.match(/\./, "g")) {
            if (element === ".") {
                const regex1 = new RegExp(/(^\.)|[0-9]\.\.|([0-9]\.[0-9]\.)/, "g")
                if (operatorCurrentString.concat(".").match(regex1) !== null) {
                    return
                }
            }
        }
 
        // two numbers zero cannot be accepted
        if (operatorCurrentString.match(/^0/, "g")) {
            if (element === "0") {
                const regex2 = new RegExp(/^00/, "g")
                if (operatorCurrentString.concat("0").match(regex2) !== null) {
                    return
                }
            }
        }

        // two operater next to each other,
        if (operatorCurrentString.match(/\+|\-|\*|\//, "g")) {
            
            //  excluding *-, /-
            if (element === "+" || element === "-" || element === "*" || element === "/") {
                const regex3 = new RegExp(/(\+(\+|\-|\*|\/))|(\-(\-|\+|\*|\/))|(\*(\+|\*|\/))|(\/(\+|\*|\/))/, "")
                if (operatorCurrentString.concat(element).match(regex3) !== null) {
                   
                    dispatch(operator_1(element))

                }
            }
        }


        switch(element) {
            case "AC":
                dispatch(operatorReset())
                dispatch(result(""))
                break
            case "<":
                dispatch(operatorBack())
                break
            case "=":
                calStatus
                && dispatch(operatorEqual(operatorCurrentString)) 
                && dispatch(result(eval(operatorCurrentString)))
                break
            case ".":
                dispatch(operatorString(element))
                break
            default:
                dispatch(operatorString(element))
                break
        }

    }


    useEffect(() => {
        dispatch(isCalAble(operatorCurrentString))
    }, [operatorCurrentString])

    const PadItems = () => {
        return keyList.map(e => 
            <PadItem 
                key={e} 
                id={
                    e === "AC" ? "clear" :
                    e === "+" ? "add" :
                    e === "-" ? "subtract" :
                    e === "*" ? "multiply" :
                    e === "/" ? "divide" :
                    e === "." ? "decimal" :
                    e === "=" ? "equals" :
                    e === "<" ? "key-back" :
                    e === "0" ? "zero" :
                    e === "1" ? "one" :
                    e === "2" ? "two" :
                    e === "3" ? "three" :
                    e === "4" ? "four" :
                    e === "5" ? "five" :
                    e === "6" ? "six" :
                    e === "7" ? "seven" :
                    e === "8" ? "eight" :
                    e === "9" ? "nine" :
                    `key-${e}`
                }
                style={{ background: "#9bc8ca" }}
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