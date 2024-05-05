const nameReducer = (state = {}, action) => {
    switch (action.type){
        case "SEND":
            return state = action.payload
        default:
            return state;
    }
}

export default nameReducer;