import React from 'react'
import { useSelector } from "react-redux"

function Operator() {
    const operator = useSelector(state => state.operatorReducer)
    return (
        <span className="text-lg h-10">{operator}</span>
    )
}

function Result() {
    const result = useSelector(state => state.resultReducer)
    return (
        <span className="text-4xl h-16">{result}</span>
    )
}

function Screen() {
    return (
        <div className="flex flex-col bg-white text-right font-bold font-mono px-4 py-8">
            <Operator />
            <Result />
        </div>
    )
}

export default Screen