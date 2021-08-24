import React from 'react'
import PadItem from './PadItem'
import { resultAction, operatorAction } from '../actions'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { keyList } from './KeyList'

import { isCalAble } from "../actions"

function Pad() {

    const operatorStr = useSelector(state => state.operator)
    const calStatus = useSelector(state => state.isCalAble)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(operatorStr)
        dispatch(isCalAble(operatorStr))
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
                style={{ background: "#9bc8ca" }}
                symbol={e} 
                onClick={() => e === "=" ? 
                    (
                        calStatus && 
                        dispatch(operatorAction(e)) && 
                        dispatch(resultAction(eval(operatorStr)))
                    ) : 
                    dispatch(operatorAction(e))
                }
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