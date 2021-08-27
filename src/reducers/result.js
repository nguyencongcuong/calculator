export const resultReducer = (state = "", action) => {
    switch(action.type) {
        case "resultAction":
            return action.payload !== undefined && action.payload
        default: 
            return state
    }
}