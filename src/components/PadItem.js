import React from 'react'

function PadItem(props) {
    return (
        <div
            id={props.id}
            className="bg-cyan-900 opacity-80 text-white cursor-pointer aspect-w-2 aspect-h-1 transition-all duration-500"
            style={props.style}
            onClick={props.onClick}>
            <div 
                className="flex justify-center items-center font-bold text-2xl">
                {props.symbol}
            </div>
        </div>
    )
}

export default PadItem