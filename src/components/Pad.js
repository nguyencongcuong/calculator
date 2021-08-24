import React from 'react'
import PadItem from './PadItem'
import { operatorString, operatorReset, operatorBack, operatorEqual, result } from '../actions'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { keyList } from './KeyList'

import { isInputAble, isCalAble } from "../actions"

function Pad() {

    const operatorCurrentString = useSelector(state => state.operator)
    const inputStatus = useSelector(state => state.isInputAble)
    const calStatus = useSelector(state => state.isCalAble)

    const dispatch = useDispatch()

    const handleClick = (element) => {
 
        if (!inputStatus && element !== "AC" && element !== "<") {
            console.log("Lỗi nhập. Không thể nhập tiếp.")
        } else {
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
                default:
                    dispatch(operatorString(element))
                    break
            }
        }
    }


    useEffect(() => {
        dispatch(isInputAble(operatorCurrentString))
        dispatch(isCalAble(operatorCurrentString))
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
                style={{ background: `${e === "<" && (inputStatus ? "#9bc8ca" : "#6aacaf")}` }}
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