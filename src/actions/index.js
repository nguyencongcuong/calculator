export const operatorString = (keyName) => {
    return {
        type: "operatorString",
        keyName
    }
}

export const operatorReset = () => {
    return {
        type: "operatorReset"
    }
}

export const operatorBack = () => {
    return {
        type: "operatorBack"
    }
}

export const operator_1 = () => {
    return {
        type: "operator_1"
    }
}

export const operatorEqual = (operatorString) => {
    return {
        type: "operatorEqual",
        operatorString,
    }
}

export const result = (data) => {
    return {
        type: "result",
        data,
    }
}

export const isCalAble = (operator) => {
    return {
        type: "isCalAble",
        operator,
    }
}