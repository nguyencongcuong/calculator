import React from 'react'

function PadItem(props) {
    return (
        <div
            id={props.id}
            className="bg-gray-600 text-white cursor-pointer aspect-w-2 aspect-h-1"
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