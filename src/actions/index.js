export const operatorAction = (keyName) => {
    return {
        type: "operatorAction",
        keyName,
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