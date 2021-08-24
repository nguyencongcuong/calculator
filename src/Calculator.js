import React from 'react'
import Screen from './components/Screen'
import Pad from './components/Pad'

import { isInputError } from './functions'

console.log(isInputError("8"))

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