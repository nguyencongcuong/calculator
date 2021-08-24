// export const isInputError = (operatorStr) => {
//     const regex1 = new RegExp(/(\D{2,})/, "g")

//     if (operatorStr.match(regex1) !== null) {
//         return true
//     } else {
//         return false
//     }
// }

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