export const operatorAction = (keyName) => {
    return {
        type: "operatorAction",
        keyName,
    }
}

export const resultAction = (data) => {
    return {
        type: "resultAction",
        payload: data
    }
}

export const isCalAble = (operator) => {
    return {
        type: "isCalAble",
        operator,
    }
}