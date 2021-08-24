export const isInputError = (operatorStr) => {
    const regex1 = new RegExp(/(\D{2,})/, "g")
    const regex2 = new RegExp(/(^\.)|(\.{2,})|\.[0-9]+\./, "g") // Match errors relating to "."
    const regex3 = new RegExp(/(0{2,})|(0)([0-9])/, "g") // Match errors relating to "0"

    if (operatorStr === "") {
        return false
    } else if (operatorStr.match(regex1) !== null) {
        return true
    } else if (operatorStr.match(regex2) !== null) {
        return true
    } else if (operatorStr.match(regex3) !== null) {
        return true
    } else {
        return false
    }
}

// ? Check if the state operater matchs the string "+, -, *, /" at the beginning and the bottom of the tring
export const isCalAble = (operatorStr) => {
    const regex1 = new RegExp(/^(\+|-|\*|\/)|(\+|-|\*|\/)$/, "g")
    const regex2 = new RegExp(/\./, "g")
    const match1 = operatorStr.match(regex1)
    const match2 = operatorStr.match(regex2)
    if (match1 === null) {
        return true
    } else {
        if (match1.length !== 0) {
            return false
        } else if (match2.length >= 2) {

        } else {
            return true
        }
    }
}

export const isMatchRemainder = (str) => {
    const matchRemainderRegex = new RegExp(/%$/, "g")
    const matched = str.match(matchRemainderRegex)
    return matched === null ? false : true
}