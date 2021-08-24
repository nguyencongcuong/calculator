import React from 'react'
import { useSelector } from "react-redux"

function Operator() {
    const operator = useSelector(state => state.operator)
    return (
        <div
            id="display"
            style={{ color: "#9bc8ca" }}
            className="flex flex-wrap text-lg h-10">
            <span className="block w-full overflow-scroll scrollbar--removed">{operator}</span>
        </div>
    )
}

function Result() {
    const result = useSelector(state => state.result)
    return (
        <span 
            className="text-4xl font-bold text-gray-800 h-16">
            <span className="block w-full overflow-scroll scrollbar--removed">{result}</span>
        </span>
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