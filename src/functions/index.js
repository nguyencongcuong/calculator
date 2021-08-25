/**
 ** Check if a string is matched by the rule of a regex
 *  @param {string, regex}
 *  @return {boolean} 
 */
export function isMatched(string, regex) {
    if (string.match(regex) !== null) {
        return true
    } else {
        return false
    }
}

/**
 ** Check if a string of math operator is able to solve
 *  @param {string}
 *  @return {boolean} 
 *
 *? isCalAble(10) returns true
 *? isCalAble(10+5) returns true
 *? isCalAble(10-5) returns true
 *? isCalAble(+10) returns false
 *? isCalAble(12+) returns false
 *? isCalAble(15*) returns false
 */
export const isCalAble = (operator) => {
    const regex1 = new RegExp(/^(\+|\*|\/)|(\+|-|\*|\/)$/, "g")
    const regex2 = new RegExp(/^\./, "g")
    return (isMatched(operator, regex1) || isMatched(operator, regex2)) ? false : true
}

/**
 ** Delete any last character from a string
 *  @param {string} - string of math operator
 *  @return {string} - new string excluding the last character
 *? deleteLastChar("6*") returns "6"
 */
export function deleteLastChar(string) {
    let strArr = string.split("")
    strArr.pop()
    return strArr.join("")
}