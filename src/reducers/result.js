export const resultReducer = (state = "", action) => {
    switch(action.type) {
        case "resultAction":
            return action.data !== undefined && action.data
        default: 
            return state
    }
}