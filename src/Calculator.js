import React from 'react'
import Screen from './components/Screen'
import Pad from './components/Pad'

function Calculator() {
    return (
        <React.Fragment>
            <div className="w-full p-4">
                <h1 className="text-2xl text-center font-bold uppercase p-4 mb-8">Simple Calculator</h1>
                <div className="rounded-lg overflow-hidden">
                    <Screen />
                    <Pad />
                </div>
            </div>
        </React.Fragment>

    )
}

export default Calculator