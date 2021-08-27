export const resultReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_RESULT":
            return action.payload !== undefined && action.payload
        default: 
            return state
    }
}