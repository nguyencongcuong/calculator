// ? Check if the state operater matchs the string "+, -, *, /" at the beginning and the bottom of the tring
export const isCalAble = (operator) => {
    const regex1 = new RegExp(/^(\+|\*|\/)|(\+|-|\*|\/)$/, "g")
    const regex2 = new RegExp(/^\./, "g")
    return (isMatched(operator, regex1) || isMatched(operator, regex2)) ? false : true
}

export function deleteLastChar(string) {
    let strArr = string.split("")
    strArr.pop()
    return strArr.join("")
}

export function isMatched(string, regex) {
    if (string.match(regex) !== null) {
        return true
    } else {
        return false
    }
}