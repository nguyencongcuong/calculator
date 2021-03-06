import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { resultAction, operatorAction, validateOperator } from '../actions'

import PadItem from './PadItem'
import { keyList } from './KeyList'

function Pad() {

    const operatorStr = useSelector(state => state.operator)
    const calStatus = useSelector(state => state.validation)
    const dispatch = useDispatch()

    const handleStyle = (e) => {
        return {
            opacity: (e === "=" && !calStatus) ? "0.5" : (e === "AC" || e === "<") && "1"
        }
    }

    useEffect(() => {
        dispatch(validateOperator(operatorStr))
    }, [operatorStr])

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
                symbol={e} 
                onClick={() => e === "=" ? (calStatus && dispatch(operatorAction(e)) && dispatch(resultAction(eval(operatorStr)))) : 
                    e === "AC" ? (dispatch(resultAction("")) && dispatch(operatorAction(e))) :
                    dispatch(operatorAction(e))
                }
                style={handleStyle(e)}
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