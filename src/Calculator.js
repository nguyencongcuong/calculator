import React from 'react'
import Screen from './components/Screen'
import Pad from './components/Pad'

function Calculator() {
    return (
        <React.Fragment>
            <div className="w-full p-4">
                <div className="rounded-lg overflow-hidden">
                    <Screen />
                    <Pad />
                </div>
            </div>
        </React.Fragment>

    )
}

export default Calculator