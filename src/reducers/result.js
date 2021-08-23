export const resultReducer = (state = "", action) => {
    switch(action.type) {
        case "result":
            return action.data != undefined && action.data
        default: 
            return state
    }
}